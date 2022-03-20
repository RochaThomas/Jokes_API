
const mongoose = require('mongoose');

const DB_NAME = 'Jokes_API_DB';

mongoose.connect(('mongodb://localhost/' + DB_NAME), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the database`))
    .catch(() => console.log(`Something went wrong when connecting to the database`, err));

