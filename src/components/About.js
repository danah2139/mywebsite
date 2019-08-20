import React from 'react';
import PropTypes from 'prop-types';
import SocialNet from './SocialNetworks';
import {withRouter,Route } from 'react-router-dom';

const About = ({avatar, name, profession, bio,phone,address, socialNet}) => {
    return(
        <div className='bio'>
            <img src={avatar} alt ={name}/>
            <div className='title'>
                <h1>{name}</h1>
                <h2>{profession}</h2>
            </div>
            <div className='desc'>
                <p>{bio}</p>
            </div>
            <div className='desc'>
                <i className='fa fa-map-marker'></i>
                <p>{address}</p>
            </div>
            <div className = 'desc'>
                <i className='fa fa-mobile'></i>
                <p>{phone}</p>
            </div>
            <Route exact path = '/components' socialNet={socialNet} component = {props => <SocialNet  socialNet={socialNet}/>} />
        </div>
    );
};
  
About.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    address: PropTypes.string,
    phone:PropTypes.string,
    socialNet: PropTypes.node
};
  
export default withRouter(About);