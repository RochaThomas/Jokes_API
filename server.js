const express = require('express');
const app = express();
const PORT = 8000;

require(`./config/mongoose.config`);

app.use(express.json(), express.urlencoded({ extended: true }));

const RouteFunction = require(`./routes/joke.routes`);
RouteFunction(app);

app.listen(PORT, () => console.log(`>>>>> server is up on port: ${PORT} <<<<<`));