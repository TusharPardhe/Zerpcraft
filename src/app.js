import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_container">
        <Header />
        <Routes />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
