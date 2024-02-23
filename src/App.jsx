import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';  
import Blogs from './pages/Blogs';
import Coverage from './pages/Coverage';
import Jobs from './pages/Jobs';
import Services from './pages/Services';
import Programmes from './pages/Programmes';
import { Apply } from './pages/Apply';
import Canada from './pages/countries/Canada';
import France from './pages/countries/France';
import NewZealand from './pages/countries/NewZealand';
import UK from './pages/countries/UK';

function App() {


  return (
    <>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/coverage' element={<Coverage/>}>
          <Route path='canada' element={<Canada/>}/>
          <Route path='france' element={<France/>}/>
          <Route path='new-zealand' element={<NewZealand/>}/>
          <Route path='uk' element={<UK/>}/>
        </Route>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/programmes' element={<Programmes/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/apply' element={<Apply/>}/>
      </Routes>
    </>
  )
}

export default App
