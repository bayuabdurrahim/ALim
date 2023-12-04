var isMomHappy = true;
// Promise
var willIGetNewPhone = new Promise(function (resolve, reject) {
 if (isMomHappy) {
    var phone = {

        brand: "Samsung",
        color: "black",
    };
    resolve(phone); // fulfilled atau janji dipenuhi
    } else {
        var reason = new Error("mom is not happy"); 
        reject(reason); // reject (ingkar)
    }
});
var http = require("http");
const server = http.createServer(async (req, res) => { 
 res.writeHead(200, { "Content-Type": "text/html" });

// Menjalankan Promise 
   function askMom() {
    willIGetNewPhone
       .then(function (fulfilled) {
        // yay, kamu akan dibelikan handphone baru 
        console.log(fulfilled);
        // output: { brand: 'Samsung', color: 'black' }
        res.end(JSON.stringify(fulfilled)); // Mengirim pesan kesalahan ke browser
       })
       .catch(function (error) {
        // oops, mom, Tidak jadi beli
        console.log(error.message); // output: 'mom is not happy'
       });
  }
   // Tanya Mom untuk menagih janji 
  askMom();
});

server.listen(3000);
console.log("Server berjalan pada 127.0.0.1:3000")