import { ScrollView, Text, View,Image } from "react-native";

import defaultStyles from './styles';

function Profile() {

  const styles = defaultStyles();

  return (
    <>
        <ScrollView contentContainerStyle={styles.root}>
        <Text style={styles.title}>
           Комар Максим Леонідович
        </Text>
        <Image
          source={require('../../assets/img/my_photo.jpg')}
        />
        <View style={styles.texts}>
          <Text>
          студент 4-ого курсу,інженерії програмного забезпечення
          </Text>
          <Text>
          Зробив багато проектів, ось декілька з них:Створений за допомогою Java калькулятор під Android,гра Ханойська вежа на Java,
          Сайт з блогом,сортуванням по даті і фільтруванні по категоріям на React,створення AJAX-запитів до веб-сервера на Java
          </Text>
          <Text>
            Автобіографія

            Народився 24.10.2002 у Черкаській області,Черкасах
            Середню освіту отримав у Черкаській гімназії №9
            Із вересня 2020 року по сьогодні навчаюся в Черкаському
            державному технологічному університеті за спеціальністю
            інженер програмного забезбечення.
          </Text>
        </View>
      
      </ScrollView>
    </>
  )
}

export default Profile;