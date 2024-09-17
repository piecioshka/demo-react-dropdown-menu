import React from "react";
// import { DropdownMenu } from "./dropdown-1";
import { DropdownMenu } from "./dropdown-2";

export const App = () => {
  return (
    <div>
      <h1>My React App!</h1>
      <nav>
        <DropdownMenu
          label='upload'
          anchorElement={<button>Upload</button>}
          items={[
            { label: "Item 1", type: 'x', onClick: () => console.log("Item 1 clicked!") },
            { label: "Item 2", type: 'y', onClick: () => console.log("Item 2 clicked!") },
            { label: "Item 3", type: 'z', onClick: () => console.log("Item 3 clicked!") }
          ]}
          />
        <DropdownMenu
          label='new'
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
