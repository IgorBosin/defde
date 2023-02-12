import {cityType} from "../02-test object/02";
import {repairHouse, toFireStaff, toHireStaff} from "../03-test function/03";
import {demolishHousesOnTheStreet, getBuildinsWithStaffCountGreaterThen} from "./04_2";

let city: cityType

beforeEach(() => {
    city = {
        title: 'Perm',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false, address:
                    {
                        number: 100, street:
                            {title: "white street"}
                    }
            },
            {
                id: 2, buildedAt: 2008, repaired: false, address:
                    {
                        number: 100, street:
                            {title: 'happy street'}
                    }
            },
            {
                id: 3, buildedAt: 2020, repaired: false, address:
                    {
                        number: 101, street:
                            {title: 'happy street'}
                    }
            },
        ],
        governmentBuildings: [
            {
                type: 'Hospital', budget: 200000, staffCount: 200, address: {
                    street: {title: "central str"}
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {
                    street: {title: "SOUTH str"}
                }
            },
        ],
        citizenNumber: 100000
    }
})

test('Houses shold be destroyed', () => {
    demolishHousesOnTheStreet(city, 'happy street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test('buildings with correct staff count', () => {
    let buildings = getBuildinsWithStaffCountGreaterThen(city.governmentBuildings, 500)
    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})