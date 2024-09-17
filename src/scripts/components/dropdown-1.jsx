import React from "react";

export const DropdownMenu = ({ label, anchorElement, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <pre>dropdown-1</pre>
      {React.cloneElement(anchorElement, { onClick: () => setIsOpen(!isOpen) })}
      {isOpen && (
        <ul>
          {items.map((item) => (
            <li key={item.type}>
              <button onClick={item.onClick}>{item.label}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
