import React from 'react';


const Sidebar = () => (
  <div className=' container container-item container-side'>
   <div>
     <img src="../profile.jpg" alt="Profile" />
     <h1>Dylan Thorwaldson</h1>
     <h5>Web Development Apprentice</h5>
     <ul className="contact">
       <li><i className="far fa-envelope fa-sm"></i><a href="mailto:notreal@gmail.com?subject=Hey-Dylan"> dylan@gmail.com</a></li>
       <li><i className="fas fa-phone fa-sm"></i><a href="#">  (832) 741-5282</a></li>
       <li><i className="fab fa-chrome fa-sm"></i><a href="http://www.dylanthorwaldson.com" target="_blank" rel="noopener noreferrer">  dylanthorwaldson.com</a></li>
       <li><i className="fab fa-linkedin-in fa-sm"></i><a href="http://www.linkedin.com/in/dtthor" target="_blank" rel="noopener noreferrer">  linkedin.com/in/dtthor</a></li>
       <li><i className="fab fa-github fa-sm"></i><a href="http://www.github.com/dtthor" target="_blank" rel="noopener noreferrer">  www.github.com/dtthor</a></li>
     <li><i className="fab fa-twitter fa-sm"></i><a href="http://www.twitter.com/dtthor" target="_blank" rel="noopener noreferrer">  @dtthor</a></li>
     </ul>

     <div className="education">
       <h5>EDUCATION</h5>
       <h6>BA in Public Relations</h6>
       <h6 className="school">Pepperdine University</h6>
       <h6 className="school">2008-2012</h6>

     </div>
   </div>
  </div>
)

export default Sidebar;
