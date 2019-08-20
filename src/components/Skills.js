import React from 'react';

const Skills = (props) => {
  const mySkills = (
    <div>
      {props.skills.map((skll) =>
        <div className='item w33' key={skll.pl}>
          <h3>{skll.pl}</h3>
          <div className='skills'>
            <span style={{width: skll.percentage}}></span>
          </div>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-percent'></i>
      <h2>SKILLS</h2>
      {mySkills}
    </div>
  )
};

export default Skills;