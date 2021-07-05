/**
 * 1. Töltsd be a szükséges modulokat: http és az általad írt router modul.
 */
const http = require('http')
const router = require('./router/countryRouter');
 
// 2. Definiáld a port értékét 8080 -ra a port változóban.
const port = 8080
/**
 * 3. Hozz létre egy http szervert.
 * A szerver get kérés esetén meghívja a router kapcsolódó metódusát, 
 * amely válaszol a kérésre.
 */
const server = http.createServer(async (req, res) => {
  const method = req.method.toLowerCase()
  if (router[method]) {
    const list = await router[method]()
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(list)
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    res.end('The method is not "get"')
  }
})
// 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
server.listen(port, () => console.log(`Server is listening at http://127.0.0.1:${port}`))
