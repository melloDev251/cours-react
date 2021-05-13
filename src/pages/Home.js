import React from 'react';
import Countries from '../components/Countries';
import Navigation from '../components/Navigation';
import Logo from './../components/Logo';

const Home = () => {
    return (
      <div>
        <Navigation />
        <Logo />
        <Countries />
      </div>
    );
};

export default Home;