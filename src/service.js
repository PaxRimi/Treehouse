import React from "react";
import Heart from './img/Icon - Heart@1X.png';
import Mobile from './img/Icon - Mobile@1X.png';
import Graph from './img/Icon - Graph@1X.png';


class Service extends React.Component{
    render(){
        return(
            <section className="service">
                <div className="container">
                    <h2>
                        Professional Services
                    </h2>
                    <p>
                        Proin iaculis purus consequat sem cure
                    </p>
                    <div className="service_icon">
                        <div>
                            <img src={Heart} alt="Icon of heart"/>
                            <h3>
                                beautiful designs
                            </h3>
                            <p>
                                Proin iaculis purus consequat sem cure
                                digni ssim. Donec porttitora entum suscipit
                                aenean rhoncus posuere odio in tincidunt.
                            </p>
                        </div>
                        <div>
                            <img src={Mobile} alt="Icon of mobile phone"/>
                            <h3>
                                responsive web
                            </h3>
                            <p>
                                Proin iaculis purus consequat sem cure
                                digni ssim. Donec porttitora entum suscipit
                                aenean rhoncus posuere odio in tincidunt.
                            </p>
                        </div>
                        <div>
                            <img src={Graph} alt="icon of graph"/>
                            <h3>
                                Marketing tools
                            </h3>
                            <p>
                                Proin iaculis purus consequat sem cure
                                digni ssim. Donec porttitora entum suscipit
                                aenean rhoncus posuere odio in tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Service;