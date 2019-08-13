
import React from 'react';
import PropTypes from 'prop-types';
import SocialNet from './SocialNetworks';


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