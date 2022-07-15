import React from "react";
import '../css/home.css'
import amina from '../../images/amina.jpg'

function Remarks() {
    return(
        <div id="remarks" className="remarksContainer">
            <center><h1 className="headings1">Remarks</h1></center>
            <div className='remakBox'>
                <article className="remarkArt">
                    <div className="reImgDiv">
                        <center><img src={amina} width='100%' height='100%' className="remImg"/></center>
                    </div>
                    <div className="remCont">
                        <center><h4>Headteacher</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti.</p>
                        <button className="btn btn-secondary">Read more</button>
                        </center>
                    </div>
                </article>
                <article className="remarkArt">
                    <div className="reImgDiv">
                        <center><img src={amina} width='100%' height='100%' className="remImg"/></center>
                    </div>
                    <div className="remCont">
                        <center><h4>Headteacher</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti.</p>
                        <button className="btn btn-secondary">Read more</button>
                        </center>
                    </div>
                </article>
          
                <article className="remarkArt">
                    <div className="reImgDiv">
                        <center><img src={amina} width='100%' height='100%' className="remImg"/></center>
                    </div>
                    <div className="remCont">
                        <center><h4>Headteacher</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti.</p>
                        <button className="btn btn-secondary">Read more</button>
                        </center>
                    </div>
                </article>
                <article className="remarkArt">
                    <div className="reImgDiv">
                        <center><img src={amina} width='100%' height='100%' className="remImg"/></center>
                    </div>
                    <div className="remCont">
                        <center><h4>Headteacher</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, deleniti.</p>
                        <button className="btn btn-secondary">Read more</button>
                        </center>
                    </div>
                </article>
          
          
            </div>
        </div>
    )
}

export default Remarks