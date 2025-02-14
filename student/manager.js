/**
 * @callback AddCallback
 * @param {Student} student a hozzaadott diak
 * 
 * @callback SelectCallback
 * @param {Student} student a kivalasztott diak
 */
class Manager{
    /**
     * @type {Student[]}
     */
    #array;

    /**
     * @type {SelectCallback} kivalasztas eseten futtatnank
     */
    #selectCallback

    /**
     * @type {AddCallback} hozzaadas eseten futtatnank (azert felteteles mert undefined-ok)
     */
    #addCallback

    constructor(){
        this.#array = [];
    }

    /**
     * beallitjuk az addcallback fuggveny erteket
     * @param {AddCallback} callback tartalmazza a callback implementaciojat
     */
    setAddCallback(callback){
        this.#addCallback = callback;
    }

    /**
     * beallitjuk a selectcallback erteket
     * @param {SelectCallback} callback tartalmazza a callback implementaciojat
     */
    setSelectCallback(callback){
        this.#selectCallback = callback;
    }

    /**
     * hozzaadja a diakot a tobbihez
     * @param {Student} student hozzaadando diak 
     */
    add(student){
        this.#array.push(student);
        this.#addCallback(student);
    }

    /**
     * akkor hivjuk meg ha szeretnenk modositani a details tartalmát
     * @param {Student} student kivalasztott diak 
     */
    select(student){
        this.#selectCallback(student);
    }
}