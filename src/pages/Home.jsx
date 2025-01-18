import React from 'react';
import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <div className="text-center p-10">
           
                <h1 className="text-4xl font-bold"> <ReactTyped strings={["Welcome to My Portfolio"]} typeSpeed={40} /></h1>
            </div>

            <p>Hi, I'm Arpit Jain. A passionate Frontend Developer.</p>

        </div>
    );
};

export default Home;
