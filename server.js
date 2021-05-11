const faker = require('faker');
const _ = require('lodash');

function generateDB(){
    return {
        "athletes": _.times(3, (n)=>{
            return {
                "id": n + 1,
                "first_name":faker.name.firstName(),
                "last_name":faker.name.lastName(),
                "hometown":faker.address.city(),
                "olympic_host_nation": faker.address.country(),
                "year_competed": faker.date.month(),
                "date_of_birth": faker.date.past(),
                // "appliance": faker.product.appliance(),
                "image": faker.image.sports(),
                "favourite_vehicle": faker.vehicle.vehicle(),
                "nameCard":faker.helpers.createCard(),
                "moustache": faker.helpers.mustache()

            }
        }),
        "comments" : _.times(10, (n)=>{
            return {
                "id": n+1,
                "text": faker.lorem.sentence(),
            }})
        }
}

module.exports = generateDB

