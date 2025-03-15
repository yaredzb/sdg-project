import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-2xl font-medium text-gray-700 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2 text-center">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Return to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;