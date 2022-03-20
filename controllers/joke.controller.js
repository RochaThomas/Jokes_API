
const Joke = require(`../models/joke.model`);

//gets all of the jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            console.log("get all jokes")
            return res.json({ jokes: allJokes })
        })
        .catch( err => res.json({ message: `Something went wrong`, error: err }));
}

//gets a single joke that matches id
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(oneJoke => {
            console.log("get one joke")
            return res.json({ joke: oneJoke })
        })
        .catch(err => res.json({message: `Something went wrong`, error: err}));
}

//creates a new joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            console.log("post new joke")
            return res.json({ joke: newJoke })
        })
        .catch(err => res.json({message: `Something went wrong`, error: err}));
}

//updates an existing joke, finds one joke and then updates it
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            console.log("put/update one joke")
            return res.json({ joke: updatedJoke })
        })
        .catch(err => res.json({ message: `Something went wrong`, error: err }));
}

//deletes a joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => {
            console.log("delete one joke")
            return res.json({ result: result})
        })
        .catch(err => res.json({ message: `Something went wrong`, error: err}));
}

//gets a random joke
module.exports.randomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            //allJokes is an array containing all the individual joke documents
            //which can be accessed by index
            console.log(`Get a random joke`);
            //generate a random index
            let randomInt = Math.floor(Math.random() * allJokes.length);
            console.log(`Random Joke Index:`, randomInt);
            //send a json response back to the client with the joke
            // located by random index as the value for the joke key
            return res.json({ joke: allJokes[randomInt] });
        })
        .catch( err => res.json({ message: `Something went wrong`, error: err }));
}