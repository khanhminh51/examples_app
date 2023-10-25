import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Slideshow from 'react-native-image-slider-show';
import Slider from './Slider';

class Facebook extends React.Component{
  static options(props) {
    return {
      topBar: {
        title: {
          text: props.name,
        },
      },
    };
  }

  render(){
    return(
      <SafeAreaView style={{backgroundColor: 'white', padding: 5}}>
      <Header />
      <Story />
      <NewFeeds />
      <BottomTab />
    </SafeAreaView>
    )
  }
}


function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.topHeader}>
        <View>
          <Image
            style={{height: '60%', width: 120, resizeMode: 'stretch'}}
            source={require('./../../public/img/logofacebook.png')}
          />
        </View>
        <View style={styles.topHeader_right}>
          <View
            style={{
              paddingRight: 10,
            }}>
            <AntDesign name="search1" size={32} color="grey" />
          </View>
          <View
            style={{
              justifyContent: 'center',
              paddingRight: 5,
            }}>
            <MaterialCommunityIcons
              name="facebook-messenger"
              size={32}
              color="grey"
            />
          </View>
        </View>
      </View>
      <View style={styles.middleHeader}>
        <FontAwesome6 name="newspaper" size={40} color="grey" />
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={40}
          color="grey"
        />
        <Octicons name="video" size={40} color="grey" />
        <Fontisto name="bell" size={40} color="grey" />
        <EvilIcons name="navicon" size={40} color="grey" />
      </View>
      <View style={styles.bottomHeader}>
        <MaterialCommunityIcons name="account" size={40} color="grey" />
        <View
          style={{
            borderBlockColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            width: '70%',
            height: '70%',
          }}>
          <TextInput placeholder="What is your mind?" />
        </View>
        <FontAwesome name="photo" size={35} color="grey" />
      </View>
    </View>
  );
}

function Story() {
  return (
    <View style={styles.story}>
      <View>
        <Slideshow
          height={140}
          dataSource={[
            {
              title: '',
              caption: '',
              url: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
            },
            {
              title: '',
              caption: '',
              url: 'https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg',
            },
            {
              title: '',
              caption: '',
              url: 'https://www.thespruceeats.com/thmb/l4w6PvMqsz1EjueCAh_foPmYafM=/3456x3456/smart/filters:no_upscale()/garlic-burger-patties-333503-hero-01-e4df660ff27b4e5194fdff6d703a4f83.jpg',
            },
          ]}
        />
      </View>
    </View>
  );
}

function NewFeeds() {
  return (
    <View style={styles.newfeed}>
      <View style={styles.status}>
        <Slider />
      </View>
    </View>
  );
}

function BottomTab() {
  return (
    <View style={styles.bottomtab}>
      <FontAwesome name="home" size={40} color="grey" />
      <Fontisto name="player-settings" size={40} color="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '24%',
    borderBlockColor: 'red',
    borderWidth: 2,
  },
  topHeader: {
    borderBottomColor: 'black',
    borderWidth: 1,
    height: '35%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topHeader_right: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  middleHeader: {
    borderBottomColor: 'black',
    borderWidth: 1,
    height: '35%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomHeader: {
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  story: {
    height: '20%',
    borderBlockColor: 'blue',
    borderWidth: 2,
  },
  newfeed: {
    height: '48%',
    borderBlockColor: 'black',
    borderWidth: 2,
  },
  status: {
    borderBlockColor: 'black',
    // borderWidth: 1,
    height: 300,
    width: '100%',
    // display: 'flex',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  bottomtab: {
    height: '8%',
    paddingLeft: 4,
    paddingRight: 4,
    borderBlockColor: 'yellow',
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default Facebook;
