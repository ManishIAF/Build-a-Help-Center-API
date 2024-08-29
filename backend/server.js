import 'dotenv/config';
import connectDatabase from './Database/connection.js';
import cors from 'cors';
import express from 'express';

const app = express();


//--------------------------------------------- middleware here ---------------------------------------------

    // middleware for cors (Cross-origin resource sharing) policy as we are running frontend and backend on different ports/servers
    app.use(cors({
        origin: 'http://localhost:3000'
    }));

    // middleware for parsing application/x-www-form-urlencoded
    app.use(express.json());

//-----------------------------------------------------------------------------------------------------------

//--------------------------------------------- importing routes here ---------------------------------------------

    import HelpCenterRoute from './routes/HelpCenterRoute.js';

//-----------------------------------------------------------------------------------------------------------------

//--------------------------------------------- routes here ---------------------------------------------
    // default route
    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    // help center route
    app.use('/api/v1/help-centers', HelpCenterRoute);

//-----------------------------------------------------------------------------------------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT,async()=>{
    await connectDatabase()
    console.log(`server is running on port ${PORT}`)
})