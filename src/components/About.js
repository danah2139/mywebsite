
import React from 'react';
import PropTypes from 'prop-types';
import socialNet from './SocialNetworks';


const About = ({avatar, name, profession, bio,phone,address, socialNet}) => {
    return(
        <div className='bio'>
            <div className='avatar'>
                <img src={avatar} alt={name} />
            </div>
            <div className='title'>
                <h1>{name}</h1>
                <h2>{profession}</h2>
            </div>
            <div className='desc'>
                <p>{bio}</p>
            </div>
            <div className='address'>
                <p>{address}</p>
            </div>
            <div className = 'address'>
                <p>{phone}</p>
            </div>
            <Social social={socialNet} />
        </div>
    );
};
  
About.PropTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    address: PropTypes.string,
    phone:PropTypes.string,
    social: PropTypes.node
};
  
export default About;