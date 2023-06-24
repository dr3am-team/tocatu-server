import supertest from "supertest";
import config from "../config.js";

const pruebaServidorConSuperTest = async () => {
    //const url = 'https://jsonplaceholder.typicode.com/posts'
    const url = `http://localhost:${config.PORT}/api/users`

    try {
        const request = supertest(url)

        console.log('holi');

        const rta = await request.get('/')
        console.log(rta ? "true" : "false");
        /* const { status, body } = rta

        console.log('status code', status)
        console.log('body', body) */
    }
    catch(error) {
        console.log('error:', error.message)
    }
}


//pruebaServidorConAxios()
pruebaServidorConSuperTest()