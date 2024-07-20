import { Text, Image, StyleSheet, View } from 'react-native';

export default function Leagues({ props }) {
  return (
    <View style={styles.leagueContainer}>
      <Text style={styles.leagueName}>{props.name}</Text>
      <Image style={styles.leagueImage} source={{ uri: `${props.imageLink}` }} />
      <Text style={styles.leagueYear}>{props.year}</Text>
      <Text style={styles.leagueCommissioner}>{props.commissioner}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  leagueContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  leagueName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leagueImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  leagueYear: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  leagueCommissioner: {
    fontSize: 16,
    color: '#555',
  }
});