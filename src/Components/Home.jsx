import React from 'react'
import './css/home.css'
import pupils from '../images/pupils.jpg'
import Logo from '../images/railways.jpg'
import AdmissionBlock from '../images/adm.jpg'
import Class from '../images/class.webp'
import Top from './Home/Top'
import About from './Home/About'
import Promise from './Home/Profile'
import Remarks from './Home/Remarks'

function Home() {
    
    return(
        <div className='containe contCss' id='home'>
            <section className='customNav'>
                    <div className='lnkDiv customLnDiv'>
                        <ul>
                        <li><a href='#about'>About School</a></li>
                        <li><a href='#profile'>Profile</a></li>
                        <li><a href='#remarks'>Remarks</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='ofcont'>Official Contact : +254740698766</h4>
                    </div>
            </section>
            <Top />
            <About />
            <Promise />
            <Remarks />
        </div>
    )
}

export default Home