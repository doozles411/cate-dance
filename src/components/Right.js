import React from 'react';
import insta from '../assets/images/instagram.png';

function Right() {
    return (
        <div className='right'>
            <h2>About</h2>
            <div className='contact'>
                <p>Call (206) 240-4372 to schedule a lesson</p>
                <a
                    href='https://www.instagram.com/cateloose'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                        alt='Instagram icon'
                        src={insta}
                    />
                </a>
            </div>
            <div className='credentials'>
                <p className='cred-text'>As a life-long dancer, some of my experience includes:</p>
                <ul className='cred-list'>
                    <li>15+ years of ballet & jazz</li>
                    <li>Social dancing since 2005</li>
                    <li>Yoga certified</li>
                    <li>3 years of burlesque</li>
                    <li>2 years of belly dance</li>
                    <li>5+ years powerlifting</li>
                    <li>2 years distance running</li>
                </ul>
            </div>
            <p className='sendoff-text'>Don't hesitate to reach out if I can answer any questions or help you with your dancing goals!</p>
        </div>
    );
}

export default Right;