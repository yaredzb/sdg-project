const Card = ({ className = '', children }) => {
    return (
      <div className={`bg-white p-4 rounded-lg shadow-sm ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Card;