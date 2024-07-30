// import { Fragment } from "react";
//import { MouseEvent } from "react";

//{ items:[], heading:string }

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let selectedIndex = 0;

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const [name, setName] = useState('');
  //arr[0] //varibale(selectedIndex)
  //arr[1] //updater function
  //   const message = items.length === 0 ? <p>No Item Found!!!!!</p> : null;

  //   const getMessage = () => {
  //     items.length === 0 ? <p>No Item Found!!!!!</p> : null;
  //   };

  //Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Item Found!!!!!</p> : null} */}
      {/* //true && 1 = 1 or false  && 1 = false */}
      {items.length === 0 && <p>No Item Found!!!</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
