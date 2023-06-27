import { faker } from '@faker-js/faker/locale/en'


const getMail = _ => ({
    receiver: faker.internet.email(),
    username: faker.person.firstName(),
})



const get = _ => ({
    username: faker.person.firstName(),
    password: faker.person.fullName(),
    mail: faker.internet.email()
})

//console.log(get())

export default {
    getMail,
    get
}