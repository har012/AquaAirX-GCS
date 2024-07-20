import React, { useState } from 'react';

// Components for each page
const Page1 = () => <div>This is Page 1</div>;
const Page2 = () => <div>This is Page 2</div>;
const Page3 = () => <div>This is Page 3</div>;

// Component to display the small preview of a page
const SmallPreview = ({ content, onClick }) => (
  <div 
    style={{
      border: '1px solid black', 
      padding: '10px', 
      margin: '5px',
      cursor: 'pointer'
    }}
    onClick={onClick}
  >
    {content}
  </div>
);

const Homepage = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('Page1');

  // Function to render the current page
  const renderPage = (page) => {
    switch (page) {
      case 'Page1':
        return <Page1 />;
      case 'Page2':
        return <Page2 />;
      case 'Page3':
        return <Page3 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <div>
      {/* Main content area */}
      <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px', color: 'black'}}>
        {renderPage(currentPage)}
      </div>

      {/* Small previews at the bottom right */}
      <div style={{ 
        position: 'fixed', 
        bottom: '10px', 
        right: '10px', 
        display: 'flex', 
        flexDirection: 'column',
        color: 'black'
      }}>
        {currentPage !== 'Page1' && <SmallPreview content="Page 1 Preview" onClick={() => setCurrentPage('Page1')} />}
        {currentPage !== 'Page2' && <SmallPreview content="Page 2 Preview" onClick={() => setCurrentPage('Page2')} />}
        {currentPage !== 'Page3' && <SmallPreview content="Page 3 Preview" onClick={() => setCurrentPage('Page3')} />}
      </div>
    </div>
  );
};

export default Homepage;
