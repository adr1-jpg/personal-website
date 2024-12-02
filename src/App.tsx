import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Work from './pages/Work';
import CVC from './pages/CVC'
import About from './pages/About';
import Aquaire from './pages/aquaire';
import { DataProvider } from './context/DataProvider';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Gallery from './pages/Gallery';
import { FluentProvider } from '@fluentui/react-components';
import { AzureLightTheme } from '@fluentui-contrib/azure-theme';

function App() {
  return (
    <FluentProvider theme={AzureLightTheme}>
      <DataProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/campus" element={<CVC />} />
            <Route path="/aquaire" element={<Aquaire />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </HashRouter>
      </DataProvider >
    </FluentProvider>
  );
}

export default App;
