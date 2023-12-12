import { useState } from "react";

import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    } else {
      onNewCategory(inputValue.trim())
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Buscar GIF"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func,
};
