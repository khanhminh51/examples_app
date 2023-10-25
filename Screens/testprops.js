import React from 'react';
import {Text, View,Button} from 'react-native';
import {useState} from 'react';


class UserProfileScreen extends React.Component {
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
    // const [counter, setCounter] = useState(0);

    // // Action: code that causes an update to the state when something happens
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1);
    };

    return (
      <View>
        <Text>
          Test redux
        </Text>
        <Button
          // onPress={}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}


export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

const initialState = {
  count: 0,
};

export default UserProfileScreen;
