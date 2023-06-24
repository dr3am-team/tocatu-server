import { expect } from "chai"
import supertest from "supertest"
import generador from './generador/producto.js'
import config from "../config.js"


const request = supertest(`http://127.0.0.1:${config.PORT}`)


//This test suit needs to have the server on
describe('Test API REST ful: Test Externo', () => {

    describe('GET', () => {
        it('Debería retornar un status 200', async () => {
            const response = await request.get('/api/users')
            expect(response.status).to.eql(200)
        })
    })

    describe('POST', () => {
        it('Debería agregar un usuario', async () => {
            const user = generador.get()
            console.log("usuario: ", user)
            
            const response = await request.post('/api/users').send(user)
            expect(response.status).to.eql(200)

            const prod = response.body
            expect(prod).to.include.keys('username','password','mail')
            
            expect(prod.username).to.eql(user.username)
            expect(prod.password).to.eql(user.password)
            expect(prod.mail).to.eql(user.mail)
        })
    })
})