import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const Location = ({ google, locations = [] }) => {
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
        <div className="flex h-24 max-w-5xl mx-auto">
            <h1>Hi!</h1>
            <Map
                google={google}
                center={locations[0]}
                initialCenter={locations[0]}
                zoom={8}
                disableDefaultUI={true}
                mapStyles={mapStyles}
            >
                {locations.map(
                    coords => <Marker position={{ lat: {lat}, lng: {lng} }} />
                )}

            </Map>
            <div className="App">
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
        </div>
    )
};
export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
})(Location);