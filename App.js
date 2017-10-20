import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Pie from './js/Pie';
import Theme from './js/theme';
import data from './resources/data';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
    };
  }


  shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a;
  }

  renderContent(selectedValue) {
    return <Text style={styles.text}>{selectedValue.name}</Text>
  }

  render() {
    const height = 360;
    const width = 350;

    return (
      <ScrollView>
        <View style={styles.container} >
          <Text style={styles.chart_title}>Distribution of spending this month</Text>
          <Pie
            pieWidth={300}
            pieHeight={300}
            onItemSelected={() => {}}
            colors={Theme.colors}
            width={width}
            height={height}
            renderContent={this.renderContent}
            data={data.spendingsLastMonth} />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    backgroundColor:'whitesmoke',
    marginTop: 21,
  },
  chart_title : {
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 18,
    backgroundColor:'white',
    color: 'grey',
    fontWeight:'bold',
  },
  text: {
    fontSize: 20,
    backgroundColor: 'transparent'
  }
}
