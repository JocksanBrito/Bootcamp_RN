import {createServer, Model, Response} from 'miragejs'

createServer({
    urlPrefix: 'http://localhost:8080',
    namespace: 'api',
    models: {
        user: Model,
    },
    seeds(server){
        server.create('user', {
            firstName: 'Jocksan',
            lastName:'Brito Leite',
            email: 'jocksan.brittos1989@gmail.com',
            password:'kldjfsjkas17188847',
        });
    },

    routes(){
        this.get('/user', (schema) =>{
            return schema.users.all()
        })

        this.post('/auth', (schema, request) => {
            const body = JSON.parse(request.requestBody);
            const user = schema.users.findBy({email: body.email, password: body.password});

            if (!user) {
                return new Response(404)
            }
            return user;

        })
        this.post('/user', (schema, request) => {
            const body = JSON.parse(request.requestBody);
            const user = schema.users.create(body);
            return user;

        })
    }
});
