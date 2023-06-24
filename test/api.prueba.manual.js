import axios from "axios";
import supertest from "supertest";
import config from "../config";

//https://axios-http.com/docs/intro

const pruebaServidorConAxios = async () => {
    //const url = 'https://jsonplaceholder.typicode.com/posts/7'
    const url = 'http://127.0.0.1:8080/api/productos/6256fbac86c2b84736919135'

    try {
        const rta = await axios(url)
        const { status, data:body } = rta
        
        console.log('status code', status)
        console.log('body', body)
    }
    catch(error) {
        console.log('error:', error.message)
    }
}

const pruebaServidorConSuperTest = async () => {
    //const url = 'https://jsonplaceholder.typicode.com/posts'
    const url = `http://127.0.0.1:${config.PORT}/api/users/`

    try {
        const request = supertest(url)

        //const rta = await request.get('/7')
        const rta = await request.get('/')
        const { status, body } = rta

        console.log('status code', status)
        console.log('body', body)
    }
    catch(error) {
        console.log('error:', error.message)
    }
}


//pruebaServidorConAxios()
pruebaServidorConSuperTest()