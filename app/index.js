import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from 'react';
import Button from '../components/Button';
import Leagues from '../components/Leagues';
import { useSQLiteContext } from "expo-sqlite";

export default function App() {
  const db = useSQLiteContext();
  const [currentIndex, setIndex] = useState(0);
  const [loading, isLoading] = useState(true);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    async function start() {
      const result = await db.getAllAsync('SELECT * FROM leagues');
      setLeagues(result);
      isLoading(false);
    }
    start();
  }, []);

  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  else {
    return (
      <View style={styles.container}>
        <Leagues props={leagues[currentIndex]} />
        <View style={styles.buttonContainer}>
          {leagues.map((league, index) =>
            <Button
              key={index}
              label={index + 1}
              onPress={() => setIndex(index)}
              isActive={index === currentIndex}
            />
          )}
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    color: '#888',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
});