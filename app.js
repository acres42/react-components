
// var Kale = () => (
//   <li>kale</li>
// );
// var Cheese = () => (
//   <li>cheese</li>
// );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    }
  }

  onGroceryListItemMouseEnter() {
    this.setState({
      hovering: true
    });
  }

  onGroceryListItemMouseLeave() {
    this.setState({
      hovering: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
    };

    return (
      <li
        style={style}
        onMouseEnter={this.onGroceryListItemMouseEnter.bind(this)}
        onMouseLeave={this.onGroceryListItemMouseLeave.bind(this)}
      >
        {this.props.groceryListItem}
      </li>
    )
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryListItems.map(groceryListItem =>
      <GroceryListItem groceryListItem={groceryListItem} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList groceryListItems={['kale', 'cucumbers']} />, document.getElementById('app'));
