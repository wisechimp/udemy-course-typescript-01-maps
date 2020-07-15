import faker, { fake } from 'faker'
import { BeMappable } from './CustomMap'

export class Company implements BeMappable {
	companyName: string
	catchPhrase: string
	location: {
		lat: number
		lng: number
	}

	constructor() {
		this.companyName = faker.company.companyName()
		this.catchPhrase = faker.company.catchPhrase()
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}

	markerContent() {
		return `
			<div>
				<h1>Company Name: ${this.companyName}</h1>
				<h3>Catchphrase: ${this.catchPhrase}</h3>
			</div>
		`
	}
}
