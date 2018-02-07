
// Require express - gives us a function
let express = require('express');

// Create an instance of express by calling the function returned above - gives us an object
let app = express();
let port = 5001;
 
// express static file serving - public is the folder name
app.use(express.static('server/public')); 

// Start up our server
app.listen(port, function(){
    console.log('Listening on port', port);
});

