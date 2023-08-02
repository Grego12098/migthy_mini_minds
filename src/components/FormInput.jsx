import React from "react";

const FormInput = React.memo(({ label, name, value, handleInputChange, sanitized, handleError}) => {
  return (
    <>
        <label className="text-sm sm:text-lg">{label}</label>
            <input
                aria-label={label}
                className="bg-skin-input shadow-md"
                name={name}
                value={value}
                onChange={handleInputChange}

            />
    </>
  );
});

export default FormInput;