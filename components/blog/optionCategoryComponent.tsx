const OptionCategorySelect = (item: any) => {
  
  return (
    <option className="cursor-pointer px-4" value={item.value}>
      {item.value}
    </option>
  );
};

export default OptionCategorySelect;
