import {useBins} from '../hooks/useBins'

function Map() {
    const bins = useBins()
    return (
        <div>
            Здесь будет карта Mapbox
        </div>
    );
}

export default Map;
