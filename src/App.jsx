import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';  
import Blogs from './pages/Blogs';
import Coverage from './pages/Coverage';
import Jobs from './pages/Jobs';
import Scholarships from './pages/Programmes';
import Services from './pages/Services';
import Canada from './pages/countries/Canada'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/coverage/' element={<Coverage/>}>
          <Route path='canada' element={<Canada/>}/>
        </Route>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/programmes' element={<Scholarships/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </>
  )
}

export default App
