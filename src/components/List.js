import React from "react";

function List(props) {
  console.log(props);
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {props.groceries.map((item) => {
        return (
          // TODO: Your code here
          <li
            className="list-group-item"
            key={item.id}
          >{` ${item.name} | purchased = ${item.purchased} | Unique ID = ${item.id}`}</li>
        );
      })}
    </ul>
  );
}

export default List;
