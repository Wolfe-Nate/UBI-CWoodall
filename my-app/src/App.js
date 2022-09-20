import '../src/index.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import German from './components/German';
// import News from './components/News';
import Fundraising from './components/Fundraising';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
{/* <Route
path='/' element={<Home/>}
/> */}
{/* <Route
path='/fundraising' element={<Fundraising/>}
/>
<Route
path='/contact' element={<Contact/>}
/>
<Route
path='/mission' element={<Mission/>}
/>
<Route
path='/news' element={<News/>} */}
{/* /> */}

      </Routes>
      {/* <Footer></Footer> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;