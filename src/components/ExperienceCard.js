import React from 'react';


const ExperienceCard = ({role, company, details, id}) => (
   (
    <div>
      <div>
        <h4>{role}</h4>
        <p className="company">{company}</p>
        <p className="role-details">{details}</p>
      </div>
    </div>
  )
)

export default ExperienceCard;
