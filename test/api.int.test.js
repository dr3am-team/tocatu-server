import { expect } from "chai"
import supertest from "supertest"
import generador from './generador/producto.js'

import Server from '../server.js'



describe('test apirest ful', () => {

    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            const server = new Server(8081,'MONGODB')
            const app = await server.start()

            const request = supertest(app)
            const response = await request.get('/api/productos')
            
            expect(response.status).to.eql(200)

            await server.stop()
        })
    })

    describe('POST', () => {
        it('debería incorporar un producto', async () => {
            const server = new Server(8081,'MONGODB')
            const app = await server.start()

            const request = supertest(app)

            const producto = generador.get()
            console.log(producto)
            
            const response = await request.post('/api/productos').send(producto)
            expect(response.status).to.eql(200)

            const prod = response.body
            expect(prod).to.include.keys('nombre','precio','stock')
            
            expect(prod.nombre).to.eql(producto.nombre)
            expect(prod.precio).to.eql(producto.precio)
            expect(prod.stock).to.eql(producto.stock)

            await server.stop()
        })
    })
})