import React from 'react';
import Basket from './img/Icon-Basket@1X.png';
import Laptop from './img/Icon-Laptop@1X.png';
import Padlock from './img/Icon-Locked@1X.png';
import Tablet from  './img/projectTablet.png';


class Project extends React.Component{
    
    render(){
        return(
            <section className="project">
                <div className="container">
                    <h2>
                        latest project
                    </h2>
                    <p>
                        Proin iaculis purus consequat sem cure
                    </p>
                    <div>
                        <div className="project_Content">
                            <h3>
                                Developing a framework
                            </h3>
                            <p>
                                Proin iaculis purus consequat sem cure  digni ssim
                                donec porttitora entum suscipit  aenean rhoncus posuere
                                odio in tincidunt.
                            </p>
                            <div className="project_ContentLi">
                                <div className="contentLi_img">
                                    <img src={Basket} alt="basket icon"/>
                                </div>
                                <div className="contentLi_txt">
                                    <h4>
                                        E-Commerce Ready
                                    </h4>
                                    <p>
                                        Proin iaculis purus consequat sem cure  digni ssim.
                                    </p>
                                </div>
                            </div>
                            <div className="project_ContentLi">
                                <div className="contentLi_img">
                                    <img src={Laptop} alt="laptop icon"/>
                                </div>
                                <div className="contentLi_txt">
                                    <h4>
                                        Powerful SEO Features
                                    </h4>
                                    <p>
                                        Proin iaculis purus consequat sem cure.
                                    </p>
                                </div>
                            </div>
                            <div className="project_ContentLi">
                                <div className="contentLi_img">
                                    <img src={Padlock} alt="padlock icon"/>
                                </div>
                                <div className="contentLi_txt">
                                    <h4>
                                        Secure Encryption
                                    </h4>
                                    <p>
                                        Proin iaculis purus consequat sem cure iaculis purus.
                                    </p>
                                </div>
                            </div>
                            <p>
                                Proin iaculis purus consequat sem cure  digni ssim donec
                                porttitora entum suscipit  aenean rhoncus posuere odio in.
                            </p>
                            <button>
                                View Details &#8594;
                            </button>
                        </div>
                        <div className="project_image">
                            {/*<img src={Tablet} alt="tablet"/>*/}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Project;