import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import About from './components/About';
import Footer from './components/footer';
import ProjectSection from './components/ProjectSection';
import Contact from './components/contact';
import NotFound from './components/NotFound';
import Recommendation from './components/recommendation';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import BlogSection from './components/BlogSection';
import ProjectPage from './components/ProjectPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route exact path='/' 
          element={ <>
            <Navbar /> 
            <Title Name = "Mitali Kapoor" />
            <ProjectSection /> 
            <About />
            <BlogSection/>
            <Footer />
          </> }>
          </Route>

          <Route exact path='/Contact' element={<>
            <Navbar /> <Contact /> <Footer />
          </>}> 
          </Route>

          <Route exact path='/Recommendation' element={<>
           <Navbar/> 
           <Recommendation/>
           <Footer/>
          </>}>
          </Route> 

          <Route exact path='/Project/:id' element={<> 
            <Navbar/> 
           <ProjectPage/>
           <Footer/>
          </>} ></Route>
        
          <Route element={<NotFound/>}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
