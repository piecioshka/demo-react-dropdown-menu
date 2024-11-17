import React, { useCallback, useEffect } from "react";

const dropdowns = new Map();

export const DropdownMenu = ({ label, anchorElement, items }) => {
  const debug = console.debug.bind(console, `[${label}]`);
  const instance = React.useId();
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    debug("initial render", { instance, isOpen });
    dropdowns.set(instance, isOpen);
    return () => {
      dropdowns.delete(instance);
    };
  }, []);

  const updateVisibility = useCallback(() => {
    dropdowns.forEach((value, key) => {
      if (key === instance) {
        const newValue = !isOpen;
        debug({ key, value, newValue });
        dropdowns.set(key, newValue);
        setIsOpen(newValue);
      } else {
        debug({ key, value, newValue: false });
        dropdowns.set(key, false);
        setIsOpen(false);
      }
    });
  }, [instance]);

  return (
    <div>
      <pre>dropdown-2</pre>
      {React.cloneElement(anchorElement, {
        onClick: updateVisibility,
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
