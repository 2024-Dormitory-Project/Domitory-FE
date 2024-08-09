const Button = ({
  type,
  buttonText,
  className,
  isDisabled,
  onClickHandler,
  mouseEnterHandler,
  mouseLeaveHandler,
  children,
}) => {
  return (
    <button
      className={`${className}`}
      onClick={onClickHandler}
      disabled={isDisabled}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
      {buttonText}
    </button>
  );
};
