import { mockOverviewData, mockTrendData, mockCollaborationData, mockRecommendations } from '../data/mockData';

export const fetchDashboardData = async (timeFilter = '6months') => {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        overview: mockOverviewData,
        trends: mockTrendData(timeFilter),
        collaborations: mockCollaborationData,
        recommendations: mockRecommendations,
      });
    }, 800);
  });
};