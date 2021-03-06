import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "./StackNav";
import { TouchableOpacity } from "react-native-gesture-handler";

type ProjectProps = StackScreenProps<StackParamList, "Project">;

const NavHeader: React.FC<ProjectProps> = ({ navigation }) => {
  const arrowPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navSection} onPress={arrowPressHandler}>
        <AntDesign name="left" size={28} />
        <Text style={styles.navText}>wróć</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navSection}>
        <Text style={styles.navText}>zapisz</Text>
        <Entypo name="save" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
  },
  navSection: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  navText: {
    fontSize: 24,
    paddingHorizontal: 12,
  },
});

export default NavHeader;
