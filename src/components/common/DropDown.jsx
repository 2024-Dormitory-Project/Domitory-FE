const DropDown = ({
  sortedItemList,
  selectedItem,
  onItemSelect,
  onOpen,
  isOpen,
  className,
  buttonClassName,
  dropDownClassName,
  itemClassName,
  type,
  title,
}) => {
  return (
    <div className={`${className}`}>
      <button type="button" onClick={onOpen} className={`${buttonClassName}`}>
        {title && <span className="absolute left-4">{title}</span>}
        <span className="flex justify-center items-center">{selectedItem}</span>
        <span className="relative right-0">
          {isOpen ? (
            <Icons name={userinfoSetUpAngle} />
          ) : (
            <Icons name={userinfoSetDownAngle} />
          )}
        </span>
      </button>

      {isOpen && (
        <div className={`flex flex-col items-center ${dropDownClassName}`}>
          {sortedItemList.map((item, index) => (
            <button
              key={item}
              className={`${itemClassName} ${
                selectedItem === item
                  ? type === 'edit'
                    ? 'text-white'
                    : 'text-black'
                  : 'text-neutral-400'
              } ${
                index === sortedItemList.length - 1
                  ? ''
                  : 'border-b border-stone-300'
              }`}
              onClick={() => onItemSelect(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
