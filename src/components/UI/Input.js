import React, { useImperativeHandle, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const focusing = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: focusing,
    };
  });

  return (
    <React.Fragment>
      <label htmlFor={props.id} className={props.labelClassName}>
        {props.children}
      </label>
      <input
        ref={inputRef}
        type={props.type}
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className}
        id={props.id}
      />
    </React.Fragment>
  );
});

export default Input;
