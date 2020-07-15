import {} from 'googlemaps'

// Instructions to toher classes wo they can interact with the Map
interface BeMappable {
	location: {
		lat: number
		lng: number
	}
}

export class CustomMap {
	private googleMap: google.maps.Map

	constructor(mapId: string) {
		new google.maps.Map(document.getElementById(mapId), {
			center: {
				lat: 0,
				lng: 0,
			},
			zoom: 1,
		})
	}

	addMarker(coordinates: BeMappable) {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: coordinates.location.lat,
				lng: coordinates.location.lng,
			},
		})
	}
}
