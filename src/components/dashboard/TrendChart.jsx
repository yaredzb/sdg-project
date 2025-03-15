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
  import Card from '../ui/Card';
  
  const TrendChart = ({ data, title }) => {
    return (
      <Card>
        <h2 className='text-xl font-semibold mb-4'>{title}</h2>
        <div className='h-64'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data}>
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
              <Line type='monotone' dataKey='projects' 
              stroke='#10B981' 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TrendChart;