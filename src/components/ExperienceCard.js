import React from 'react';


const ExperienceCard = ({role, company, details, id}) => (
  <div>
    <div>
      <h4>{role}</h4>
      <p>{company}</p>
      <p>{details}</p>
    </div>
  </div>
)

export default ExperienceCard;
