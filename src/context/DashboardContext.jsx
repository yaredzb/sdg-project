import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDashboardData } from '../services/dashboardService';

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export const DashboardProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [sdgData, setSdgData] = useState(null);
  const [error, setError] = useState(null);
  const [timeFilter, setTimeFilter] = useState('6months');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchDashboardData(timeFilter);
        setSdgData(data);
        setError(null);
      } catch (err) {
        setError('Failed to load dashboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [timeFilter]);

  const value = {
    activeTab,
    setActiveTab,
    loading,
    sdgData,
    error,
    timeFilter,
    setTimeFilter
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};