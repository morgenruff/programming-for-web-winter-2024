import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css'
import { Home } from './views/Home.jsx';
import { ProjectDetail } from './views/ProjectDetail.jsx';
import portfolioData from './assets/portfolio-data.json';
function App() {
  return (
    <>
      <div className='header-wrapper'>
        <h1 className='header'>Morgen Ruff</h1>
        {/* intro paragraph */}
        <div className='intro'>
          graphic &amp; web design student at the Minneapolis College of Art &amp; Design
          <br/>
          graphic designer / web developer/designer / film worker / writer / editor
          <br/>
          Minneapolis, MN, USA / 503~922~2215 / morgen.ruff [at] icloud.com
        </div>
      </div>
      {/* routes */}
      <HashRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path=':id'
            element={<ProjectDetail data={portfolioData} />}
          />
        </Routes>
      </HashRouter>
    </>
  )
}
export default App
