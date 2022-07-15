import React from 'react';
import Logo from '../../images/railways.jpg'
import '../css/home.css'


function About() {
    return(
        <div className='aboutDiv' id='about'>
                <div className='aboutDicContent'>
                    <div className='abD1'>
                        <img className='imgIn' src={Logo} width='100%' height='100%' />
                    </div>
                    <div className='abD2'>
                    <h2 className='headings about'>About the School</h2>
                      
                        <p className='aboutP'>The Aga Khan Education Service (AKES) was created by Sir Sultan Mahomed Shah Aga Khan, the current Aga Khan's predecessor and grandfather. Aga Khan Schools were first established as early as 1905. These included a handful of community-based literacy classes in remote rural areas of South East Asia which were strikingly progressive for their time. They put emphasis on accessibility for all communities regardless of socioeconomic status, teaching both girls and boys, and stressing the importance of equitable early childhood education.</p>
                        <div className='socDiv'>
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </div>
                
                </div>
            </div>
    )
}

export default About