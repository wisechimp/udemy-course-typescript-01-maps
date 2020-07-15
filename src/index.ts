import { User } from './components/User'
import { Company } from './components/Company'
import { CustomMap } from './components/CustomMap'

import {} from 'googlemaps'

const user = new User()
const company = new Company()

console.log(user)
console.log(company)

const customMap = new CustomMap('map')

customMap.addMarker(user)
customMap.addMarker(company)
