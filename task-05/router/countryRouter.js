const carController = require('../controller/countryController');

/**
 * 1. Készíts egy router objektumot, ami a get kulcsnál meghívja a carController 
 * getAll nevű metódusát és string típusként visszaadja az adatok tömbjét.
 */
const router = {
  get: async () => {
    const cars = await carController.getAll()
    return JSON.stringify(cars, null, 2)
  }
}
/**
 * 2. A module az előző pontnál elkészített router objektumot adja vissza.
 */
module.exports = router
