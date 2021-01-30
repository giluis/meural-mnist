import express from "express";
import { fromJsonString } from "meuralmetwork";
import * as f from "fs";
import mnist from "mnist";
const fs = f.promises;
import bodyParser from "body-parser";
const app = express();
const PORT = 5004;

app.use(express.json());


let data = await fs.readFile('neuralnetworkdata.json', 'utf8');
const nn = fromJsonString(data);
app.get("/api/guess", (req, res) => {
    try {
        console.log(req.body);
        const guess = nn.feedForward(req.body.digit);
        return res.status(200).json({guess:maxIndex(guess),guessArr:guess});
    } catch (err) {
        return res.status(200).json({ error: err});
    }
    
})

function maxIndex(arr){
    return arr.reduce((max,cur,i,arr)=>cur > arr[max]?i:max,0);
}

app.get("/api/digit/:d", (req, res) => {
    let digit = req.params.d;
    if (!isDigitValid(digit))
    return res.status(422).json({ error: "/digit/:d, where d must be a digit (number netween 0 and 9)" });
    return res.status(200).json({ digit: mnist[digit].get() });
})

const isDigitValid = (digit)=> !isNaN(+digit) && +digit >= 0 && +digit < 10;

app.listen(PORT, () => console.log(`App listenning on port ${PORT}`))