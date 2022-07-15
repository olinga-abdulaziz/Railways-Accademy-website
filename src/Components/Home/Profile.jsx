import React from 'react';

function Profile() {
    return(
        <div className='profileContainer' id='profile'>
            <div className='profMadoi'></div>
            <div>
                <center><h1 className='headings1'>Profile</h1></center>
            </div>
            <div className='proMain'>
                <div className='prom1'>
                    <center><h4>Our Vission</h4>
                    <div className='profIcons'>
                        <i class="fa fa-low-vision" aria-hidden="true"></i>
                    </div>
                    <p>To be potential center of excellence in education</p>
                    </center>
                </div>
                <div className='prom2'>
                <center><h4>Our Mission</h4>
                <div className='profIcons'>
                        <i class="fa fa-balance-scale" aria-hidden="true"></i>
                    </div>
                    <p>To enhance excellence in basic education by providing quality curriculum that will produce hollistic learners</p>
                    </center>
                </div>
                <div className='prom3'>
                <center><h4>Our Objectives</h4>
                    <div className='profIcons'>
                        <i class="fa fa-object-group" aria-hidden="true"></i>
                    </div>
                    <p>To promote a holistic condusive environment for wellbeing child</p>
                    </center>
                </div>
            </div>
        </div>
    )
}


export default Profile