import React from 'react';
import AddCompound from '../components/AddCompound';
import Header from '../components/Header';
import CompoundList from '../components/CompoundList';

const Home = () => {

    return (
        <div>
            <Header/>
            <AddCompound />
            <CompoundList />
        </div>
    );
};

export default Home;







