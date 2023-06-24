import { expect } from 'chai'
import generador from './generador/producto.js'

describe('*** Test generador de producto ***', () => {
    
    it('el producto debería poseer los campos nombre, precio y stock', () => {
        const prod = generador.get()
        //console.log(prod)

        expect(prod).to.include.keys('nombre','precio','stock')
    })

    it('debería generar productos con datos aleatorios', () => {
        const prod1 = generador.get()
        const prod2 = generador.get()
        //console.log(prod1)
        //console.log(prod2)

        expect(prod1.nombre).not.to.eql(prod2.nombre)
        expect(prod1.precio).not.to.eql(prod2.precio)
        expect(prod1.stock).not.to.eql(prod2.stock)
    })
})