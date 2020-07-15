import {} from 'googlemaps'

// Instructions to other classes wo they can interact with the Map
interface BeMappable {
	location: {
		lat: number
		lng: number
	}
	markerContent(): string
}

export class CustomMap {
	private googleMap: google.maps.Map

	constructor(mapId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(mapId), {
			center: {
				lat: 0,
				lng: 0,
			},
			zoom: 1,
		})
	}

	addMarker(beMappable: BeMappable) {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: beMappable.location.lat,
				lng: beMappable.location.lng,
			},
		})

		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: beMappable.markerContent(),
			})

			infoWindow.open(this.googleMap, marker)
		})
	}
}
