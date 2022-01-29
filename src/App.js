import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import Notfound from './Pages/Notfound';
import Alert from './components/layout/Alert'
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
     <div className="flex flex-col justify-between h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black background-animate">
     <Navbar/>
     <main className='container mx-auto px-3 pb-12' >
       <Alert/>
       <Routes>
         <Route path='/' element= {<Home/>} />
         <Route path='/about' element= {<About/>} />
         <Route path ='/user/:login' element = {<User/>}/>
         <Route path='/notfound' element= {<Notfound/>} />
         <Route path='/*' element= {<Notfound/>} />
       </Routes>
     </main>
     <Footer/>
     </div>
    </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
