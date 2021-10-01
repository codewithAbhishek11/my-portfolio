import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import Banner from './Pages/Banner';
import AboutArea from './Pages/AboutArea';
import BrandArea from './Pages/BrandArea';
import Service from './Pages/Service';
import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import Subscribe from './Pages/Subscribe';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
    <Header/>
    <main class="site-main">
    <Banner/>
    <AboutArea/>
    <BrandArea/>
    <Service/>
    <Projects/>
    <section class="about-area">
<AboutMe/>
    </section>
    {/* <Subscribe/> */}
    <Footer/>
    </main>
   
    </>
  );
}

export default App;
