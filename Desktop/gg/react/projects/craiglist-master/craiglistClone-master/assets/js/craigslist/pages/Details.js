import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.js';


export default class Details extends Component {
  constructor () {
    super()
    this.state = {

    }
  }


  
  render () {
    const { match, location, history } = this.props;
    return (
        <div className="details-page">
          <div className="container">
            <div className="white-box"> 
              <section className="submenu">
                <div className="direction">
                  <a href="#" className="prev">prev</a>
                  <a href="#" className="next">next</a>
                </div>

                <nav className="sub-links">
                  <a href="#">More ads by this user</a>
                  <a href="#">Print</a>
                  <a href="#">Share</a>
                  <a href="#">Contact Seller</a>
                </nav>
              </section>

              <section className="content-area">
                <div className="media-column">
                  <Gallery />
                </div>
                <div className="details-column">
                  <div className="date">
                    Posted: Feb 28th
                  </div>
                  <h3 className="title">Black 2016 BMW</h3>
                  <h4 className="price">$45,000</h4>
                  <div className="more-details">
                    <div className="info">
                      <label>Vin</label>
                      <h5>WERaDAFafadfaf</h5>
                    </div>
                    <div className="info">
                      <label>Mileage</label>
                      <h5>34255</h5>
                    </div>
                    <div className="info">
                      <label>Transmission</label>
                      <h5>Manual</h5>
                    </div>
                  </div>
                  <div className="description">
                    <label>Description</label>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    )
  }
}

