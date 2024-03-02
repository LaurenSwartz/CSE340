/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express")

const app = express()

/* ******************************************
 * Default GET route
 * ***************************************** */
app.get("/", (req, res) => {res.send("Welcome home!")})

/* *******************************************
Lines 1-3 code comment.
Line 4 does a number of things. Let's look at each:
app.get() is an Express handler. Specifically, Express is watching for a "GET" request. We'll talk more about what GET is later.
"/" indicates the "route". A route is the path indicated by the URL. In this case, it is just the base URL, with nothing added.
, the comma separates the route, from the function that is responsible for delivering a response to the request.
(req, res) => { ... } is an anonymous function that takes the request and response objects as parameters. Again, we'll go into more depth later.
res.send("Welcome home!") is a method of the response object that sends a message back to the browser. It's not a web page, just a message string.


/* ******************************************
 * Server host name and port
 * ***************************************** */
const HOST = 'localhost'
const PORT = 3000

/* ***********************
* Log statement to confirm server operation
* *********************** */
app.listen(PORT, () => {
console.log(`trial app listening on ${HOST}:${PORT}`)
})