import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  // let [isLoading, setIsLoading] = useState(true);
  // let [error, setError] = useState();
  // let [response, setResponse] = useState();

  const [carregando, setCarregando] = useState(true)
  const [dados, setDados] = useState([])

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users") //DEUCERTO
    // fetch("https://temtem-api.mael.tech/api/freetem/rewards")
    fetch("https://temtem-api.mael.tech/api/patches")
      .then((resp) => resp.json())
      .then((json) => setDados(json))
      .catch(() => (alert('Erro ao carregar lista')))
      .finally(() => setCarregando(false))
  }, []
  )

  return (

    <View style={styles.container}>
      {/* <View style={styles.card}> //Teste sem FlatList
        <ScrollView>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

        </ScrollView>
      </View> */}
      <StatusBar style='auto' />
      <Text style={[styles.header]}>Lista de Patches</Text>
      {
        carregando ? <ActivityIndicator /> : (
          <FlatList
            style={styles.lista}
            data={dados}
            // keyExtractor={({id},index)=>id}
            renderItem={({ item }) => (
              //por enquanto farei apenas patches e depois saipark
              <View style={styles.card}>
                <Text style={styles.textoPatch}>
                  Nome: {item.name} {'\n'}
                  Data: {item.date} {'\n'}
                  Detalhes: {item.patchInfo.features.join('\n')}
                  {/*\n*/}
                  
                  {/* Nome: {item.name} {'\n'}
                  Quantidade:{item.quantity} {'\n'}
                  Requisitos:{item.requirement} {'\n'}
                  Data inicial:{item.startDate} {'\n'}
                  Data final:{item.endDate} {'\n'} */}
                </Text>
              </View>
            )
            }
          />
        )
      }
    </View>
  );
  // function incrementa (){
  //   for (var i = 0; i < item.patchInfo.features.length; i++) {
  //     if (item.patchInfo.features[i].selected) {
  //       i++;
  //       console.log(i);
  //     }
  //   }
  //   return i;
  // }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    color: "#000",
    fontSize: 20,
    marginTop: 10,
  },
  lista: {
    // flex: 1,
    // width: '100%',
    // backgroundColor: 'blue',
  },
  textoPatch: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#000'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 30,


  }
});
