# rn-donut-chart

## Usage

```javascript
  import Pie from './js/Pie'

  class App extends Component {
    renderContent(selectedValue) {
      return <Text style={styles.text}>{selectedValue.name}</Text>
    }

    render() {
      return (
        <Pie
          pieWidth={300}
          pieHeight={300}
          onItemSelected={() => {}}
          colors={Theme.colors}
          width={500}
          height={500}
          renderContent={this.renderContent}
          data={data} />
      )
    }
  }
```

