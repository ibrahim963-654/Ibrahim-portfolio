import { useState } from 'react'
import { IoMailOutline, IoLogoWhatsapp, IoLogoFacebook, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import myimg from "./myimg.jpg"
import './App.css'

function App() {
  return (
    <div className="main" id='home'>
      <header>
        <h3 className='name'>Ibrahim</h3>
        <ul className='list'>
          <a href="#home"><li className='links'>Home</li></a>
          <a href="#Project"><li className='links'>Projects</li></a>
          <a href="#Contact"><li className='links'>Contact</li></a>
        </ul>
      </header>

      <div className="home">
        <div className="first"><h1>Hi Iam <span className="active">Ibrahim Ashraf</span> <br /> And Iam <span className="active">Front-end Engineer</span></h1></div>
        <div className="img"><img src={myimg} alt="" /></div>
      </div>

      <div className="about">
        <h3 className='about-title'><span className="active">About</span> Me </h3>
        <p className='aboutme'>Hi, I am <span className="active">Ibrahim Ashraf</span>, a passionate <span className="active">Front-End Engineer</span>. I specialize in building dynamic, responsive, and high-performance web applications using <span className="active">React.js</span>. I love turning complex designs into clean, pixel-perfect, and <span className='active'>user-friendly code</span>.</p>

        <div className="experience">
          <h3 className="exper-title">Experience</h3>
          <p className="aboutme">An independent <span className="active">Front-End Developer</span> specializing in crafting responsive, <br /> interactive websites using <span className="active">React.js</span>, I have worked on various personal and freelance projects, <br /> focusing on delivering clean code, optimized performance, and <span className="active">friendly user interfaces</span>.</p>

          <div className="skills-section">
            <h3 className="skills-title">My Skills </h3>
            <ul className='skills'>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="projects-section" id='Project'>
        <h3 className="projects-title">Projects</h3>
        <div className="projects-link">
          <a href="https://ibrahim963-654.github.io/PortfolioX-project/" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="project-title">PortfolioX</h3>
            <p className="project-desc">A modern and responsive personal portfolio template designed to showcase creative work and skills beautifully.</p>
          </a>
          <a href="https://ibrahim963-654.github.io/sakina-project/" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="project-title">Sakina</h3>
            <p className="project-desc">A clean, peaceful web interface crafted to deliver a calm and user-friendly experience for visitors.</p>
          </a>
          <a href="https://ibrahim963-654.github.io/vibe-brand/" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="project-title">Vibe Brand</h3>
            <p className="project-desc">An interactive branding website built to showcase unique designs, products, and a modern identity.</p>
          </a>
          <a href="https://ibrahim963-654.github.io/VamPireGames-Project/" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="project-title">Vampire Games</h3>
            <p className="project-desc">A dark-themed, immersive gaming hub showcasing popular vampire-themed games, trailers, and reviews.</p>
          </a>
        </div>
      </div>

       <h3 className='contact-title'><span className="cont">Contact</span> Me</h3>
      <div className="contact-section" id='Contact'>
        <div className="face">
          <h3 className="footer-title">Ibrahim Ashraf</h3>
          <p className="footer-pla">With you to Create a <span className="active">Professional Website</span></p>
        </div>

        <div className="left-links">
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hema963654@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <p className="side-link"> <IoMailOutline className='icon'/> hema963654@gmail.com</p>
          </a>
          <a href="https://wa.me/201227691799" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            
            <p className="side-link"> <IoLogoWhatsapp className='icon'/> +20 1227691799</p>
            </a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/ibrahim963-654/" target="_blank" rel="noopener noreferrer" className="social-link">
            <IoLogoGithub className='ic'/>
          </a>
          <a href="https://www.facebook.com/ibrahim.ashraf.866108" target="_blank" rel="noopener noreferrer" className="social-link">
            <IoLogoFacebook className='ic'/>
          </a>
          <a href="https://www.instagram.com/ibrahimashraf849/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
            <IoLogoInstagram className='ic'/>
          </a>
          <a href="https://www.linkedin.com/in/ibrahim-ashraf-12b1ab388/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="social-link">
            <IoLogoLinkedin className='ic'/>
          </a>
        </div>
         <footer className="main-footer">
        <p>made with love By <span className='active'>Ibrahim Ashraf</span> 2026 ©</p>
      </footer>
      </div>
    </div>
  )
}

export default App