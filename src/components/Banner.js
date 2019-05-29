import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon } from 'semantic-ui-react'


const Banner = () => {
  return (
    <div>
      <Icon name='paw' size='huge' />
      <Header as='h1' style={{display: 'inline', fontSize: '40px', lineHeight: '70px'}}>Pet Keeper</Header>
    </div>
  );
};

export default Banner
