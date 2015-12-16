var React = require('react-native');
var {
  View,
  StyleSheet,
  Text
} = React;
var Button = require('../common/button');

var Parse = require('parse/react-native');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      user: null
    };
  },
  componentWillMount: function() {
    Parse.User.currentAsync()
      .then((user) => { this.setState({user: user}); })
  },
  render: function() {
    if (!this.state.user) {
      return <Text>Loading...</Text>;
    }

    var username = this.state.user.get('username');

    return (
      <View style={styles.container}>
      <View style={styles.navbar}>
      <Button text={'LogOut'} onPress={this.onLogOutPress} />
      </View>
      <View style={styles.content}>
        <Text>Welcome back, {username}!</Text>

      </View>
      </View>
    );
  },
  onLogOutPress: function(){
    Parse.User.logOut()
    this.props.navigator.immediatelyResetRouteStack([{name: 'signin'}])
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  navbar: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 6
  },
  content: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
