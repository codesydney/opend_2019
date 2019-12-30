import React from "react";
import { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import fetchJsonp from "fetch-jsonp";
import { MyContext } from "../App";

export default function MyAutocomplete() {

  const API_URL="https://preview-hosted.mastersoftgroup.com/harmony/rest/au/address?sourceOfTruth=GNAF&transactionID=a53d240365e6b75d65f5bf70d951289f&Authorization=Basic%20YWx1c2VyOlBselhpV3hxVUd4R094NXIycFNjamUyUWllYUV4YlY4";
  const { address, updateAddress } = useContext(MyContext);

  const [options, setOptions] = React.useState([]);
  const [query, setQuery] = React.useState("");
  //  const loading = open && options.length === 0;
  const loading = false;

  React.useEffect(() => {
    if (query.length >= 3) {
    const url = `${API_URL}&fullAddress=${query}`;
    console.log("url=",url);
    fetchJsonp(url)
      .then((response) => {
        return response.json()
      }).then((json) => {
        console.log('options=', json.payload);
        setOptions(json.payload)
      }).catch((ex) => {
        console.log('parsing failed', ex);
      })
    } else {
        setOptions([]);
    }
  }, [query]);

  const handleInputChange = event => {
    console.log("input=", event.target.value);
    setQuery(event.target.value);
  };

  const handleOptionChange = (event, value) => {
    console.log("optionchange=", event.target.value, value);
    updateAddress(value);
  };

  return (
    <Autocomplete
      id="asynchronous-demo"
      //style={{ width: 1000}}
      disableClearable
      getOptionSelected={(option, value) => option === value}
      getOptionLabel={option => option.fullAddress}
      options={options}
      loading={loading}
      onChange={handleOptionChange}
      renderInput={params => (
        <TextField
          {...params}
          label="Type in address here"
          fullWidth
          variant="outlined"
          onChange={handleInputChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}
