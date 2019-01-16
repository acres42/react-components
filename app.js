
// var Kale = () => (
//   <li>kale</li>
// );
// var Cheese = () => (
//   <li>cheese</li>
// );

var GroceryListItem = (props) => (
 <ul>
 <li>{props.groceryItems[0]}</li>
  <li>{props.groceryItems[1]}</li>
 </ul>
);

var GroceryList = () => (
  <div>
    <GroceryListItem groceryItems={['kale', 'cheese']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
