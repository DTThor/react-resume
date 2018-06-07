import React from 'react'
import ExperienceCard from './ExperienceCard'
import experience from '../experience.js'

const ExperienceList = () => {
  return (
    <div className=" container container-item">
      {
        experience.map((user, i) => {
          return (
            <ExperienceCard
              key={i}
              id={experience[i].id}
              role={experience[i].role}
              company={experience[i].company}
              details={experience[i].details}
              />
          );
        })
      }
    </div>
  );
}

export default ExperienceList;