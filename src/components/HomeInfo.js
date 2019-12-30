import React, { Fragment, useContext } from "react";
import { TextField, Button} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import { MyContext } from "../App";

export default function HomeInfo() {
  const { address, updateAddress } = useContext(MyContext);

    //const position = [this.state.lat, this.state.lng];
    return (
      <Fragment>
        <form>
          <TextField
            id="HRA_ID"
            label="GNAF PID"
            value={address.id}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="flatNumber"
            label="Subdwelling"
            value={address.subdwelling}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="streetNumber"
            label="Street number"
            value={address.streetNumber}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="streetName"
            label="Street name"
            value={address.streetName}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="streetType"
            label="Street type"
            value={address.streetType}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="suburb"
            label="Suburb"
            value={address.locality}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="state"
            label="State"
            value={address.state}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="postcode"
            label="Postcode"
            value={address.postcode}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="longitude"
            label="Longitude"
            value={address.attributes.Longitude}
            disabled
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <br />
          <TextField
            id="latitude"
            label="Latitude"
            value={address.attributes.Latitude}
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