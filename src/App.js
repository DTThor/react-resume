import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile'
import ExperienceList from './components/ExperienceList'
import ExperienceCard from './components/ExperienceCard'
import SectionHeader from './components/SectionHeader'
import Contact from './components/Contact'
import Education from './components/Education'
import experience from './experience.js'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <SectionHeader name="CAREER PROFILE" icon="icon fas fa-user-circle fa-lg" />
          <Profile />
          <SectionHeader name="EXPERIENCE" icon="icon fas fa-briefcase fa-lg"/>
          <ExperienceList />
        </div>
        <div className="container-item container-side">
          <Contact name="Dylan Thorwaldson" title="Web Development Apprentice" phone="(832) 741-5282" />
          <Education title="EDUCATION" degree="BA in Public Relations" school="Pepperdine University" years="2008-2012" />
        </div>
      </div>
    )
  }
}

export default App
