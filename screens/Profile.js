import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/pfp.jpg")} />
      <View style={styles.slack}>
        <Text style={styles.slackText}>Slack handle :</Text>
        <Text style={styles.slackName}>@Dread</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL("http://github.com/dread557")}
      >
        <Text>Open GitHub</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 200,
  },
  slack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 90,
    marginBottom: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
  },
  slackText: {
    fontSize: 15,
  },
  slackName: {
    fontSize: 18,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "gold",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
