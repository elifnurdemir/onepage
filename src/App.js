import logo from './logo.svg';
import './App.css';
import perfume from './assets/media/perfume.png';
import menu from './assets/media/menu.png'; 
import rose1 from './assets/media/rose1.png'
function App() {
  return (
    <div className="App">
      
      <div className='navbar'>
        <div className='navbar-left'>
          Arrivederciao
        </div>
        <div className='navbar-right'>
          <img className='menu-icon' src={menu}/>
        </div>

      </div>
      <img src={rose1} className='rose1'/>
      <div className='content-container'>

        <img className='perfume-img' src={perfume} />
        <div className='content-wrapper'>Pinky</div>
        <div className='content-wrapper content-title'>Pinkish</div>
        <div className='content-wrapper'>Gourmand</div>

      </div>

      <div className='bottom-right-container'>
      
        <div className='bottom-right-wrapper'>
          ethereal
        </div>
        <div className='bottom-right-wrapper'>
         luscious
        </div>
        <div className='bottom-right-wrapper'>
          creamy
        </div>
      </div>

    </div>
  );
}

export default App;
