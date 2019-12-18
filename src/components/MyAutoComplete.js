import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import deburr from "lodash/deburr";
import Downshift from "downshift";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
//import axios from "axios";
import fetchJsonp from "fetch-jsonp";

const API_URL = "https://preview-hosted.mastersoftgroup.com/harmony/rest/au/address?sourceOfTruth=GNAF&transactionID=a53d240365e6b75d65f5bf70d951289f&Authorization=Basic%20YWx1c2VyOlBselhpV3hxVUd4R094NXIycFNjamUyUWllYUV4YlY4&state=";
//const API_URL = "https://preview-hosted.mastersoftgroup.com/harmony/rest/au/address?callback=FRED&sourceOfTruth=GNAF&transactionID=a53d240365e6b75d65f5bf70d951289f&Authorization=Basic%20YWx1c2VyOlBselhpV3hxVUd4R094NXIycFNjamUyUWllYUV4YlY4&state=";

// renderSuggestion.propTypes = {
//   highlightedIndex: PropTypes.oneOfType([
//     PropTypes.oneOf([null]),
//     PropTypes.number
//   ]).isRequired,
//   index: PropTypes.number.isRequired,
//   itemProps: PropTypes.object.isRequired,
//   selectedItem: PropTypes.string.isRequired,
//   suggestion: PropTypes.shape({
//     label: PropTypes.string.isRequired
//   }).isRequired
// };

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  container: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  inputRoot: {
    flexWrap: "wrap"
  },
  inputInput: {
    width: "auto",
    flexGrow: 1
  },
  divider: {
    height: theme.spacing(2)
  }
}));

export default function MyAutoComplete() {
  const classes = useStyles();

  const emptyList = [];
  const [data, setData] = useState(emptyList);
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [finalAddress, setFinalAddress] = useState("");

  const handleSelectItem = (event, index) => {
    console.log('select item, index = ', index);
    console.log('select item, value = ', data[index]);
    setQuery(data[index].fullAddress);
    console.log('select item, query = ', query);
    //console.log('GNAF PID : ' + suggestion.id);
    // console.log('Address  : ' + suggestion.fullAddress);
    // console.log('Subdwelling : ' + ui.item.subdwelling);
    // console.log('Postcode    : ' + ui.item.postcode);
    // console.log('Longitude   : ' + ui.item.attributes.Longitude);
    // console.log('Latitude    : ' + ui.item.attributes.Latitude);
    // document.getReportForm.postcode.value=ui.item.postcode;
    // document.getReportForm.longitude.value=ui.item.attributes.Longitude;
    // document.getReportForm.latitude.value=ui.item.attributes.Latitude;
    // document.getReportForm.fullAddress.value=ui.item.fullAddress;
    // document.getElementById("HomeMap").setAttribute("lat", ui.item.attributes.Latitude);
    // document.getElementById("HomeMap").setAttribute("lng", ui.item.attributes.Longitude);
  }
  
  const renderSuggestion = (suggestionProps) => {
    const {
      suggestion,
      index,
      itemProps,
      highlightedIndex,
      selectedItem
    } = suggestionProps;
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || "").indexOf(suggestion.title) > -1;
    //const suggestionAny = <Any>suggestion;
  
    return (
      <MenuItem
        {...itemProps}
        key={index}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
        onClick = {event => handleSelectItem(event, index)}
      >
        {suggestion.fullAddress}
      </MenuItem>
    );
  }
  

  const getSuggestions = (value, { showEmpty = false } = {}) => {
    console.log("getSuggestions", data);
    return data;
  };

  const handleInputChange = event => {
    const input= event.target.value;
    console.log("input=", input);
    if (input.length >= 3) {
      setUrl(`${API_URL}&fullAddress=${input}`);
    } else {
      setData(emptyList);
    }
    //setQuery(input);
  };

  const renderInput = inputProps => {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (
      <TextField
        InputProps={{
          inputRef: ref,
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          ...InputProps
        }}
        value={query}
        onChange={handleInputChange}
        {...other}
      />
    );
  };

  // const handleClick = (event) => {
  //   console.log("final query = ", query);
  //   setFinalAddress(query);
  //   console.log("final address = ", finalAddress);  
  // }

  /*
    useEffect(() => {
    console.log("url=",url);
    if (url === "") { return; }
    fetchJsonp(url, {
      jsonpCallbackFunction: 'FRED',
    })
      .then((response) => {
        return response.json()
      }).then((json) => {
        setData(json.payload)
        console.log('parsed json', json)
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
  }, [url]);

*/
  useEffect(() => {
    console.log("url=",url);
    if (url === "") { return; }
    fetchJsonp(url)
      .then((response) => {
        return response.json()
      }).then((json) => {
        setData(json.payload)
        console.log('parsed json', json)
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
  }, [url]);

/*
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        //console.log("result=", result.data);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
*/

  return (
    <div className={classes.root}>
      <Downshift id="downshift-simple">
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => {
          const { onBlur, onFocus, ...inputProps } = getInputProps({
            placeholder: "Type in address here"
          });

          const { InputProps, ref, ...other } = {
                fullWidth: true,
                label: "",
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus },
                inputProps
              };

          return (
            <div className={classes.container}>
               {/* {renderInput({
                fullWidth: true,
                classes,
                label: "",
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus },
                inputProps
              })}  */}
              <TextField
                InputProps={{
                  inputRef: ref,
                  classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput
                  },
                  ...InputProps
                }}
                value={query}
                onChange={handleInputChange}
                {...other}
              />

              <TextField id="standard-basic" label="Standard" value={query}/>

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    { 
                      getSuggestions(inputValue).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.fullAddress }),
                        highlightedIndex,
                        selectedItem 
                      })
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
      <button type="button" >
        Search
      </button>
    </div>
  );
}
