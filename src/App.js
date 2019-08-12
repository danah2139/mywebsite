import React,{Component} from 'react';
import About from './components/About';
import Projects from './components/Projects'
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

import logo from './assets/img/dana.jpg';

class App extends Component {
  render(){
    const person = {
      avatar: './assets/img/Dana-Cohen.jpg',
      name: 'Dana Cohen',
      profession: ' Softwer Developer ',
      bio:' Highly motivated. Team player. Passionate for writing code. Self - learner. Eager to learn new technologies . With valid security classification.',
      address: 'Ashkelon Isreal',
      email:'danah2139@gmail.com',
      phone:'050-9912802',
      social: [
          {name:'envelope', url:'mailto:danah2139@gmail.com'},
          {name: 'github', url: 'https://github.com/danah2139'},
          {name: 'linkedin', url: 'https://www.linkedin.com/in//dana-cohen-5176b514b/'}
      ],
      experience: [
          {jobTitle: 'Software Developer – Student', company: '- Ministry Of Defense – "Malmab" Department - Cyber Security', startDate: 'Jan 2016', endDate: 'Present', jobDescription:' Member of developing team. programming in python and react.js' },
          {jobTitle: 'Backend', company: 'DragonsDev', startDate: 'September 2014', endDate: 'Jan 2016', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      education: [
          {degree: 'BSc Computer Science', institution: 'Jct- Lev Academic Center', startDate: 'Oct 2015', endDate: 'Jul 2019', description: ''},
  
      ],
      skills: [
          {pl: 'Python', percentage: '95%'},
          {pl: 'Java', percentage: '90%'},
          {pl: 'C#', percentage: '75%'},
          {pl: 'C++', percentage: '50%'}
      ],
      projects:[
        {pl:'C#' ,description:'Human Resources Management System'},
        {pl:'Java' ,description:'Computer Engineering- generating 3D pictures'},
        {pl:'Java' ,description:'2 Android applications for managing Car Rental Company'},
        {pl:'SQL' ,description:'Learning the language and creating a database in PL SQL Developer'}
      ]
  };
    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
        </div>

        <div className='content-wrapper'>
            <div className='content'>
              <Experience experience={person.experience} />
              <Education education={person.education} />
              <Skills skills={person.skills} />
              <Projects projects={person.projects}/>
            </div>
        </div>
      </div>
    </header>    
  );
  }
  
}

export default App;
