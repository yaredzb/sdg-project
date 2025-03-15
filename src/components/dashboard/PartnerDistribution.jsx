import Card from '../ui/Card';

const PartnerDistribution = ({ collaborations }) => {
  return (
    <Card>
      <h2 className='text-xl font-semibold mb-4'>Partner Distribution</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {collaborations.map((item, index) => (
          <div key={index} className='bg-gray-50 p-4 rounded-lg'>
            <h3 className='text-lg font-medium text-gray-700'>
              {item.type}
            </h3>
            <p className='text-3xl font-bold text-gray-800'>
              {item.count}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PartnerDistribution;