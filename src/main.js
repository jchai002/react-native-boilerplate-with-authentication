var React = require('react-native');
var {
  StyleSheet,
  Navigator
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');

var ROUTES = {
  signin: Signin,
  signup: Signup
};

module.exports= React.createClass({
  componentWillMount: function(){
    Parse.initialize("1IELFCZthB1TUv4Z8akAB85vkGYfE1gO5Y94inaB", "BHmJgq2I7QocfBeMHmAsFblPu5wailH1G29bTMhk");
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name]; // ROUTES['signin'] => Signin
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
