/**
 * A student entitásokat kezelei a managerunk, peldaul amikor selectalunk vagy hozzaadunk egy studentot
 */
class Student{

    /**
     * @type {Number}
     */
    #average;

    /**
     * @type {string}
     */
    #name;

    /**
     * @type {string}
     */
    #comment;

    /**
     * @type {boolean}
     */
    #bad;

    /**
     * @returns {Number} visszater az atlaggal
     */
    get average(){
        return this.#average;
    }

    /**
     * @returns {string} visszater a diakrol alkotott velemennyel
     */
    get comment(){
        return this.#comment;
    }

    /**
     * @returns {boolean} igazzal ter vissza ha a diak lebukik
     */
    get bad(){
        return this.#bad;
    }

    /**
     * @returns {string} a diak neve
     */
    get name(){
        return this.#name;
    }

    /**
     * 
     * @param {string} name diak neve 
     * @param {Number} average diak atlage 
     * @param {string} comment diakrol alkotott velemeny 
     * @param {boolean?} bad diak rossz-e 
     */
    constructor(name,average,comment,bad){
        this.#name = name;
        this.#average = average;
        this.#comment = comment;
        this.#bad = bad;
    }
}