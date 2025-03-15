import Card from '../ui/Card';

const CollaborationInsights = ({ insights, type = 'gap' }) => {
  const typeClasses = {
    gap: 'bg-yellow-50 border-yellow-100 text-yellow-800',
    prediction: 'bg-blue-50 border-blue-100 text-blue-800',
  };

  return (
    <Card>
      <h2 className='text-xl font-semibold mb-4'>AI-Driven Collaboration Insights</h2>
      <div className={`p-4 ${typeClasses[type]} rounded-md border`}>
        <h3 className='text-sm font-medium'>
          {type === 'gap' ? 'Gap Analysis' : 'ML-Based Prediction'}
        </h3>
        <p className='text-sm mt-1'>
          {insights}
        </p>
      </div>
    </Card>
  );
};

export default CollaborationInsights;