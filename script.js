function updateMap() {

    fetch('data.json')

        .then(response => response.json())
        .then(res => {
           
            res.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                if (cases > 255) {
                    color = `rgb(254, 0, 0)`
                }
                else {
                    color = `rgb(${cases}, 0, 0)`
                }

                // MARK ON THE MAP
                const marker1 = new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

                    
                    
                });

        });

    // fetch api aapko ek data feed s data la kar deta hai.

}
updateMap();







