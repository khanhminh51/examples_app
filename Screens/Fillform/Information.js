import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
// import Picker from '@react-native-picker/picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CheckBox from 'react-native-check-box';
import SelectMultiple from 'react-native-select-multiple';

class Information extends React.Component{
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
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [selectedGender, setSelectedGender] = useState();
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckBoxChange = () => {
      setIsChecked(!isChecked);
    };
  
    //Dropdown picker
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'},
    ]);
  
    // checkbox 2
    // multi checkbox
    const fruits = ['Apples', 'Oranges', 'Pears'];
    return(
      <SafeAreaView style={{backgroundColor: 'white', padding: 10}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            paddingBottom: 20,
            fontSize: 30,
            fontWeight: 'bold',
            color: 'green',
          }}>
          Fill Your Information
        </Text>
      </View>
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            Your Name
          </Text>
          <TextInput
            style={{height: 40}}
            placeholder="Sir Alex"
            onChangeText={newName => setName(newName)}
            defaultValue={name}
          />
        </View>
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            Address
          </Text>
          <TextInput
            style={{height: 40}}
            placeholder="37 Hoa Cuc, phuong 7, quan Phu Nhuan"
            onChangeText={newAdrress => setAddress(newAdrress)}
            defaultValue={address}
          />
        </View>

        {/* <View>
          <Text>Gender</Text>
          <View>
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedGender(itemValue)
              }>
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
        </View>

        <View>
          <Text>Student</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
        </View> */}

        {/* Gender */}
        <View>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              paddingBottom: 10,
            }}>
            Gender
          </Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        {/* Checkbox */}
        <View style={{paddingTop: 10}}>
          <BouncyCheckbox
            size={25}
            fillColor="red"
            unfillColor="#FFFFFF"
            text="I'm student"
            iconStyle={{borderColor: 'red'}}
            innerIconStyle={{borderWidth: 2}}
            textStyle={{fontFamily: 'JosefinSans-Regular'}}
            onPress={(isChecked: boolean) => {}}
          />
        </View>

        {/* Checkbox2 */}
        {/* <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={() => {
            this.setState({
              isChecked: !this.state.isChecked,
            });
          }}
          isChecked={this.state.isChecked}
          leftText={'CheckBox'}
        /> */}

        <View>
          <SelectMultiple
            items={fruits}
            // selectedItems={true}
            // onSelectionsChange={true}
          />
        </View>
        <View>
          <Button title="Submit" color="#841584" />
        </View>
      </View>
    </SafeAreaView>
    )
  }
}

export default Information;
