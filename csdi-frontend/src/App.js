import './App.css';
import { Navbarsecond, Navbartop } from './navbar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function App() {

  return (
    <div className="App">
      <Navbartop/>
      <Navbarsecond/>
      <Banner/>
      <Programs/>
      <Whychooseus/>
      <div className='contacts-div-container'>
        <Contact/>
        <ContactUs />
      </div>
      <img className='whatsapp-icon' src="/static/images/whatsapp.png"/>
      <img className="facebook-icon" src="/static/images/facebook.png"/>
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
      <a className='readmore-anchor'>Read more <ArrowRightAltIcon /></a>
    </div>
    </>
  )
}

function Whychooseus() {

  return (
    <>
      <div className='features-container'>
        <div>

        </div>
        <div className='feature-paper'>
          <img style={{margin:"20px auto", width: '50px', objectFit:'containt'}} src="/static/images/icon--1.png" />
          <h2 className='feature-headline'> Internationally certified by EAL UK </h2>
          <p>We are Internationally Recognised Centre of EAL UK, first of its kind in India (Code: C001338). EAL is the specialist skills partner and awarding organisation for industry. It supports us in providing high quality, fit for purpose certification which meet learners’ needs & ensure satisfaction. Our training, examination, admission & placement processes are internationally audited. This makes us one of the premier construction management colleges in India.</p>
        </div>
        <div className='feature-paper'>
        <img style={{margin:"20px auto", width: '50px', objectFit:'containt'}} src="/static/images/icon--2.png" />
          <h2 className='feature-headline'> Job Assurance </h2>
            <p>Importantly, each of the students earn job of his/her choice. Another reason why we are one of the top construction management colleges in Pune is because we provide a platform to join Planning / Execution/ QA-QC / Estimation & Billing posts with 18000 to 35000/- pm or even more salary that commensurate with your caliber, expertise and experience. Students of earlier batches are 100% placed. This can be considered as a ladder to reach Project Manager’s position in 7 to 8 yrs. with relevant experience in the field of Construction Project Management.</p>
        </div>
        <div className='feature-paper'>
        <img style={{margin:"20px auto", width: '50px', objectFit:'containt'}} src="/static/images/icon--3.png" />
          <h2 className='feature-headline'> Right Skills Development </h2>
          <p>Our courses are designed especially for civil engineers to bridge the gap between theory and practice. Predefined 151 employability skills from Construction Project Management are imbibed into each civil engineer in a systematic way in 1 yr. PGP through site visits, classroom training, out bound trainings, events, case studies, and practical. So, we’ve got another reason to proudly say that we are one of the construction management colleges in India, as, although there are many institutes offering construction management courses in India, none of the construction management institutes in India focuses on these many skills.</p>
        </div>
        <div className='feature-paper'>
        <img style={{margin:"20px auto", width: '50px', objectFit:'containt'}} src="/static/images/icon--4.png" />
          <h2 className='feature-headline'> Right Curriculum </h2>
          <p>Curriculum and pedagogy of our programs are precisely set to have focus on the development of right set of employability skills needed for civil engineers. Latest knowledge and practices followed in Construction Project Management are included in the curriculum. Our pedagogy helps transform a learner into a skilled & employable civil engineer, and therefore places us into the league of top 10 construction management institutes in India.</p>
        </div>
        <div className='feature-paper'>
        <img style={{margin:"20px auto", width: '50px', objectFit:'containt'}} src="/static/images/icon--5.png" />
          <h2 className='feature-headline'> Right Study Environment </h2>
          <p>With the holistic view in mind, we provide learners with ideal study environment required to evolve all round personality that includes site visits, yoga, sports, mediation, out bound trainings, personality grooming & counselling in addition to high end technical knowledge sharing. Assessments are skills based; turning their approach from theory to practice. And hence we can claim that we are one of the top 10 construction management education institutes in India.</p>
        </div>
      </div>
    </>
  )
}

function Contact() {

  return (
    <>
      <div className='quick-contact'>
        <h2 className ='quick'>Quick Contact</h2>
        <form className='contact-form'>
          <div className = 'form-wrapper'>
            <img style ={{width:'12px' , objectFit:'contain' , marginRight:'2px'}} src = '/static/images/user.svg' />
          <input className='form-name' placeholder='Name'/>
          </div>
          <hr className='quick-contact-form-hr' />
          <div className = 'form-wrapper'> 
          <img style ={{width:'10px' , objectFit:'contain' , marginRight:'2px'}} src = '/static/images/mobile.svg' />
          <input className='form-phone' placeholder='Phone'/>
          </div>
          <hr  className='quick-contact-form-hr' />
          <div className = 'form-wrapper'>
            <img style ={{width:'15px' , objectFit:'contain' , marginRight:'2px'}} src = '/static/images/email.svg' />
          <input className='form-email' placeholder='Email'/>
          </div>
          <hr className='quick-contact-form-hr' />
          <div className = 'form-wrapper'>
            <img style ={{width:'12px' , objectFit:'contain' , marginRight:'2px'}} src = '/static/images/note.svg' />
          <input className='form-message' placeholder='Message'/>
          </div>
          
          <hr  className='quick-contact-form-hr' />
        </form>
        <button className='form-button' >Submit</button>
      </div>
      <div className='contact-location'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

const ContactUs = () => {


  return(
    <>
      <div className='contact-us'>
        <h1 className='contact-us-headline'> Contact Us</h1>
        <div className='contact-us-info' >
          <LocationOnIcon style={{color:'white' , marginRight:'5px' , fontSize:'30px'}} />
          <p className='contact-us-p'>Kolkata , saltlake city , lorem , ipsum , yoyo fsdbnfv jdwbujbubawcbnsj adbcnajbndjaskssssssssssssssssssss</p>
        </div>
        <div className='contact-us-info' ></div>
        <div className='contact-us-info' ></div>
      </div>
    </>
  )
}


export default App;
