import ListGroup from "./Components/ListGroup";

function App() {
  let items = [
    "New York",
    "Paris",
    "San Francisco",
    "London",
    "Tokio",
    "German",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
