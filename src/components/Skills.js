import React from 'react';



const Skills = (props) => {
   const mySkills = (
     <div>
       {props.Skills.map((edu) =>
         <div className='item' key={edu.degree}>
           <h3>{edu.degree} @ {edu.institution} <span>{edu.startDate} - {edu.endDate}</span></h3>
           <p>{edu.description}</p>
         </div>
       )}
     </div>
   );
   return (
     <div className='title'>
       <i class = "fa fa-file-code-o"></i>
       <h2>SKILLS</h2>
       {mySkills}
     </div>
   )
 };


export default Skills;