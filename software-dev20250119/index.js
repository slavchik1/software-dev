const http = require('http');
const port = process.env.PORT || 5001

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hey There</h1>");
    

    //Add routes
    const url = req.url;
    if (url === "/profile") {
        res.write("Welcome to your profile")
    } else if (url === "/shipment") {
        //Send JSON
        const payload = {
            address: {
                "Street": "Freddy Fazbear 123",
                "City": "Belughorod"
            }
        }
        
       // res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify(payload));
        res.end();
    }
}
).listen(port, ()=>{
    console.log(`Server listening on port ${port}...`)
});
