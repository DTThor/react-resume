import React from 'react';


const SectionHeader = (props) => {
  return (
    <div className="container container-item">
      <h3 className="container-item"><i className={props.icon}></i> {props.name}</h3>
    </div>
  );
}

export default SectionHeader;
