import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,

} from 'react-native';


class menu extends React.Component {
  static options(props) {
    return {
      topBar: {
        title: {
          text: props.name,
        },
      },
    };
  }
  render() {
    return (
      <View style={styles.menuModal}>
        <Information />
        <Feature />
      </View>
    );
  }
}

function Information() {
  return (
    <View>
      <Text>Đây là thông tin người dùng</Text>
    </View>
  );
}

function Feature() {
  return (
    <View>
      <Text>Đây là tính năng</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menuModal: {
    height: '100%',
    width: '80%',
    backgroundColor: 'grey',
  },
});

export default menu;