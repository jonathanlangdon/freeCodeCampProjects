const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

/* The promise can handle success and failure. If responseFromServer is true, the resolve method here will successfully complete the promise. We will get "We got the data" if it is true and if it is false, the reject message will be "Data not received." */