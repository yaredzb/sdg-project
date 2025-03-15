import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  MapPin,
  Users,
  TrendingUp,
  PieChart,
  Globe,
  Filter,
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [sdgData, setSdgData] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      
      const mockData = {
        overview: {
          totalPartnerships: 345,
          activeProjects: 127,
          countriesInvolved: 78,
          resourcesAllocated: '$1.2B',
        },
        trends: generateMockTrendData(),
        collaborations: generateMockCollaborationData(),
        recommendations: generateMockRecommendations(),
      };

      setTimeout(() => {
        setSdgData(mockData);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  // Generate mock data for demonstration
  const generateMockTrendData = () => {
    return [
      { month: 'Jan', partnerships: 240, projects: 100 },
      { month: 'Feb', partnerships: 260, projects: 105 },
      { month: 'Mar', partnerships: 280, projects: 110 },
      { month: 'Apr', partnerships: 290, projects: 112 },
      { month: 'May', partnerships: 310, projects: 116 },
      { month: 'Jun', partnerships: 325, projects: 120 },
      { month: 'Jul', partnerships: 345, projects: 127 },
    ];
  };

  const generateMockCollaborationData = () => {
    return [
      { type: 'Government', count: 120 },
      { type: 'Private Sector', count: 95 },
      { type: 'Civil Society', count: 80 },
      { type: 'Academic', count: 50 },
    ];
  };

  const generateMockRecommendations = () => {
    return [
      {
        id: 1,
        title: 'Clean Water Initiative',
        match: 'High',
        partners: ['UN Water', 'Global Water Partnership'],
      },
      {
        id: 2,
        title: 'Renewable Energy Network',
        match: 'Medium',
        partners: ['Solar Energy Foundation', 'Wind Energy Council'],
      },
      {
        id: 3,
        title: 'Digital Education Alliance',
        match: 'High',
        partners: ['UNESCO', 'Tech For Education'],
      },
    ];
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen bg-gray-50'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto'></div>
          <p className='mt-4 text-gray-600'>Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gray-50 h-screen w-screen'>
      {/* Navigation Tabs */}
      <div className='bg-white shadow-sm'>
        <div className='container mx-auto'>
          <nav className='flex'>
            <button
              className={`px-4 py-3 font-medium text-sm cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm cursor-pointer ${
                activeTab === 'trends'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('trends')}
            >
              Trends & Predictions
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm cursor-pointer ${
                activeTab === 'collaborations'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('collaborations')}
            >
              Collaborations
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className='container mx-auto p-4'>
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div className='bg-white p-4 rounded-lg shadow-sm'>
                <div className='flex items-center mb-2'>
                  <Users className='text-blue-500 mr-2' />
                  <h3 className='text-lg font-medium text-gray-700'>
                    Total Partnerships
                  </h3>
                </div>
                <p className='text-3xl font-bold text-gray-800'>
                  {sdgData.overview.totalPartnerships}
                </p>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-sm'>
                <div className='flex items-center mb-2'>
                  <TrendingUp className='text-green-500 mr-2' />
                  <h3 className='text-lg font-medium text-gray-700'>
                    Active Projects
                  </h3>
                </div>
                <p className='text-3xl font-bold text-gray-800'>
                  {sdgData.overview.activeProjects}
                </p>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-sm'>
                <div className='flex items-center mb-2'>
                  <Globe className='text-purple-500 mr-2' />
                  <h3 className='text-lg font-medium text-gray-700'>
                    Countries Involved
                  </h3>
                </div>
                <p className='text-3xl font-bold text-gray-800'>
                  {sdgData.overview.countriesInvolved}
                </p>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-sm'>
                <div className='flex items-center mb-2'>
                  <PieChart className='text-orange-500 mr-2' />
                  <h3 className='text-lg font-medium text-gray-700'>
                    Resources Allocated
                  </h3>
                </div>
                <p className='text-3xl font-bold text-gray-800'>
                  {sdgData.overview.resourcesAllocated}
                </p>
              </div>
            </div>

            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h2 className='text-xl font-semibold mb-4'>Partnership Trends</h2>
              <div className='h-64'>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={sdgData.trends}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='month' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type='monotone'
                      dataKey='partnerships'
                      stroke='#3B82F6'
                      activeDot={{ r: 8 }}
                    />
                    <Line type='monotone' dataKey='projects' stroke='#10B981' />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h2 className='text-xl font-semibold mb-4'>
                Recommended Collaborations
              </h2>
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
                    {sdgData.recommendations.map(recommendation => (
                      <tr key={recommendation.id}>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                          {recommendation.title}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              recommendation.match === 'High'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {recommendation.match}
                          </span>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          {recommendation.partners.join(', ')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Trends & Predictions Tab */}
        {activeTab === 'trends' && (
          <div className='space-y-6'>
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-semibold'>
                  Partnership Growth Trends
                </h2>
                <div className='flex items-center'>
                  <Filter className='text-gray-400 mr-1' size={16} />
                  <select className='text-sm border rounded py-1 px-2'>
                    <option>Last 6 months</option>
                    <option>Last year</option>
                    <option>Last 3 years</option>
                  </select>
                </div>
              </div>
              <div className='h-64'>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={sdgData.trends}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='month' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type='monotone'
                      dataKey='partnerships'
                      stroke='#3B82F6'
                      activeDot={{ r: 8 }}
                    />
                    <Line type='monotone' dataKey='projects' stroke='#10B981' />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className='mt-4 p-4 bg-blue-50 rounded-md'>
                <h3 className='text-sm font-medium text-blue-800'>
                  ML-Based Prediction
                </h3>
                <p className='text-sm text-blue-700 mt-1'>
                  Based on current trends, we predict a 12% increase in
                  partnerships over the next quarter.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Collaborations Tab */}
        {activeTab === 'collaborations' && (
          <div className='space-y-6'>
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h2 className='text-xl font-semibold mb-4'>
                Partner Distribution
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {sdgData.collaborations.map((item, index) => (
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
            </div>

            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h2 className='text-xl font-semibold mb-4'>
                AI-Driven Collaboration Insights
              </h2>
              <div className='p-4 bg-yellow-50 rounded-md'>
                <h3 className='text-sm font-medium text-yellow-800'>
                  Gap Analysis
                </h3>
                <p className='text-sm text-yellow-700 mt-1'>
                  Our AI has identified a potential gap in collaborations for
                  clean water initiatives in Southeast Asia. Consider reaching
                  out to regional NGOs and local governments for potential
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;