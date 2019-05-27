import React from 'react'

import { Header, Icon } from 'semantic-ui-react'


const Profile = () => {
  return (
    <div>
      <Icon name='paw' size='huge' />
      <Header as='h1' style={{display: 'inline', 'font-size': '40px', 'line-height': '70px'}}>Pet Keeper</Header>
    </div>
  );
};

export default Profile
