import React from 'react';


const Education = ({ title, degree, school, years }) => (
 (

   <div className="education">
     <h5>{title}</h5>
     <h6>{degree}</h6>
     <h6 className="school">{school}</h6>
     <h6 className="school">{years}</h6>

   </div>
  )
)

export default Education;
