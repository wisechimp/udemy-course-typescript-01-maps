import {} from 'googlemaps'

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
}
