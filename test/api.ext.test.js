import { expect } from "chai"
import supertest from "supertest"
import generador from './generador/producto.js'


const request = supertest('http://127.0.0.1:8080')

describe('test apirest ful', () => {

    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            const response = await request.get('/api/productos')
            expect(response.status).to.eql(200)
        })
    })

    describe('POST', () => {
        it('debería incorporar un producto', async () => {
            const producto = generador.get()
            console.log(producto)
            
            const response = await request.post('/api/productos').send(producto)
            expect(response.status).to.eql(200)

            const prod = response.body
            expect(prod).to.include.keys('nombre','precio','stock')
            
            expect(prod.nombre).to.eql(producto.nombre)
            expect(prod.precio).to.eql(producto.precio)
            expect(prod.stock).to.eql(producto.stock)
        })
    })
})