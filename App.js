import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, Button, Pressable, Alert, LogBox} from 'react-native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Temfont-Regular': require('./assets/fonts/Temfont-Regular.otf'),
  });

  const [carregando, setCarregando] = useState(true)
  const [dados, setDados] = useState([])


  useEffect(() => {
    // fetch("https://temtem-api.mael.tech/api/freetem/rewards")
    // fetch("https://temtem-api.mael.tech/api/patches")
    // Promise.all([
    //   fetch("https://temtem-api.mael.tech/api/temtems")
    // ]).then((value) => value.json())
    fetch("https://temtem-api.mael.tech/api/saipark")
    .then((resp) => resp.json())
    .then((json) => setDados(json))
    .then(json => console.log(JSON.stringify(json)))
    .catch(() => (alert('Erro ao carregar lista')))
    .finally(() => setCarregando(false))
  }, []
  )

  if (!loaded) {
    return null;
  }


  LogBox.ignoreAllLogs(true) //Desabilita os warnings no app

  return (

    <View style={styles.container}>
      <StatusBar style='auto' />
      <Text style={[styles.header]}>Lista de Saipark</Text>
      {
        carregando ? <ActivityIndicator /> : (
          <FlatList
            // initialNumToRender={2}
            // windowSize={3}
            style={styles.lista}
            data={dados}
            // keyExtractor={({id},index)=>id}
            // keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={[styles.card, styles.shadowProp]}>
                <Text style={styles.textoSaipark}>
                  Periodo: De {item.startDateFormatted} a {item.endDateFormatted} {'\n'}
                  Temtem¹: {item.land.map((secItem) => (
                  secItem.temtem)).join('\nTemtem²: ')} {'\n'}
                  Chance¹: {item.land.map((secItem) => (
                    'x'+secItem.lumaRate
                  )).join('\nChance²: ')} {'\n'}
                  Porcentagem de Encontro¹: {item.land.map((secItem) => (
                  secItem.ratePercent+ '%')).join('\nPorcentagem de Encontro²: ')} {'\n'}
                  Local¹: {item.land.map((secItem) => (
                    secItem.areas
                  )).join('\nLocal²: ')} {'\n'}
                </Text>
                {/* Aqui deveria ficar as imagens dos tems ou a imagem do tweet do saipark */}
                {/* <Image source={{uri: `${item.tweet}`}}
                  style={{flex:1, width: 300, height: 200, resizeMode: 'contain'}}
                /> */}
                
              </View>
            )
          }
          />
          )
      }
      <Pressable style={styles.fab} onPress={() => Alert.alert('Este botão deve recarregar a página!')}>
        <Image source={require('./assets/refresh.png')}/>
      </Pressable>
    </View>
  );
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
    color: "#fba056",
    borderColor: "#402c4a",
    marginTop: 10,
    fontFamily: 'Temfont-Regular',
    fontSize: 27
  },
  lista: {
    // flex: 1,
    // width: '100%',
    // backgroundColor: 'blue',
  },
  textoSaipark: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#000',
    fontFamily: 'Temfont-Regular',
    fontSize: 23
  },
  card: {
    backgroundColor: '#72d5ce',
    borderRadius: 10,
    padding: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 30,
    elevation: 2,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  fab: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#fba056',
    borderRadius: 100,
  }
});
