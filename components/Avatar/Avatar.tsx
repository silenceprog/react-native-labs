import { Image, View } from "react-native";

import defaultStyles from './styles';

function Avatar() {
  const styles = defaultStyles();

  return (
    <>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/img/photo.jpg')}
        />
      </View>
    </>
  );
}

export default Avatar;