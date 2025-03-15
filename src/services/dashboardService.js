// src/services/dashboardService.js
import { mockOverviewData, mockTrendData, mockCollaborationData, mockRecommendations } from '../data/mockData';

export const fetchDashboardData = async (timeFilter = '6months') => {
  // In a real app, this would fetch from actual APIs
  return new Promise((resolve) => {
    // Simulate API delay
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