import React, { useState } from "react";
import Item from "./Items";
import Search from "./Search";

const PackingList = ({ items, onRemoveItem, onToggleItem, clearList }) => {
  const [sortBy, setSortBy] = useState("input");
  const [searchQuery, setSearchQuery] = useState("");

  let sortedItems = [...items];
  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "quantity") {
    sortedItems.sort((a, b) => a.quantity - b.quantity);
  } else if (sortBy === "packed") {
    sortedItems.sort((a, b) => a.packed - b.packed);
  }

  const filteredItems = sortedItems.filter((item) => {
    const description = item.description.toLowerCase();
    const query = searchQuery.toLowerCase();
    let currentIndex = 0;
    for (let i = 0; i < description.length; i++) {
      if (description[i] === query[currentIndex]) {
        currentIndex++;
      }
      if (currentIndex === query.length) {
        return true;
      }
    }
    return false;
  });

  return (
    <div className="list">
      <ul>
        {filteredItems.map((item) => (
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
        <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
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
