import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const request = async(callback) => {
  const response = await fetch('https://swapi.dev/api/people/');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {
  const [registros, setRegistros] = useState([]);
  useEffect(()=> {
    request(setRegistros);
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API do Star Wars</Text>
      <FlatList
      data={registros}
      numColumns={2}
      renderItem={({item}) =>
      <View style={styles.cont}>
        <Text>Nome: {item.name} {'\n'}</Text> 
        <Text>Cor dos olhos: {item.eye_color}</Text>
      </View>
    }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  cont:{
    backgroundColor: '#a50800',
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    paddingVertical: 10,
    borderRadius: 18,
  },
  title: {
    textAlign: 'center',
    fontSize: 27,
  }
});
