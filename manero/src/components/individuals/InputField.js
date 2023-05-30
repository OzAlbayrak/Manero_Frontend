import React from "react";

const InputField = ({
  placeholder,
  nameid,
  name,
  type,
  value,
  onChange,
  style,
  labelName,
  maxLength,
  disabled,
}) => {
  return (
    <div className="text-center mx-auto">
      <label className="baselabel" htmlFor={nameid}>
        {labelName}
      </label>
      {value ? (
        <input
          className="baseinput"
          type={type}
          id={nameid}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          name={name}
          disabled={disabled}
          maxLength={maxLength}
        />
      ) : (
        <input
          className="baseinput"
          type={type}
          id={nameid}
          placeholder={placeholder}
          onChange={onChange}
          style={style}
          name={name}
          disabled={disabled}
          maxLength={maxLength}
        />
      )}
    </div>
  );
};

export default InputField;
