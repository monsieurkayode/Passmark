import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.png';
import { menuItems } from '../constants';

import '../../assets/styles/App.scss';

class App extends PureComponent {
  render() {
    return (
      <div>
        <section className="banner">
          <div className="overlay">
            <div className="container">
              <div className="logo-bkg">
                <img src={logo} alt="" className="flex-img" />
              </div>
              <div className="intro-text">
                <p>
                  <span className="text-white">Connect</span> with <span className="text-white">millions
                  </span> of <span className="text-white">tutor</span>, anywhere,
                  anytime.
                </p>
              </div>
              <div className="tutor-btn-bkg">
                <button className="tutor-btn">
                  GET A TUTOR
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="main">
          <div className="container">
            <nav>
              {
                menuItems.map((item) => {
                  return (<div className="nav-item" key={item.name}>
                    {item.name}
                    <div>
                      {item.items.map((subItems, index) => {
                        return (
                          <a href={subItems.link} key={`${subItems.text}${index}`}>{subItems.text}</a>
                        );
                      })}
                    </div>
                  </div>);
                })
              }
            </nav>
          </div>
        </section>
        <br /><br /><br />
      </div>
    );
  }
}

export default App;
