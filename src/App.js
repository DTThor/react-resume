import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile'
import ExperienceList from './components/ExperienceList'
import ExperienceCard from './components/ExperienceCard'
import Sidebar from './components/Sidebar'
import SectionHeader from './components/SectionHeader'
import experience from './experience.js'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <SectionHeader name="CAREER PROFILE" icon="icon fas fa-user-circle fa-lg" />
        <Profile />
        <SectionHeader name="EXPERIENCE" icon="icon fas fa-briefcase fa-lg"/>
        <ExperienceList />
        <Sidebar />
      </div>
    )
  }
}

export default App
