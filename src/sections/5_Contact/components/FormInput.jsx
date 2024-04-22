import React from 'react';

const FormInput = (props) => {
  const { id, type, label, placeholder, rows, isInput, className } = props;
  const InputElement = isInput ? "input" : "textarea";

  return (
    <div className="relative">
      <label
        className=""
        htmlFor={id}
      >
        {label}
      </label>
      <InputElement
        className={`w-full focus-visible:outline focus-visible:outline-pink-400 focus-visible:outline-2 focus-visible:outline-offset-2 bg-neutral-800 px-1.5 py-1 my-1.5 rounded ${className}`}
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        rows={rows}
        required
      />
    </div>
  );
};

export default FormInput;