const Dropdown = ({ options, onChange, selectedItem, sendDataToParent  }) => {
  
  sendDataToParent(selectedItem);

  return (
    <select
      name="currency"
      id="currency"
      value={selectedItem}
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
