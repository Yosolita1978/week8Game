import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// For testing my API I saving one response in a .js file 
import fakedata  from './fakedata.js';

const app = express();
const PORT = 5000;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 

app.get("/api/game", cors(), async (req, res) => {
    const url = `https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log("Line 27 server.js", data);
      res.send(data);
    } catch (err) {
      console.error("Fetch error: ", err);
    }
  });


  // //hardcode the game response for testing reasons to don't saturate my API call. 
// app.get('/api/game', (req, res) =>{
//     res.json(fakedata);

// })



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));