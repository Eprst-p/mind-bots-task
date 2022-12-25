import express from "express"
import bodyParser from "body-parser"
import {userId} from "./bot.mjs";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/user-id', (req, res) => {
    res.send({ userID: userId });
});


//heroku
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});





app.listen(port, () => console.log(`Listening on port ${port}`));
