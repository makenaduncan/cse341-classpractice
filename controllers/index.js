// const res = require("express/lib/response");

displayJoke = (req, res) => { 
    const data =
      'How did the telephone propose to his girlfriend? ...he gave her a ring.';
    res.status(200).send(data);
  };

//   res.status(200).send(data) will let us send whatever we want. 200 is an http response status code
  
  module.exports = {
    displayJoke,
  };

//   req is short for request and res is short for response