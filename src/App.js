import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile'
import ExperienceList from './components/ExperienceList'
import ExperienceCard from './components/ExperienceCard'
import Sidebar from './components/Sidebar'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h3 className="container-item"><i className="icon fas fa-user-circle fa-lg"></i> CAREER PROFILE</h3>
        <Profile />
        <h3 className="container-item"><i className="icon fas fa-briefcase fa-lg"></i> EXPERIENCE</h3>
        <ExperienceList />
        <Sidebar />
      </div>
    )
  }
}

export default App
