import React from 'react'
import './hero.css'
import { ReactTyped } from "react-typed";
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hSection left">
                <div className='hTitel'>
                    <ReactTyped
                        strings={[
                            "Hey There <br/> I'm Arpit", // First text
                            // Second text with a styled span
                        ]}
                        typeSpeed={50} // Speed of typing
                         // Prevent backspacing common strings
                    />
                </div>
            </div>
            <div className="hSection right"></div>
        </div>
    )
}

export default Hero