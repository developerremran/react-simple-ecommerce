import React from 'react';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Card from './Components/Shop/Card/Card';
import Shop from './Components/Shop/Shop';
import  './index.css';

const App = () => {
  return (
    <div id='root'>
      <Header></Header>
      <div className=''>
      {/* <Banner /> */}
      <Shop />
      <Card />
      </div>
    </div>
  );
};

export default App;