import React, { PureComponent } from 'react';
import logo from './assets/images/logo.png';

import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <section className="banner">
        <div className="overlay">
          <div className="container">
            <div className="logo-bkg">
              <img src={logo} alt="" className="flex-img" />
            </div>
            <div className="intro-text">
              <p><span className="text-white">Connect</span> with <span className="text-white">millions
              </span> of <span className="text-white">tutor</span>, anywhere,
              anytime.</p>
            </div>
            <div className="tutor-btn-bkg">
              <button className="tutor-btn">
                GET A TUTOR
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
