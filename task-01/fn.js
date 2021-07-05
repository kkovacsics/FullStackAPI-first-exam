/**
 * 1. Objektumok tömbjéből egy elem kiválasztása az id alapján.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {Number} id az id, ami alapján keresünk a tömbben
 * @returns a tömbnek az az eleme, amelynek az id -je megegyezik a kapottal
 */
const get = (list = [], id = 0) => {
    //
    return list.find( item => item.id===id )
};

/**
 * 2. Új objektum beszúrása a kapott tömbbe.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {*} entity egy objektum, amelyet be szeretnénk szúrni a tömbbe
 * @returns a létrehozott, beszúrt és id -vel ellátott objektum
 */
const create = (list = [], entity = null) => {
    //
    const id = list[list.length - 1].id + 1
    const newEntity = { ...entity, id }
    list.push(newEntity)
    return newEntity
  };

/**
 * 3. Egy meglévő objektum frissítése a kapott tömbben.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = (list = [], entity = {}) => {
    //
    if (!entity.id) {
      return false
    }
    const index = list.findIndex(item => item.id === entity.id)
    if (index < 0) {
      return false
    }
    list[index] = { ...list[index], ...entity }
    return list[index]
};

/**
 * 4. Eltávolít a paraméterként kapott tömbből egy elemet az id alapján.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns true ha sikeres volt a törlés, egyébként false
 */
const remove = (list = [], id = 0) => {
    //
    if (!list.length || list.length === 0 || id === 0) {
      return false
    }
    const index = list.findIndex(item => item.id === id)
    if (index < 0) {
      return false
    }
    list.splice(index, 1)
    return true
  
};

/**
 * 5. Exportáld ki a négy függvényt, hogy más fájlokból is elérhetőek legyenek.
 */
 module.exports = {
  get,
  create,
  update,
  remove
}
