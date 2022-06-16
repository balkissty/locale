import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

function Homepage({ google, locations = [] }) {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);




  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
      <Map
          google={google}
          containerStyle={{
              position: "static",
              width: "100%",
              height: "100%"
          }}
          style={{
              width: "100%",
              height: "100%"
          }}
          center={locations[0]}
          initialCenter={locations[0]}
          zoom={8}
          disableDefaultUI={true}
      >
          {locations.map(
              coords => <Marker position={coords} />
          )}

      </Map>
  )
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQSUcga6BXuJw0A7j2cGlHaCpWdV5Bdxg'
})(Homepage);