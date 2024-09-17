import React from "react";

export const DropdownMenu = ({ label, anchorElement, items }) => {
  const ref = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(() => ref.current?.checked);
  return (
    <div>
      <pre>dropdown-2</pre>
      <input type="radio" hidden ref={ref} name="x" />
      {React.cloneElement(anchorElement, {
        onClick: () => {
          console.log({ c: ref.current?.checked });
          if (ref.current) {
            ref.current.checked = !ref.current.checked;
            setIsOpen(Boolean(ref.current?.checked));
          }
        },
      })}
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
