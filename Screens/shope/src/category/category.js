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
import {Navigation} from 'react-native-navigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import menu from './../menu/menu';
import profile from '../profile/profile';
import cart from '../cart/cart';

class category extends React.Component {
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
      <ScrollView>
        <SafeAreaView>
          <View>
            <TopBar />
            <Products />
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

function TopBar(props) {
  return (
    <View style={styles.topbar}>
      <View style={styles.sideMenu}>
        <Pressable
          onPress={() =>
            Navigation.showModal({
              stack: {
                children: [
                  {
                    component: {
                      name: 'menu',
                      id: 'menu',
                      passProps: {
                        name: 'Side menu',
                        text: 'this is side menu',
                      },
                      options: {
                        topBar: {
                          title: {
                            text: 'Modal',
                          },
                        },
                      },
                    },
                  },
                ],
              },
            })
          }>
          <MaterialCommunityIcons
            style={{textAlign: 'center'}}
            name="menu"
            size={46}
            color="black"
          />
        </Pressable>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Find items"
          style={{
            backgroundColor: 'white',
            borderRadius: 30,
            borderWidth: 1,
            height: '90%',
            textAlign: 'center',
          }}></TextInput>
      </View>
      <View style={styles.cart}>
        <Pressable
          onPress={() =>
            Navigation.showModal({
              stack: {
                children: [
                  {
                    component: {
                      name: 'cart',
                      id: 'cart',
                      passProps: {
                        name: 'My cart',
                        yourName: 'Phạm Khánh Minh',
                        status: 'online',
                      },
                    },
                  },
                ],
              },
            })
            // Navigation.push('cart', {
            //   component: {
            //     name: 'cart',
            //     id: 'cart',
            //     passProps: {
            //       name: 'Category',
            //       status: 'online',
            //     },
            //   },
            // })
          }>
          <AntDesign
            style={{textAlign: 'center'}}
            name="shoppingcart"
            size={36}
            color="black"
          />
        </Pressable>
      </View>
      <View style={styles.profile}>
        <Pressable
          onPress={() =>
            Navigation.showModal({
              stack: {
                children: [
                  {
                    component: {
                      name: 'profile',
                      id: 'profile',
                      passProps: {
                        name: 'My Account',
                        yourName: 'Phạm Khánh Minh',
                        status: 'online',
                      },
                    },
                  },
                ],
              },
            })
          }>
          <FontAwesome
            style={{textAlign: 'center'}}
            name="user-circle"
            size={34}
            color="black"
          />
        </Pressable>
      </View>
    </View>
  );
}

function Products() {
  const items = [
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/August2022/ssDSC04362_copy.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
    {
      name: 'Áo thun Marvel Captain America',
      image:
        'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg',
      price: '299.000',
    },
  ];
  return (
    <View style={styles.products}>
      {items.map(item => (
        <View style={styles.item}>
          <Image
            source={{uri: item.image}}
            style={{width: '100%', height: 90}}
          />
          <Text>{item.name}</Text>
          <Text>{item.price} VNĐ</Text>
        </View>
      ))}
    </View>
  );
}

//register component
Navigation.registerComponent('menu', () => menu);
Navigation.registerComponent('profile', () => profile);
Navigation.registerComponent('cart', () => cart);

const styles = StyleSheet.create({
  topbar: {
    top: 0,
    height: 46,
    display: 'flex',
    flexDirection: 'row',
  },
  sideMenu: {
    width: '14%',
    backgroundColor: 'white',
  },
  search: {
    width: '58%',
    justifyContent: 'center',
  },
  cart: {
    width: '14%',
    justifyContent: 'center',
  },
  profile: {
    width: '14%',
    justifyContent: 'center',
  },
  products: {
    height: '100%',
    backgroundColor: '#FF8244',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    borderWidth: 1,
    height: 150,
    width: '30%',
    margin: 5,
    alignItems: 'center',
  },
});

export default category;
