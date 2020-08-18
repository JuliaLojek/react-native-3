import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../navigation/StackNav";
import ColorPickerModal from "../components/ColorPickerModal";
// import { RouteProp } from "@react-navigation/native";

// extracting navigation prop and route prop separately:
// interface ProjectProps {
//   navigation: StackNavigationProp<StackParamList, "Project">;
//   route: RouteProp<StackParamList, "Project">;
//   id?: number;
// }
// extracting navigation prop and route prop together:
type ProjectProps = StackScreenProps<StackParamList, "Project">;

const Project: React.FC<ProjectProps> = ({ navigation, route }) => {
  const [projectId, setProjectId] = useState(route.params.id);
  const [currentColor, setCurrentColor] = useState("#800080");
  const [isSaved, setIsSaved] = useState(false);
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
        <Text style={styles.colorText}>kolor:</Text>
        <TouchableOpacity
          style={{ ...styles.colorBox, backgroundColor: currentColor }}
          onPress={() => setIsModalOpen(true)}
        ></TouchableOpacity>
      </View>
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
  colorText: {
    fontSize: 24,
  },
  colorBox: {
    width: "60%",
    height: 24,
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default Project;
