import React from 'react';
import circel from './img/CircleCheck.png';
import mark from './img/Checkmark-3@1X.png';
import rack from './img/gear 2@1X.png';

class MoreInfo extends React.Component{
  render(){
      return (
          <section className="moreInfo">
              <div className="container">
                  <div className="rack">
                      <img src={rack} alt="rack"/>
                  </div>
                  <div className="moreInfo_content">
                      <h2>
                          Just relax <span>&</span>
                          <br/>
                          let us do the heavy lifting
                      </h2>
                      <p>
                          Proin iaculis purus consequat sem cure  digni ssim. Donec
                          porttitora entum suscipit  aenean rhoncus posuere odio in tincidunt.
                      </p>
                      <ul>
                          <li><img src={circel} alt="circle"/> <img className="chechMark" src={mark} alt="mark"/>Initial Setup & Customizations</li>
                          <li><img src={circel} alt="circle"/> <img className="chechMark" src={mark} alt="mark"/>Regular Updates</li>
                          <li><img src={circel} alt="circle"/> <img className="chechMark" src={mark} alt="mark"/>Round The Clock Support</li>
                      </ul>
                      <button>
                          Learn more
                      </button>
                  </div>
              </div>
          </section>
      )
  }
}

export default MoreInfo;