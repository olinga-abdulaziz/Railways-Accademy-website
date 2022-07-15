import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import RailWays from './images/railways.jpg'
import Home from './Components/Home';
function App() {

  const bars=document.getElementById('bars')
  const sideNav=document.getElementById('sideNav')
  
  return (
    <div className="App"> 
      <nav className='navbar-nav sticky-top'>
        <div className='lgDiv'>
        <div className='mobileNav'>
          <i class="fa fa-bars" id='bars' aria-hidden="true"></i>
        </div>
          <div className='logoImgDiv'>
            <img src={RailWays} width='100%' height='100%' className='imgLogo'/>
          </div>
          <h1 className='railwaysAccademy'>Malaba Railways Accademy</h1>
        <div className='lnkDiv'>
          
          <ul>
            <li><a href='#home'>Home</a></li>
            <li>Activities</li>
            <li>Gellery</li>
            <li>Department</li>
            <li>Learning</li>
          </ul>
      </div>
        </div>
      </nav>

      <div className='sideNav' id='sideNav'>

      </div>
      <main className='main'>
          <Home />
      </main>
    </div>
  );
}

export default App;
