export const mockOverviewData = {
    totalPartnerships: 345,
    activeProjects: 127,
    countriesInvolved: 78,
    resourcesAllocated: '$1.2B',
  };
  
  export const mockTrendData = (timeFilter = '6months') => {
    if (timeFilter === '6months') {
      return [
        { month: 'Jan', partnerships: 240, projects: 100 },
        { month: 'Feb', partnerships: 260, projects: 105 },
        { month: 'Mar', partnerships: 280, projects: 110 },
        { month: 'Apr', partnerships: 290, projects: 112 },
        { month: 'May', partnerships: 310, projects: 116 },
        { month: 'Jun', partnerships: 325, projects: 120 },
        { month: 'Jul', partnerships: 345, projects: 127 },
      ];
    } else if (timeFilter === '1year') {
      return [
        { month: 'Aug', partnerships: 200, projects: 90 },
        { month: 'Sep', partnerships: 210, projects: 92 },
        { month: 'Oct', partnerships: 220, projects: 94 },
        { month: 'Nov', partnerships: 230, projects: 96 },
        { month: 'Dec', partnerships: 240, projects: 100 },
        { month: 'Jan', partnerships: 260, projects: 105 },
        { month: 'Feb', partnerships: 280, projects: 110 },
        { month: 'Mar', partnerships: 290, projects: 112 },
        { month: 'Apr', partnerships: 310, projects: 116 },
        { month: 'May', partnerships: 325, projects: 120 },
        { month: 'Jun', partnerships: 335, projects: 124 },
        { month: 'Jul', partnerships: 345, projects: 127 },
      ];
    } else {
      return [
        { month: '2022-Q1', partnerships: 150, projects: 70 },
        { month: '2022-Q2', partnerships: 170, projects: 75 },
        { month: '2022-Q3', partnerships: 190, projects: 80 },
        { month: '2022-Q4', partnerships: 210, projects: 85 },
        { month: '2023-Q1', partnerships: 230, projects: 90 },
        { month: '2023-Q2', partnerships: 260, projects: 100 },
        { month: '2023-Q3', partnerships: 280, projects: 110 },
        { month: '2023-Q4', partnerships: 300, projects: 115 },
        { month: '2024-Q1', partnerships: 320, projects: 120 },
        { month: '2024-Q2', partnerships: 345, projects: 127 },
      ];
    }
  };
  
  export const mockCollaborationData = [
    { type: 'Government', count: 120 },
    { type: 'Private Sector', count: 95 },
    { type: 'Civil Society', count: 80 },
    { type: 'Academic', count: 50 },
  ];
  
  export const mockRecommendations = [
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