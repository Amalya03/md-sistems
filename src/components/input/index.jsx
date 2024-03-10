import React from "react";

const Input = ({
  id,
  onChange,
  style,
  type,
  placeholder,
  src,
  text,
  defaultValue,
}) => {
  return (
    <div className={style["containerStyle"]}>
      <label htmlFor={id} className={style["labelStyle"]}>
        {src && <img src={src} alt="" />}
        {text && <span>{text}</span>}
      </label>
      <input
        id={id}
        className={style["inputStyle"]}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
