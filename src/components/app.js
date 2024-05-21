import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

import "../css/index.css";

const App = () => {
  const localItems = JSON.parse(window.localStorage.getItem("tour-plan-app"));
  const [items, setItems] = useState(localItems || []);

  React.useEffect(() => {
    window.localStorage.setItem("tour-plan-app", JSON.stringify(items));
  }, [items]);

  const handleItemChange = (newItem) => {
    setItems((items) => [...items, newItem]);
  };
  const handleItemRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleItemToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
      alert("List cleared successfully!");
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItems={handleItemChange} />
      <PackingList
        items={items}
        onRemoveItem={handleItemRemove}
        onToggleItem={handleItemToggle}
        clearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};
export default App;
