const Stats = ({ items }) => {
  const numberOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = (packedItems / numberOfItems) * 100 || 0;
  let message;

  if (numberOfItems === 0) {
    message =
      "No items on the list yet! 😢. Please add some items for your next tour.";
  } else if (numberOfItems === packedItems && numberOfItems > 0) {
    message = "You are good to go! 🎉";
  } else {
    const percentagePacked = percentage.toFixed(2);
    message = `👜 You have ${numberOfItems} items on the list, and you already packed ${packedItems} (${percentagePacked}%) items.`;
  }

  return (
    <footer className="stats">
      <em>{message}</em>
    </footer>
  );
};

export default Stats;
