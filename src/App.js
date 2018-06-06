import React from 'react'

const App = () => (
  <div className='container'>
    <div className="main">
      <div className='icon-section container-item'>
        <h3><i className="icon fas fa-user-circle fa-lg"></i> CAREER PROFILE</h3>
      </div>

      <div className="container-item">
        <p className="role-details">After graduating from Pepperdine University in 2012, I began working as a Logistics Coordinator for a large oil and gas construction company. This was after a brief, 6 month stint working offshore on an oil rig as a Roustabout. Since my oil and gas days, I have worked at a 3rd party logistics firm in Dallas and a Healthcare construction company. This is where the bulk of my experience lies, in the Healthcare commercial construction project management industry. I worked for 2.5 years as an Project Engineer/Assistant Project Manager before listening to my desire for a career change into Web Development!</p>
      </div>
      <div className='icon-section container-item'>
        <h3><i className="icon fas fa-briefcase fa-lg"></i> EXPERIENCE</h3>
      </div>

      <div className="container-item">
        <h4>Assistant Project Manager</h4>
        <p className="company">MEDCO Construction, LLC, Dallas</p>
        <p className="role-details"> Oversaw 8 projects totaling $20 million
           from Estimating through Closeout. Sorted
          through bids, negotiated price, chose contractors,
          wrote and issued subcontracts. Managed changes due
          to client preference or pre‑existing conditions and
          created and issued change orders, adhering to an often strict budget.
        </p>
      </div>
      <div className="container-item">
        <h4>Senior Operations Manager</h4>
        <p className="company">Nolan Transportation Group, Dallas</p>
        <p className="role-details"> Facilitated the daily operating tasks of new and
           existing business in the DFW office by training/overseeing
           new operations professionals. Secured fair freight rates by
            researching the freight market daily, assessing company project
             history, considering carrier reliability and legal transit time,
              etc. while building/improving customer relationship.
        </p>
      </div>
      <div className="container-item">
        <h4>Logistics Coordinator</h4>
        <p className="company">Fluor Corporation, Houston</p>
        <p className="role-details"> Organized progress meetings with package execution teams
           and vendors in order to attain vendor updates and problem
          solve to guarantee timely material readiness for shipment
          and minimize schedule impact.
        </p>
      </div>
    </div>

    <div className='container-item container-side'>
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
  </div>
)

export default App
