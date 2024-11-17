import React from "react";
import { DropdownMenu } from "./dropdown-1";
// import { DropdownMenu } from "./dropdown-2";

export const App = () => {
  return (
    <div>
      <h1>demo-react-dropdown-menu</h1>
      <nav>
        <DropdownMenu
          label={"1"}
          anchorElement={<button>Upload</button>}
          items={[
            { label: "Element 1", type: 'a', onClick: () => console.log("Element 1 clicked!") },
            { label: "Element 2", type: 'b', onClick: () => console.log("Element 2 clicked!") },
            { label: "Element 3", type: 'c', onClick: () => console.log("Element 3 clicked!") }
          ]}
          />
        <DropdownMenu
          label={"2"}
          anchorElement={<button>New</button>}
          items={[
            { label: "Item 1", type: 'x', onClick: () => console.log("Item 1 clicked!") },
            { label: "Item 2", type: 'y', onClick: () => console.log("Item 2 clicked!") },
            { label: "Item 3", type: 'z', onClick: () => console.log("Item 3 clicked!") }
          ]}
        />
      </nav>
    </div>
  );
};
