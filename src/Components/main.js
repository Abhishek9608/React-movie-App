import React from "react";
import '.././style.css';
import image from '../images/Aliens.jpg';
import image1 from '../images/babel.jpg';
import image2 from '../images/halloween.jpg';
import image3 from '../images/lord of war.jpg';
import image4 from '../images/pulpfiction.jpg';
import image5 from '../images/Se7en.jpg';
import image6 from '../images/snatch.jpg';
import image7 from '../images/The Lord of the rings.jpg';
import image8 from '../images/theDarkNight.jpg';
import image9 from '../images/theoffice.jpg';
import image10 from '../images/traffice.jpg';
import image11 from '../images/twilight Zone.jpg';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";


export default function main() {
      return (
  <BrowserRouter>
  
        <div className="main">
          <div className="sk-hits-grid">
            <div className="sk-hits-grid-hit">
              < Link to="#" className>
                <img src={image} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">Aliens</div>
            </div>
            <div className="sk-hits-grid-hit">
              < Link to="#"className>
                <img src={image1} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">The Lord of the rings</div>
            </div>
            <div className="sk-hits-grid-hit">
              < Link to="#"className>
                <img src={image2} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">Se7en</div>
            </div>
            <div className="sk-hits-grid-hit">
              <Link to="#"  className>
                <img src={image3} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">Halloween</div>
            </div>
            <div className="sk-hits-grid-hit">
              <Link to="#" className>
                <img src={image4} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">twilight Zone</div>
            </div>
            <div className="sk-hits-grid-hit">
              < Link to="#" className>
                <img src={image5} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">Traffice</div>
            </div>
            <div className="sk-hits-grid-hit">
              < Link to="#" className>
                <img src={image6} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">The Office</div>
            </div>
            <div className="sk-hits-grid-hit">
              < Link to="#" className>
                <img src={image7} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">The Dark Night</div>
            </div>
            <div className="sk-hits-grid-hit">
              <Link to="#" className>
                <img src={image8}alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">Snatch</div>
            </div>
            <div className="sk-hits-grid-hit">
              <Link to="#" className>
                <img src={image9} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">pulpfiction</div>
            </div>
            <div className="sk-hits-grid-hit">
              <Link to="#" className>
                <img src={image10} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">Lord of war</div>
            </div>
            <div className="sk-hits-grid-hit">
              <Link to="#" className>
                <img src={image11} alt="Aliens" className="sk-hits-grid-hit__poster" width={170} height={240} />
              </Link>
              <div className="sk-hits-grid-hit__title">Halloween</div>
            </div>
          </div>
          <div className="sk-pagination-navigation">
            <div className="sk-toggle">
              <div className="sk-toggle-option">
                <Link to="#" className="sk-toggle-option-num">privious page</Link>
              </div>
              <div className="sk-toggle-option">
                <Link to="#" className="sk-toggle-option-num">1</Link>
              </div>
              <div className="sk-toggle-option">
                <Link to="#" className="sk-toggle-option-num">2</Link>
              </div>
              <div className="sk-toggle-option">
                <Link to="#"  className="sk-toggle-option-num">3</Link>
              </div>
              <div className="sk-toggle-option-next">
                <Link to="#"  className="sk-toggle-option-num">Next Page</Link>
              </div>
            </div>
          </div>
        </div>
       
        </BrowserRouter>
        
      );
    };