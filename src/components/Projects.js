import React from 'react';

const Projects = (props) => {
  const myProjects = (
    <div>
    {props.projects.map((pro) =>
      <div className='item' key={pro.pl}>
        <h3>{pro.pl} </h3>
        <p>{pro.description}</p>
      </div>
    )}
  </div>
  );
  return (
    <div className="title">
        <i className='fa fa-file-code-o'></i>
        <h2>PROJECTS</h2>
        {myProjects}
    </div>
  )
};

export default Projects;