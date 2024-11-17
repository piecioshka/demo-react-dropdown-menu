import React, { useEffect } from "react";

// TIP: Feature of auto closing dropdown based on global "click" event
// and check if clicked element is the same as the anchor element

export const DropdownMenu = ({ label, anchorElement, items }) => {
  /**
   * @type {React.MutableRefObject<HTMLButtonElement|null>}
   */
  const ref = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const onGlobalClick = (evt) => {
      const { target } = evt;
      if (ref.current && !ref.current.contains(target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", onGlobalClick);
    return () => {
      window.removeEventListener("click", onGlobalClick);
    };
  }, []);

  return (
    <div>
      <pre>dropdown-1</pre>
      {React.cloneElement(anchorElement, { ref, onClick: () => setIsOpen(!isOpen) })}
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
