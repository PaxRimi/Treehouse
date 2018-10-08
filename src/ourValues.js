import React from 'react';
import music from './img/Icon-Music@1X.png';
import graph from './img/Icon-Graph2@1X.png';
import star from './img/Icon-Star@1X.png';


class ourValues extends React.Component{
    render(){
        return(
            <section className="ourValues">
                <div className="container">
                    <h2>
                        Culture & Values
                    </h2>
                    <p>
                        Proin iaculis purus consequat cure.
                    </p>
                    <div className="ourValues__Content">
                        <div>
                            <div className="contentIcon">
                                <img src={music} alt="note icon"/>
                            </div>
                            <h3>
                                Work-Life Balance
                            </h3>
                            <p>
                                Proin iaculis purus consequat sem cure
                                digni ssim. Donec porttitora entum suscipit
                                aenean rhoncus posuere odio in tincidunt.
                            </p>
                        </div>
                        <div>
                            <div className="contentIcon">
                                <img src={graph} alt="graph icon"/>
                            </div>
                            <h3>
                                Quality Over Quantity
                            </h3>
                            <p>
                                Proin iaculis purus consequat sem cure
                                digni ssim. Donec porttitora entum suscipit
                                aenean rhoncus posuere odio in tincidunt.
                            </p>
                        </div>
                        <div>
                            <div className="contentIcon star">
                                <img src={star} alt="star icon"/>
                            </div>
                            <h3>
                                Deliver Excellence
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

export default ourValues;