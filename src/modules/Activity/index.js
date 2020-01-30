import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render:'',
      totaldays: 287,
      deltadays: +26,
      totalxp: 3244,
      deltaxp: -420,
      activityUpdateStatus: '',
      title: "Bachelor of Communications (Media)",
      subtitle: "Bachelor Degree",
      category: "Education",
      categoryicon: "[IMG]",
    };
  }

  static defaultProps = {
    id: "",
    modalClass: "",
    modalSize: "md"
  };

  handleSubmit(obj, e) {
    this.setState({render:obj});
  }

  renderSubComp() {
    switch(this.state.render){
      case 'openactivity':
        return (
          <div>Progress Updated!</div>
        )
      default: return ''
    }
  }

  removeSubComp() {
    this.setState({ render: false });
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({ render: false });
  };

  deltadayssign() {
    if (this.props.data.deltadays > 0) {
      return '+'
    }
  }

  deltaxpsign() {
    if (this.props.data.deltaxp > 0) {
      return '+'
    }
  }

  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-blue light-blue san-serif center tc">
        <div className="w-100 center">
          {/* ACTIVITY HEADING SECTION */}
          <section className="bg-gradient-blue-title">
            <div className="flex justify-center items-center pt5">
              <button className="f4 fw2 no-underline grow v-mid white-50 bg-transparent br3 bn ph2 pv1 absolute right-2 top-2 open-sans" 
                onClick={e => {
                  this.onClose(e);
                }}
              >X
              </button>
              <div className="pa0 tl nb4 mt2">
                <img
                  src={this.props.data.categoryicon}
                  className="dib w4 icon-category"
                  alt="{this.props.data.title}"
                />
              </div>
              <div className="pa3 tl nb3 mt0">
                <h1 className="ma0 pb2 f3-l f4-m f4-s fw6 light-blue">{this.props.data.title}</h1>
                <span>
                  <label className="light-purple">{this.props.data.category} | </label> {this.props.data.subtitle}
                </span>
              </div>
            </div>
          </section>

          {/* ACTIVITY BODY SECTION */}
          <section className="bg-gradient-blue-content pt5">
            <div className="mw8 w-100 center">
              <h2 className="f3-l f4-m f4-s fw6 pb5">Activity updates</h2>
              <div className="dt center w5">
                <div className="dtc w-50 nowrap tl f5">
                  <span className="f4 icon-clock pl2">{this.props.data.totaldays}</span> days
                </div>
                <div className="dtc w-50 nowrap tr f4">
                <span className="light-purple f3">{this.deltadayssign()}{this.props.data.deltadays}</span> days
                </div>
              </div>
              <div className="dt center w5">
                <div className="dtc w-50 nowrap tl f5">
                  <span className="f4 icon-arrow-up pl2">{this.props.data.totalxp}</span> XP
                </div>
                <div className="dtc w-50 nowrap tr f4">
                  <span className="light-purple f3">{this.deltaxpsign()}{this.props.data.deltaxp}</span> XP
                </div>
              </div>

              <div className="h2 mt4 mb0 f5 light-purple">{this.renderSubComp()}</div>
              <button className="primary-button f4 no-underline grow v-mid white bg-transparent bw1 ba1 b--light-blue br3 ph4 pv3 mb3 mt1" onClick={this.handleSubmit.bind(this, 'openactivity')}>
                Continue
              </button>
              
              <div className="mt3 az-progress-bar">
                <span className="b1 br-100 ma2 pa1 bg-light-blue dib"></span>
                <span className="b1 br-100 ma2 pa1 bg-light-purple dib"></span>
                <span className="b1 br-100 ma2 pa1 bg-light-blue dib"></span>
              </div>

            </div>
          </section>
        </div>
      </div>
    )
  }
}

Activity.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  categoryicon: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  totaldays: PropTypes.number.isRequired,
  totalxp: PropTypes.string,
  deltadays: PropTypes.number.isRequired,
  deltaxp: PropTypes.string,
}

export default Activity;