import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/user-routes.js';
import cors from 'cors';


const app = express();
const PORT =  8000;

app.use(cors())
app.use(bodyParser.json());

app.use('/users', router);

app.get('/', (req, res) => {
    res.json('Helllo from homepage')
})


app.listen(PORT,() =>console.log( `server is running on port ${PORT}` ));

