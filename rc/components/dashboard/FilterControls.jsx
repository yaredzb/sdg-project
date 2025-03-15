import { Filter } from 'lucide-react';
import Select from '../ui/Select';

const FilterControls = ({ value, onChange }) => {
  const options = [
    { value: '6months', label: 'Last 6 months' },
    { value: '1year', label: 'Last year' },
    { value: '3years', label: 'Last 3 years' },
  ];

  return (
    <div className='flex items-center'>
      <Filter className='text-gray-400 mr-1' size={16} />
      <Select 
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterControls;