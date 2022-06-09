import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const Location = ({ google, locations = [] }) => {

    return (
        <div className="flex h-24 max-w-5xl mx-auto">
            <h1>Hi!</h1>
            <Map
                google={google}
                center={locations[0]}
                initialCenter={locations[0]}
                zoom={8}
                disableDefaultUI={true}
            >
                {locations.map(
                    coords => <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
                )}

            </Map>
        </div>
    )
};
export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
})(Location);