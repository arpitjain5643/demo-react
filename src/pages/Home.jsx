import React from 'react';
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <div className="text-center text-white p-10">
           
                <h1 className="text-4xl text-white font-bold"> Welcome to my Portfolio !!</h1>
            </div>

            <p className='text-xl text-white' ><ReactTyped strings={["Hi, I'm Arpit Jain. A passionate Frontend Developer."]} typeSpeed={40} /></p>
            {/* <p class=/"text-blue-600/75">The quick brown fox...</p> */}
        </div>
    );
};

export default Home;