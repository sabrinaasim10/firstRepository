import React from 'react';
import { useLocation} from 'react-router-dom'

const Home = () => {
    const{state} = useLocation();
    const{userName, password} = state;
    return <h1>Username is: {userName} and password is {password}</h1>
}

export default Home;