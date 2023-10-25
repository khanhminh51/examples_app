import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class profile extends React.Component {
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
      <View>
        <Avatar />
        <Information />
        <Edit />
      </View>
    );
  }
}

function Avatar() {
  return (
    <View style={styles.avatar}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/images/backgroundProfile.png')}
        resizeMode="cover">
        <View style={styles.avatarContainer}>
          <Text style={{fontSize: 25, paddingBottom: 20, fontWeight: 'bold'}}>
            Phạm Khánh Minh
          </Text>
          <View style={styles.defaultavatar}>
            <Image
              style={{zIndex: 100, color: 'black', width: 78, height: 80}}
              source={require('../../assets/images/defaultAvatar.png')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

function Information() {
  const infors = [
    {
      value: 'Phạm Khánh Minh',
      icon: 'account',
      size: 35,
      color: '#FF3C00',
    },
    {
      value: 'phamkhanhminh@gmail.com',
      icon: 'email',
      size: 35,
      color: '#FF3C00',
    },
    {
      value: '*******',
      icon: 'eye',
      size: 35,
      color: '#FF3C00',
    },
    {
      value: '05-01-2002',
      icon: 'cake',
      size: 35,
      color: '#FF3C00',
    },
    {
      value: '0374544626',
      icon: 'cellphone',
      size: 35,
      color: '#FF3C00',
    },
    {
      value: 'phường Linh Trung, thành phố Thủ Đức',
      icon: 'home',
      size: 35,
      color: '#FF3C00',
    },
  ];
  return (
    <View style={styles.information}>
      {infors.map(infor => (
        <InforsIcon
          attribute={infor.attribute}
          value={infor.value}
          icon={infor.icon}
          size={infor.size}
          color={infor.color}
        />
      ))}
    </View>
  );
}
function InforsIcon({attribute, value, icon, size, color}) {
  return (
    <View style={styles.inforsIcon}>
      <View style={{paddingRight: 20, width: 65}}>
        <MaterialCommunityIcons name={icon} size={size} color={color} />
      </View>
      <Text style={{fontSize: 18, color: 'black'}}>{value}</Text>
    </View>
  );
}

function Edit() {
  return (
    <View style={styles.edit}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>EDIT PROFILE</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  avatar: {
    height: '30%',
  },
  avatarContainer: {
    padding: 16,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  defaultavatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
  },
  information: {
    height: '60%',
    backgroundColor: '#FFF3DF',
    padding: 8
  },
  inforsIcon: {
    borderBottomWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  edit: {
    height: '10%',
    backgroundColor: '#FFF3DF',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 8,
    elevation: 8,
    backgroundColor: '#FF3C00',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '80%'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default profile;
