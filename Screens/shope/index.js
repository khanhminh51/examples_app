import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Navigation} from 'react-native-navigation';

import category from './src/category/category';

class LoginShope extends React.Component {
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
      <ImageBackground
        style={{flex: 1}}
        source={require('./assets/images/loginbackground.png')}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              //   onChangeText={onChangeText}
              //   value={text}
              placeholder="Your Username"
            />
            <TextInput
              style={styles.input}
              //   onChangeText={onChangeNumber}
              //   value={number}
              placeholder="Your Password"
            />
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'category',
                    id: 'Category',
                    passProps: {
                      name: 'Category',
                      status: 'online',
                    },
                  },
                })
              }>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

Navigation.registerComponent('category', () => category);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputcontainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 8,
    elevation: 8,
    backgroundColor: '#15D200',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 370,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default LoginShope;
