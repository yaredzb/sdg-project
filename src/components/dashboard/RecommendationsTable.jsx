import Badge from '../ui/Badge';
import Card from '../ui/Card';

const RecommendationsTable = ({ recommendations }) => {
  return (
    <Card>
      <h2 className='text-xl font-semibold mb-4'>Recommended Collaborations</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Initiative
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Match
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Potential Partners
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {recommendations.map(recommendation => (
              <tr key={recommendation.id}>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  {recommendation.title}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  <Badge 
                    text={recommendation.match}
                    type={recommendation.match === 'High' ? 'success' : 'warning'}
                  />
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                  {recommendation.partners.join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default RecommendationsTable;