// 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 Open AI API key
// AIzaSyAeVVobmTRA1aQpQbm_9_1PGils2PqXDmI Gemini API key

const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const app = express();
const port = 8080;

const genAI = new GoogleGenerativeAI("AIzaSyAeVVobmTRA1aQpQbm_9_1PGils2PqXDmI"); // suggested using environmental API keys

app.post('/', async (req, res) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = "Say this is a test."

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.json({
        data: text
    });
});

app.listen(port, () => {
    console.log(`The app is running on http://localhost:${port}`)
});