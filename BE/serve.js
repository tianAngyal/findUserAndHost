import * as http from "http";
import * as url from "url";

http
  .createServer(function (req, res) {
    // const requestUrl = req.url;
    // console.log("Prichádza požiadavka z URL:", requestUrl);

    // console.log(`connection encrypted? ${req.socket.encrypted}`);
    // console.log(`connection encrypted? ${req.headers.host}`);
    const protocol = req.socket.encrypted ? "https" : "http";
    const host = req.headers.host;
    const url = `${protocol}://${host}${req.url}`;
    console.log(url);

    if (req.url == "/" && req.method == "POST") {
    }
    res.write("CONGRATULATIONS");
    res.end();
  })
  .listen(8000);
