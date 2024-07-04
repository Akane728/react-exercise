import ListGroup from "./components/ListGroup";

import Button from "./components/Button";

import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Paris", "Los Angeles", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  // return (
  //   <div

  //     className="alert alert-primary"
  //   >
  //     <Alert>
  //       Hello <span>World!</span>
  //     </Alert>
  //   </div>
  // );

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert!</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
