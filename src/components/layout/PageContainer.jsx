// src/components/layout/PageContainer.jsx
const PageContainer = ({ children }) => {
    return (
      <main className='container mx-auto p-4'>
        {children}
      </main>
    );
  };
  
  export default PageContainer;