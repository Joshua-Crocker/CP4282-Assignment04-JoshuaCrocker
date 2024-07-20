import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, isActive }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          isActive && styles.activeButton,
          pressed && styles.pressedButton,
        ]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    margin: 5,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#2980b9',
  },
  pressedButton: {
    backgroundColor: '#1f5a7d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});