import { Link } from "expo-router";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.navBarContainer}>
      <Link href="./update" asChild>
        <Pressable style={styles.navButton}>
          <Text style={styles.navText}>Update</Text>
        </Pressable>
      </Link>
      <Link href="/" asChild>
        <Pressable style={styles.navButton}>
          <Text style={styles.navText}>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 50,
    backgroundColor: '#3498db',
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  }
});
