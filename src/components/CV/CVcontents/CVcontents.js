import React from 'react;'
import classes from './CVcontents.css';
import {Button} from 'semantic-ui-react';
const cvContents = (props) =>{
    let content = null;
    switch (props.type){
        case('education-bottom'):
            content = <Button fluid>Education</Button>;
            break; 
        case('work-experience-bottom'):
            content = <Button fluid>Work Experience</Button>;;    
            break; 
        case('projects-bottom'):
            content = <Button fluid>Projects</Button>;;
            break; 
        case ('particape'):
            content = <Button fluid>Particape</Button>;;
            break; 
        case('skills-bottem'):
            content = <Button fluid>Skills</Button>;;
            break; 
        case('languages-bottom'):
            content = <Button fluid>Languages</Button>;;
            break; 
            
    }


};
export default cvContents;