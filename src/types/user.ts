interface Company {
  name: string
  catchPhrase: string
  bs: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: Company
  address: Address
}
