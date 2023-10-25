import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Button,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class homebank extends React.Component {
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
      <SafeAreaView>
        <Header fullname={this.props.name}/>
        <Content />
        <Footer />
      </SafeAreaView>
    );
  }
}




function Header(props) {
  return (
    <View style={styles.header}>
      <ImageBackground
        source={require('./../../public/img/backgroundmb.png')}
        style={styles.backgroundImage}>
        <View style={styles.headerTop}>
          <View>
            <MaterialCommunityIcons name="account" size={50} color="grey" />
          </View>
          <View style={styles.logo}>
            <Image
              style={{height: 50, width: '100%'}}
              source={require('./../../public/img/logomb.png')}
            />
          </View>
          <View>
            <MaterialCommunityIcons name="bell" size={50} color="grey" />
          </View>
        </View>
        <View style={styles.headerInfor}>
          <Text style={{fontSize: 18, color: 'black'}}>Xin chào</Text>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: 'black'}}>
            {props.fullname}
          </Text>
          <Text style={{fontSize: 18, marginTop: 18, color: 'black'}}>
            Xem tài khoản
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

function Content() {
  const features = [
    {
      name: 'bank-transfer',
      size: 50,
      color: '#4169e1',
      content: 'Chuyển tiền',
    },
    {
      name: 'cellphone',
      size: 50,
      color: '#4169e1',
      content: 'Nạp điện thoại',
    },
    {
      name: 'piggy-bank-outline',
      size: 50,
      color: '#4169e1',
      content: 'Tiết kiệm',
    },
    {
      name: 'qrcode',
      size: 50,
      color: '#4169e1',
      content: 'QR Pay',
    },
    {
      name: 'hand-coin-outline',
      size: 50,
      color: '#4169e1',
      content: 'Vay tiêu dùng',
    },
    {
      name: 'credit-card-outline',
      size: 50,
      color: '#4169e1',
      content: 'Dịch vụ thẻ',
    },
  ];
  return (
    <View style={styles.content}>
      {features.map(feature => (
        <Feature
          name={feature.name}
          size={feature.size}
          color={feature.color}
          content={feature.content}
        />
      ))}
    </View>
  );
}

function Feature({name, size, color, content}) {
  return (
    <View style={styles.feature}>
      {/* <Button
          title="Press"
          color="#f194ff"
          onPress={() => Alert.alert('Pressed')}
        /> */}
      <MaterialCommunityIcons
        style={{textAlign: 'center'}}
        name={name}
        size={size}
        color={color}
      />
      <Text style={{fontWeight: '700', textAlign: 'center'}}>{content}</Text>
    </View>
  );
}
function Footer() {
  const navigates = [
    {
      name: 'home',
      size: 40,
      color: '#1700D6',
      content: 'Trang chủ',
    },
    {
      name: 'card-multiple-outline',
      size: 40,
      color: '#808080',
      content: 'Sản phẩm',
    },
    {
      name: 'account-multiple',
      size: 40,
      color: '#808080',
      content: 'Gia đình',
    },
    {
      name: 'gamepad-square-outline',
      size: 40,
      color: '#808080',
      content: 'Tiện ích',
    },
  ];
  return (
    <View style={styles.footer}>
      {navigates.map(navigate => (
        <Navigate
          name={navigate.name}
          size={navigate.size}
          color={navigate.color}
          content={navigate.content}
        />
      ))}
    </View>
  );
}

function Navigate({name, size, color, content}) {
  return (
    <View style={styles.navigate}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
      <Text style={{fontWeight: '700'}}>{content}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: '30%',
    width: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    opacity: 1,
    borderRadius: 10,
  },
  headerTop: {
    zIndex: 10,
    height: '30%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  logo: {
    zIndex: 10,
    height: '100%',
    width: '40%',
  },
  headerInfor: {
    zIndex: 10,
    height: '70%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: '55%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  feature: {
    height: 110,
    width: 110,
    backgroundColor: '#f8f8ff',
    margin: 10,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'grey',
    justifyContent: 'center',
  },
  footer: {
    height: '15%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  navigate: {
    height: '100%',
    width: '25%',
    alignItems: 'center',
  },
});

export default homebank;
