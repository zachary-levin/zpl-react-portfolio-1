import React, { useState } from 'react';
// import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/ContactPage';
import Header from './Header/Header';
// import Nav from './Navigation';
// import Project from './Project/Project';
import Footer from './Footer/Footer';

// Landing page will be "Home" page

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Works') {
      return <Works />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header 
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      />
      {/*<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}
