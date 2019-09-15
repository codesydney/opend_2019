import React, {Component} from 'react';
//import { connect } from 'react-redux'

class Home extends Component {
  
  render() {
    return (
      <div className="container z-depth-2">
        <div className="row">
          <div className="col s12">

            <div className="row">
              <div className="col s12">
                <br />
                <h4 className="center">Address Labs</h4>
                <h6 className="center">Community Contributed Open Datasets for Australian Addresses</h6>
                <br />
              </div>
            </div>

            <div className="row">
              <div className="col s12 input-field">
                <i className="material-icons prefix">textsms</i>
                <input type="text" id="rapidAddress" size="100" placeholder="Type in address here" className="autocomplete" />
                <p className="right">Address Type Ahead lookup API above is powered by  
                  <a href="https://harmonyrightaddress.com" target="_blank" rel="noopener noreferrer"></a>
                </p>
              </div>
            </div>

          <div className="row">
            <div className="col s12">
              <div id="error"></div>
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col s0 m1 l1"></div>
            <div className="col s12 m8 l6">
              <label>GNAF PID</label>
              <input id="HRA_ID" type="text" className="validate" readOnly="readonly" name="HRA_ID" placeholder="ID (DPID or GNAF PID)" size="60" />
              <label>Subdwelling</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="flatNumber"/>
              <label>Street number</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="streetNumber"/>
              <label>Street name</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="streetName"/>
              <label>Street type</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="streetType"/>
              <label>Suburb</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="suburb"/>
              <label>State</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="state"/>
              <label>Postcode</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="postcode"/>
              <label>Longitude</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="longitude"/>
              <label>Latitude</label>
              <input type="text" className="validate" readOnly="readonly" size="60" id="latitude"/>

              <form name="getReportForm" method="POST" action="\report">
                  <input type="hidden" name="fullAddress" />
                  <input type="hidden" name="postcode" />
                  <input type="hidden" name="longitude" />
                  <input type="hidden" name="latitude" />
                  <button type="submit" className="btn waves-effect waves-light" value="Get report" name="btn_submit">Report
                    <i className="material-icons right">send</i>
                  </button>
              </form>
            </div>
          </div>

        </div>
      </div>
      </div>
      );
  }

}

/*
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
} 

export default connect(mapStateToProps)(Home);
*/

export default Home;