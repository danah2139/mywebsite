import React,{Component} from 'react';
import About from './components/About';
import Projects from './components/Projects'
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import img from './assets/img/Dana-Cohen.jpg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';


class App extends Component {
  render(){
    const person = {
      avatar: './assets/img/Dana-Cohen.jpg',
      name: 'Dana Cohen',
      profession: ' Software Developer ',
      bio:' Highly motivated. Team player. Passionate for writing code. Self - learner. Eager to learn new technologies . With valid security classification.',
      address: 'Aduvdevan 26 Ashkelon Isreal',
      email:'danah2139@gmail.com',
      phone:'050-9912802',
      socialNet: [
          {name:'envelope', url:'mailto:danah2139@gmail.com'},
          {name: 'github', url: 'https://github.com/danah2139'},
          {name: 'linkedin', url: 'https://www.linkedin.com/in/dana-cohen-5176b514b/'}
      ],
      experience: [
          {jobTitle: 'Software Developer – Student', company: '- Ministry Of Defense – "Malmab" Department - Cyber Security', startDate: 'Fab 2018', endDate: 'Present', jobDescription:' Member of developing team. programming in python and react.js' },
          {jobTitle: 'qa - Student', company: 'Tax Authority- Data Systems Management', startDate: 'Dec 2016', endDate: 'Fab 2018', jobDescription: 'Member of the technical support team  Department of Human Resources Israel Tax Authority .Responsible for maintenance the software by making QA tests.'},
      ],
      education: [
          {degree: 'BSc Computer Science', institution: 'Jct- Lev Academic Center', startDate: 'Oct 2015', endDate: 'Jul 2019', description: ''},
  
      ],
      skills: [
          {pl: 'Python', percentage: '97%'},
          {pl: 'Java', percentage: '95%'},
          {pl: 'C#', percentage: '90%'},
          {pl: 'C++', percentage: '90%'}
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
            <Route exact path = '/'
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              phone = {person.phone}
              socialNet={person.socialNet} component ={props => 
              <About avatar={person.avatar} 
              name={person.name} 
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              phone = {person.phone}/>} />
        </div>

        <div className='content-wrapper'>
            <div className='content'>
              <Route  exact path = '/' experience = {person.experience} component = {props => <Experience experience = {person.experience} />}/>
              <Route  exact path = '/' education={person.education} component = {props => <Education education={person.education}/>} />
              <Route  exact path = '/' projects={person.projects} component = {props => < Projects projects={person.projects}/>}/>
              <Route  exact path = '/' skills=  {person.skills} component = {props => <Skills skills={person.skills}/>} />
              <div className = 'title'>
                <img src = {img} alt = 'dana' />
              </div>
            </div>
        </div>
      </div>
    </header>    
  );
  }
  
}

export default App;
