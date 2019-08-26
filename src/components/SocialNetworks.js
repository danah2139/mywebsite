
import React from 'react';

const SocialNetworks = (props) => {
  const socialNetworks = (
    <ul>
      {props.socialNet.map((socialNetwork) =>
        <li key={socialNetwork.name}>
          <a href={socialNetwork.url} target='_blank' rel="noopener noreferrer">
            <i className={'fa fa-' + socialNetwork.name + '-square'}></i>
          </a>
        </li>
      )}
    </ul>
  );
  return (
    <div className="socialNet">
      {socialNetworks}
    </div>
  )
};

export default SocialNetworks;