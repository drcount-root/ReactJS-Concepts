import { useState } from "react";

export default function DropdownSelector() {
  const options = ["CocoCola", "Maza", "Amul Cool"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <span onClick={toggleDropdown}>{selectedOption}</span>
      {isOpen && (
        <div>
          {/* <div onClick={() => handleOptionSelect("Option 1")}>Option 1</div>
          <div onClick={() => handleOptionSelect("Option 2")}>Option 2</div>
          <div onClick={() => handleOptionSelect("Option 3")}>Option 3</div> */}
          {options.map((option) => {
            return (
              <div key={option} onClick={() => handleOptionSelect(`${option}`)}>
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
