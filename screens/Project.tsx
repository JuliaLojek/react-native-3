import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../navigation/StackNav";
import ColorPickerModal from "../components/ColorPickerModal";
import { globalStyles } from "../styles/global";
import ProjectArea from "../components/ProjectArea";
// import { RouteProp } from "@react-navigation/native";

// extracting navigation prop and route prop separately:
// interface ProjectProps {
//   navigation: StackNavigationProp<StackParamList, "Project">;
//   route: RouteProp<StackParamList, "Project">;
//   id?: number;
// }
// extracting navigation prop and route prop together:
type ProjectProps = StackScreenProps<StackParamList, "Project">;

const Project: React.FC<ProjectProps> = ({ route }) => {
  const [projectName, setProjectName] = useState(route.params.project.name);
  const [projectStructure, setProjectStructure] = useState(
    route.params.project.structure
  );

  const [isSaved, setIsSaved] = useState(false);
  const [currentColor, setCurrentColor] = useState("#800080");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View>
      <ColorPickerModal
        isModalOpen={isModalOpen}
        handleModalClose={() => setIsModalOpen(false)}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <View style={styles.colorWrapper}>
        <Text style={globalStyles.bigText}>kolor:</Text>
        <View
          style={{ ...styles.colorBox, backgroundColor: currentColor }}
        ></View>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => setIsModalOpen(true)}
        >
          <Text style={globalStyles.smallText}>zmień</Text>
          <Ionicons
            name="ios-color-palette"
            size={22}
            style={globalStyles.smallIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.projectWrapper}>
        <Text style={styles.title}>{projectName}</Text>

        <ProjectArea
          currentColor={currentColor}
          isShifted={route.params.project.isShifted}
          projectStructure={projectStructure}
          setProjectStructure={setProjectStructure}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  colorWrapper: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  colorBox: {
    width: "40%",
    height: 24,
    borderColor: "#000",
    borderWidth: 1,
  },
  projectWrapper: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default Project;
