import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class HomeScreen extends Component  {

    render() {
      const navigation = this.props.navigation;
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      
              <Text>Home Screen</Text>    
              <Button title="Press Me" onPress={()=> navigation.navigate('Settings')}/>
          </View>
      );
    }
}

export default HomeScreen;