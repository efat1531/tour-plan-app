import React, { useState } from "react";

const Form = ({ items, onAddItems }) => {
  const [itemDescription, setItemDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: items.length + 1,
      description: itemDescription,
      quantity,
      packed: false,
    };
    onAddItems(newItem);
    setItemDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={(event) => handleSubmit(event)}>
      <h3>What do you need for 😍 Trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemDescription}
        onChange={(e) => {
          setItemDescription(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
