import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-blue-600 text-white p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='text-2xl font-bold flex items-center'>
          <Globe className='mr-2' /> Real-Time SDG Collaboration Dashboard
        </Link>
        <div className='flex items-center space-x-4'>
          <Link to="/signin" className='bg-white text-neutral-800 px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer hover:opacity-90 transition ease-in-out active:scale-90'>
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;




