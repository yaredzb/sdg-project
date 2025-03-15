const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Real-Time SDG Collaboration Dashboard | Supporting SDG 17 - Partnerships for the Goals
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;