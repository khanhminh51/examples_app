import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class cart extends React.Component {
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
      <View style={styles.container}>
        <Items />
        <Price />
        <Order />
      </View>
    );
  }
}

function Items() {
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
  ];
  return (
    <ScrollView>
      <View style={styles.items}>
        {items.map(item => (
            <Item item={item} />

        ))}
      </View>
    </ScrollView>
  );
}
function Item(item) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemImage}>
        <Image source={{uri: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2022/anh-mau-ao-thun-marvel-captain-america-quote-xanh-navy-6.jpg'}} style={{width: '100%', height: 90}} />
      </View>
      <View style={styles.itemDetail}>
        <View>
          <Text>Áo thun Marvel Captain America</Text>
        </View>
        <View>
          <Text>299.000đ</Text>
        </View>
      </View>
      <View style={styles.itemQuantity}>
        <Pressable>
          <AntDesign
            style={{textAlign: 'center'}}
            name="minussquare"
            size={24}
            color="#FFBC1E"
          />
        </Pressable>
        <View style={{width: '35%', height: '26%', backgroundColor: 'white'}}>
          <Text style={{textAlign: 'center'}}>1</Text>
        </View>
        <Pressable>
          <AntDesign
            style={{textAlign: 'center'}}
            name="plussquare"
            size={24}
            color="#FFBC1E"
          />
        </Pressable>
      </View>
      <View style={styles.deleteItem}>
        <Pressable>
          <MaterialCommunityIcons
            style={{textAlign: 'center'}}
            name="delete"
            size={36}
            color="red"
          />
        </Pressable>
      </View>
    </View>
  );
}
function Price() {
  return (
    <View style={styles.price}>
      <View style={styles.contentPrice}>
        <View style={styles.detailPrice}>
          <Text>Sub total</Text>
          <Text>345.000 VNĐ</Text>
        </View>
        <View style={styles.detailPrice}>
          <Text>Shipping</Text>
          <Text>25.000 VNĐ</Text>
        </View>
        <View style={styles.detailPrice}>
          <Text>Total</Text>
          <Text>370.000 VNĐ</Text>
        </View>
      </View>
    </View>
  );
}

function Order() {
  return (
    <View style={styles.order}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3DF',
  },
  //ITEM
  items: {
    height: '45%',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#F3F3F3',
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    width: '90%',
    paddingTop: 5,
    paddingBottom: 5,
  },
  itemImage: {
    // borderWidth: 1,
    width: '25%',
  },
  itemDetail: {
    // borderWidth: 1,
    paddingLeft: 5,
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  itemQuantity: {
    display: 'flex',
    flexDirection: 'row',
    // borderWidth: 1,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteItem: {
    // borderWidth: 1,
    width: '15%',
    justifyContent: 'center',
  },
  //PRICE
  price: {
    height: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentPrice: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  detailPrice: {
    padding: 5,
    height: '33.33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //ORDER
  order: {
    height: '40%',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 8,
    elevation: 8,
    backgroundColor: '#FF3C00',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default cart;
