// src/components/layout/TabNavigation.jsx
import { useDashboard } from '../../context/DashboardContext';

const TabNavigation = () => {
  const { activeTab, setActiveTab } = useDashboard();
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'trends', label: 'Trends & Predictions' },
    { id: 'collaborations', label: 'Collaborations' },
  ];

  return (
    <div className='bg-white shadow-sm'>
      <div className='container mx-auto'>
        <nav className='flex'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 font-medium text-sm cursor-pointer ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;