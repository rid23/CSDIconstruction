import './App.css';
import { Navbarsecond, Navbartop } from './navbar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function App() {

  return (
    <div className="App">
      <Navbartop/>
      <Navbarsecond/>
      <Banner/>
      <Programs/>
    </div>
  );
}


function Banner() {

  return (
      <div className='image-banner'>
        <img className='the-banner' src="/static/images/background.jpg"/>
      </div>
  )
}

function Programs() {
  
  return (
    <>
    <div className='program-container'>
      <img className='the-program' src='/static/images/program1.jpg'/>
      <img className='the-program' src='/static/images/program2.jpg' />
    </div>
    <div className='program-container'>
      <a className='readmore-anchor'>Read more <ArrowRightAltIcon/></a>
    </div>
    </>
  )
}

function whychooseus() {

  return (
    <>
      <div className='features-container'>
        <div className='feature-paper'>
          
        </div>
        <div className='feature'>

        </div>
      </div>
    </>
  )
}

export default App;
