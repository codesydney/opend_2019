$(function() {

        // Use the environment based on the site it is on
        Harmony.useEnv("https://preview-hosted.mastersoftgroup.com");
    
        // Init the client with the demo api user name and credential
        // We have created the following user and credential which you can use on localhost
        Harmony.init("aluser", "PlzXiWxqUGxGOx5r2pScje2QieaExbV8", Harmony.AUSTRALIA);
    
        // Use the JSONP protocol
        Harmony.useProtocol(Harmony.JSONP);
    
        var opt = {
          // min 3 chars to trigger the lookup
          minLength:3,
          // skip transaction call when address selected. You need to make your own call depending on your business flow.
          skipTransaction: false,
          // define your own call back function when address selected.
          onSelect: function(event, ui) {
              console.log('GNAF PID : ' + ui.item.id);
              console.log('Address  : ' + ui.item.fullAddress);
              console.log('Subdwelling : ' + ui.item.subdwelling);
              console.log('Postcode    : ' + ui.item.postcode);
              console.log('Longitude   : ' + ui.item.attributes.Longitude);
              console.log('Latitude    : ' + ui.item.attributes.Latitude);
              $("#longitude").val(ui.item.attributes.Longitude);
              $("#latitude").val(ui.item.attributes.Latitude);
              document.getReportForm.postcode.value=ui.item.postcode;
              document.getReportForm.longitude.value=ui.item.attributes.Longitude;
              document.getReportForm.latitude.value=ui.item.attributes.Latitude;
              document.getReportForm.fullAddress.value=ui.item.fullAddress;
              document.getElementById("HomeMap").setAttribute("lat", ui.item.attributes.Latitude);
              document.getElementById("HomeMap").setAttribute("lng", ui.item.attributes.Longitude);
          }
        };
    
        // Configure the address lookup.
        // "#rapidAddress" is referring to the input address element id
        Harmony.UI.addressLookup($("#rapidAddress"), "GNAF", opt);
        Harmony.UI.addField(Harmony.ID, $("#HRA_ID"));
        Harmony.UI.addField(Harmony.SUBDWELLING, $("#flatNumber"));
        Harmony.UI.addField(Harmony.STREET_NUMBER, $("#streetNumber"));
        Harmony.UI.addField(Harmony.STREET_NAME, $("#streetName"));
        Harmony.UI.addField(Harmony.STREET_TYPE, $("#streetType"));
        Harmony.UI.addField(Harmony.POSTCODE, $("#postcode"));
        Harmony.UI.addField(Harmony.LOCALITY, $("#suburb"));
        Harmony.UI.addField(Harmony.STATE, $("#state"));

});