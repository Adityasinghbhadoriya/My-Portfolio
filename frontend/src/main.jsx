
import { StrictMode, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Stairs from './Components/Stairs.jsx';
import Navbar from './Components/Navbar.jsx';

const Root = () => {
  const navbarRef = useRef(null);

  return (
    <BrowserRouter>
     
      <Navbar ref={navbarRef} />
      <Stairs navbarRef={navbarRef}>
        <App />
      </Stairs>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
