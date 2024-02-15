import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // コンポーネントがビューツリーに登録された直後に呼び出される
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  };

  // コンポーネントがビューツリーから外された直後に呼び出される
  componentWillUnmount() {
    clearInterval(this.timerID);
  };

  tick() {
    this.setState({ date: new Date()});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> 現在時刻 </Text>
        <Text>{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
