import { faker } from '@faker-js/faker/locale/en'


const get = _ => ({
    username: faker.person.firstName(),
    password: faker.person.fullName(),
    mail: faker.internet.email()
})


//console.log(get())

export default {
    get
}