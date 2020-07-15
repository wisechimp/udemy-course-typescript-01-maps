import faker from 'faker'
import { BeMappable } from './CustomMap'

export class User implements BeMappable {
	name: string
	location: {
		lat: number
		lng: number
	}

	constructor() {
		this.name = faker.name.firstName()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}

	markerContent() {
		return `User Name: ${this.name}`
	}
}
