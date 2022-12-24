import express from "express"
import bodyParser from "body-parser"
import {userId} from "./bot.mjs";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/user-id', (req, res) => {
    res.send({ userID: userId });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
