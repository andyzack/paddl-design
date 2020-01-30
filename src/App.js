import React, { Component } from 'react';
import Activity from './Activity.js';
import './assets/sass/index.scss';
import logo from './assets/images/logo.png';
import iconcategory from './assets/images/icon-category.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render:'',
      show: false,
      totaldays: 287,
      deltadays: +26,
      totalxp: 3244,
      deltaxp: -420,
      activityUpdateStatus: '',
      title: "Bachelor of Communications (Media)",
      subtitle: "Bachelor Degree",
      category: "Education",
      categoryicon: iconcategory,
    };
  }

  handleSubmit(obj, e) {
    this.setState({render:obj});        
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  
  render() {
    return (
      <div className="page vh-100 bg-gradient-blue dt w-100 bg-right no-repeat cover relative open-sans">
        <header>
          <div className="cover bg-left bg-center bg-image">
            <div className="bg-black-80 pb5 pb6-m pb7-l">
              <nav className="dt w-100 mw8 center">
                <div className="dtc w2 v-mid pa3">
                  <a href="/" className="dib w3 h3 pa1 grow-large">
                    <img
                      src={logo}
                      className="logo"
                      alt="AAZ"
                    />
                  </a>
                </div>
              </nav>
              <div className="tc mt4 mt5-m mt6-l ph3">
                <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Student's Portal</h1>
                <h2 className="fw1 f3 white-80 mt3 mb4">Connect to real employment experiences</h2>
                <button className="f4 no-underline grow v-mid bg-dark-gray white ba b--light-blue br3 ph4 pv3 mb3" 
                  onClick={
                    e => {
                      this.showModal();
                    }
                  }
                >
                  Activity updates
                </button>

                <Activity data={this.state} onClose={this.showModal} show={this.state.show} />

              </div>
            </div>
          </div>
      </header>
      </div>
    )
  }
}

export default App;