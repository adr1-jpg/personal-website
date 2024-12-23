import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Work from './pages/Work';
import { DataProvider } from './context/DataProvider';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Gallery from './pages/Gallery';
import { FluentProvider } from '@fluentui/react-components';
import { AzureLightTheme } from '@fluentui-contrib/azure-theme';

function App() {
  return (
    <FluentProvider theme={AzureLightTheme}>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/personal-website" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Router>
      </DataProvider >
    </FluentProvider>
  );
}

export default App;
