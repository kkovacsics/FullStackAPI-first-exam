/**
 * 1. Töltsd be a szükséges modulokat a http kérésekhez és a jsonDB getAll 
 * függvényét.
 */
const { getAll } = require('./jsonDB');
const http = require('http')
 
// 2. Definiáld a port értékét 8080 -ra a port változóban.
const port = 8080
/**
 * 3. Hozz létre egy http szervert.
 * A szerver get kérés esetén a getAll függvény segítségével lekéri a listát, 
 * majd beállítja a headert, hogy json a tartalom típusa, 
 * végül visszaküldi a kliensnek a listában tárolt adatokat.
 */
const server = http.createServer(async (req, res) => {
  if (req.method.toUpperCase() === 'GET') {
    const list = await getAll()
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(list, null, 2))
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    res.end('The method is not "GET"')
  }
})

/**
 * 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
 */
server.listen(port, () => console.log(`Server is listening at http://127.0.0.1:${port}`))
