import React from 'react'
import '../css/home.css'
import pupils from '../../images/pupils.jpg'
import PP2B from '../../images/PP2B.jpg'
import AdmissionBlock from '../../images/adm.jpg'
import Class from '../../images/class.webp'


function Top() {
    return(
        <div className='homeTop'>
               
                <center><p className='motto'><strong>MOTTO :</strong> GOOD FOUNDATION IS THE KEY TO SUCCESS</p></center>
                
               <div className='topDispDiv'>
                    <div className='disp1'>
                    <img className='imgIn' width='100%' height='100%' src={PP2B} alt="" />
                        <div className='imgInDesc'>
                            <p >Railways Accademy primary school pupils</p>
                        </div>
                    </div>
                    <div className='disp2'>
                        <div className='disp2Top'>
                            <img className='imgIn' src={AdmissionBlock} width='100%' height='100%' />
                                <div className='imgInDesc2'>
                                    <p >The Administration Block</p>
                                </div>
                        </div>
                        <div className='disp2Bot'>
                             <img className='imgIn' src={Class} width='100%' height='100%' />
                                    <div className='imgInDesc2'>
                                        <p >Railways Accademy pupils in class</p>
                                    </div>
                        </div>
                        
                    </div>
               </div>
               <div className='topFooter'>
                    <center>
                        <p>Lorem ipsum dolor sit, amet</p>
                        <p>Lorem ipsum dolor sit, amet Lorem ipsum dolor sit, ametLorem ipsum dolor sit, amet</p>
                        <p>
                            <div className='socDiv1'>
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </div>
                        </p>
                    </center>
               </div>
            </div>
    )
}

export default Top