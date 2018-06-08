import React from 'react'
import ExperienceCard from './ExperienceCard'
import experience from '../experience.js'
import SectionHeader from './SectionHeader'

const ExperienceList = () => (
  (
    <div className="container container-item">
      <SectionHeader name="EXPERIENCE" icon="icon fas fa-briefcase fa-lg"/>
      {
        experience.map((user, i) => (
          (
            <ExperienceCard
              key={i}
              id={experience[i].id}
              role={experience[i].role}
              company={experience[i].company}
              details={experience[i].details}
              />
          )
        ))
      }
    </div>
  )
)

export default ExperienceList;
