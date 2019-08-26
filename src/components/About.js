import React from 'react';
import PropTypes from 'prop-types';
import SocialNet from './SocialNetworks';

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
            <SocialNet socialNet={socialNet} />
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
  
export default About;