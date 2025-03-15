const StatCard = ({ title, value, icon: Icon, iconColor }) => {
    return (
      <div className='bg-white p-4 rounded-lg shadow-sm'>
        <div className='flex items-center mb-2'>
          <Icon className={`${iconColor} mr-2`} />
          <h3 className='text-lg font-medium text-gray-700'>{title}</h3>
        </div>
        <p className='text-3xl font-bold text-gray-800'>{value}</p>
      </div>
    );
  };
  
  export default StatCard;
  