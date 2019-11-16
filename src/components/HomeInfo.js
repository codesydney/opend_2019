import React from "react";

export default class HomeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: props.lat, //-33.8688,
      lng: props.lng, //151.2093,
      zoom: props.zoom //16
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
              <div>
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
                <label>{this.state.lng}</label>
                <input type="text" className="validate" readOnly="readonly" size="60" id="longitude"/>
                <label>{this.state.lat}</label>
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

    );
  }
}