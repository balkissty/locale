import React, { useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function Homepage(props) {

    const mapStyles = {
        width: '100%',
        height: '100%'
      };

    useEffect(() => {
          navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position)
          },
          function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
          }
          );
      });
    



    return(
        <div className="bg-indigo-100">
            <Map
                google={props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 6.5243793,
                    lng: 3.3792057
                }}
                >
                <Marker
                    onClick={ props.onMarkerClick }
                    name={'This is test name'}
                />
        </Map>
        </div>
    );
} 
export default GoogleApiWrapper({
    apiKey: ''
  })(Homepage);