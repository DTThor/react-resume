import React from 'react';


const SectionHeader = ({name, icon}) => (
  (
    <div className="container container-item">
      <h3 className="container-item"><i className={icon}></i> {name}</h3>
    </div>
  )
)

export default SectionHeader;
