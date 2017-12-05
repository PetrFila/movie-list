const express = require('express');
const bodyParser = require ('body-parser');

//Create the server
const server = express();

// Allows access to req.body when sending through form parameters
// i.e.
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const middleware = {
    showMethodUsed: function(req, res, next){
        console.log('req.method: ', req.method);
        next();
    },
    modifyResponseBody: function(req, res, next){
        res.body = req.body + "modified";
        console.log('req.body: ', req.body);
        next();
    },
    logger: function(req, res, next){
       console.log(new Date(), req.method, req.originalUrl, req.body);
       next();
    }
}


//Movies router/controller
const moviesRouter = require('./routes/movies');
server.use('/movies', moviesRouter);

server.get('/', [
                  middleware.showMethodUsed,
                  middleware.modifyResponseBody,
                  middleware.logger
                ], function(req, res) {
    // res.send('Finished doing the middlware chain');
    res.status(200).json(res.body);
});



const port = 7000;
server.listen(port, () => {
  console.log(`Movies API server running on port ${port}`);
});
