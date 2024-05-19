import React, { useState } from "react";
import Item from "./Items";

const PackingList = ({ items, onRemoveItem, onToggleItem, clearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems = [...items];
  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "quantity") {
    sortedItems.sort((a, b) => a.quantity - b.quantity);
  } else if (sortBy === "packed") {
    sortedItems.sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="quantity">Sort by Quantity</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button
          onClick={() => {
            clearList();
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
