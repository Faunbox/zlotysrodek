type ValueType = {
  value: string;
};

const OptionCategorySelect = (item: ValueType) => {
  return (
    <option
      className="cursor-pointer px-4"
      value={item.value}
      aria-label={item.value}
    >
      {item.value}
    </option>
  );
};

export default OptionCategorySelect;
