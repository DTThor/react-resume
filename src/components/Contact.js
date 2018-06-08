import React from 'react';


const Contact = ({name, title, phone}) => (
 (
     <div>
       <img src="../profile.jpg" alt="Profile" />
       <h1>{name}</h1>
       <h5>{title}</h5>
       <ul className="contact">
         <li><i className="far fa-envelope fa-sm"></i><a href="mailto:notreal@gmail.com?subject=Hey-Dylan"> dylan@gmail.com</a></li>
         <li><i className="fas fa-phone fa-sm"></i><a href="#">  {phone}</a></li>
         <li><i className="fab fa-chrome fa-sm"></i><a href="http://www.dylanthorwaldson.com" target="_blank" rel="noopener noreferrer">  dylanthorwaldson.com</a></li>
         <li><i className="fab fa-linkedin-in fa-sm"></i><a href="http://www.linkedin.com/in/dtthor" target="_blank" rel="noopener noreferrer">  linkedin.com/in/dtthor</a></li>
         <li><i className="fab fa-github fa-sm"></i><a href="http://www.github.com/dtthor" target="_blank" rel="noopener noreferrer">  www.github.com/dtthor</a></li>
       <li><i className="fab fa-twitter fa-sm"></i><a href="http://www.twitter.com/dtthor" target="_blank" rel="noopener noreferrer">  @dtthor</a></li>
       </ul>
     </div>
  )
)

export default Contact;
