import React from 'react';

const Input = ({
  type,
  name,
  textValue,
  placeholder,
  className,
  inputType,
  accept,
  onFocus,
  onBlur,
  onEnterPress,
  onChange,
}) => {
  return (
    <input
      type={inputType}
      value={textValue}
      placeholder={placeholder}
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyPress={e => e.key === 'Enter' && onEnterPress && onEnterPress()}
      onChange={onChange}
      className={className}
      accept={accept}
    />
  );
};

export default Input;
