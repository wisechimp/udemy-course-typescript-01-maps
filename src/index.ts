import { User } from './components/User'
import { Company } from './components/Company'

import {} from 'googlemaps'

const user = new User()
const company = new Company()

console.log(user)
console.log(company)

new google.maps.Map(document.getElementById('map'), {
	center: {
		lat: 0,
		lng: 0,
	},
	zoom: 1,
})
