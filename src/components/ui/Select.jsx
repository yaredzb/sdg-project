const Select = ({ options, value, onChange, className = '' }) => {
    return (
      <select 
        className={`text-sm border rounded py-1 px-2 ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;