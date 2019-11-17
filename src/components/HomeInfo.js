import React, { Fragment } from "react";
import { TextField, Button} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

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
      <Fragment>
        <form>
          <TextField
            id="HRA_ID"
            label="GNAF PID"
            value="ID (DPID or GNAF PID)"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="flatNumber"
            label="Subdwelling"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="streetNumber"
            label="Street number"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="streetName"
            label="Street name"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="streetType"
            label="Street type"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="suburb"
            label="Suburb"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="state"
            label="State"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="postcode"
            label="Postcode"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="longitude"
            label="Longitude"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="latitude"
            label="Latitude"
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />

        </form>
        <br />

        <form name="getReportForm" method="POST" action="\report">
          <input type="hidden" name="fullAddress" />
          <input type="hidden" name="postcode" />
          <input type="hidden" name="longitude" />
          <input type="hidden" name="latitude" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Report
          </Button>
        </form>
      </Fragment>

    );
  }
}