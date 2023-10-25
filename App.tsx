import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import UserProfileScreen from './Screens/testprops';
import homebank from './Screens/Mbbank/homebank';
import Facebook from './Screens/Facebook/Facebook';
import Information from './Screens/Fillform/Information';
import LoginShope from './Screens/shope';

const HomeScreen = props => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('./public/img/hinhnen.png')}
      resizeMode="cover">
      <View style={styles.screen}>
        <View style={styles.appIcon}>
          <Pressable
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'UserProfile',
                  id: 'PROFILE_SCREEN_ID',
                  passProps: {
                    name: 'John Doe',
                    status: 'online',
                  },
                },
              })
            }>
            <Image
              source={require('./public/img/icon-test.png')}
              style={styles.imageIcon}
            />
          </Pressable>
        </View>
        <View style={styles.appIcon}>
          <Pressable
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'homebank',
                  id: 'HOME_BANK',
                  passProps: {
                    name: 'MB Bank',
                    status: 'online',
                  },
                },
              })
            }>
            <Image
              source={require('./public/img/icon-mbbank.png')}
              style={styles.imageIcon}
            />
          </Pressable>
        </View>
        <View style={styles.appIcon}>
          <Pressable
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'Facebook',
                  id: 'FACEBOOK',
                  passProps: {
                    name: 'Facebook',
                    status: 'online',
                  },
                },
              })
            }>
            <Image
              source={require('./public/img/icon-facebook.png')}
              style={styles.imageIcon}
            />
          </Pressable>
        </View>
        <View style={styles.appIcon}>
          <Pressable
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'Information',
                  id: 'INFORMATION',
                  passProps: {
                    name: 'Information',
                    status: 'online',
                  },
                },
              })
            }>
            <Image
              source={require('./public/img/icon-form.png')}
              style={styles.imageIcon}
            />
          </Pressable>
        </View>

        <View style={styles.appIcon}>
          <Pressable
            onPress={() =>
              Navigation.push(props.componentId,{
                component: {
                  name: 'LoginShope',
                  id: 'Shope',
                  passProps: {
                    name: 'Shopee',
                    status: 'online',
                  },
                },
              })
            }>
            <Image
              source={require('./Screens/shope/assets/images/logo-shopee.png')}
              style={styles.imageIcon}
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};
SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('UserProfile', () => UserProfileScreen);
Navigation.registerComponent('homebank', () => homebank);
Navigation.registerComponent('Facebook', () => Facebook);
Navigation.registerComponent('Information', () => Information);
Navigation.registerComponent('LoginShope', () => LoginShope);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                  },
                },
              ],
            },
          },
          // {
          //   stack: {
          //     children: [
          //       {
          //         component: {
          //           name: 'Settings',
          //         },
          //       },
          //     ],
          //   },
          // },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'row',
    padding: 25,
    flexWrap: 'wrap',
  },
  appIcon: {
    width: 80,
    height: 80,
    margin: 14,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
  },
  imageIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '95%',
    width: '95%',
  },
});
