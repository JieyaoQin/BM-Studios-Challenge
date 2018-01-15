import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Question'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>What is my favorite color?</Text>
        <Button
          onPress={() => navigate('Color')}
          title="Answer"
        />
      </View>
    );
  }

}

class ColorScreen extends React.Component {
  static navigationOptions = {
    title: 'Answer',
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 400,
          width: 400,
          padding: 0,
        }}>
        <View style={{backgroundColor: 'blue', flex: 1}} />
      </View>
    );
  }
}


export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Color: { screen: ColorScreen},
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

