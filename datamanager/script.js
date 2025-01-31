/**
 * @typedef {{nev:String,eletkor:Number}} Person
 * @callback UpdateCallback
 * @param {Person[]} person
 * @returns {void}
 */
class DataManager{
    /**
     * @type {Person[]}
     */
    #array
    /**
     * @type {UpdateCallback}
     */
    #updateCallback
    /**
     * 
     * @param {Person[]} sigma 
     */
    constructor(sigma = []){
        this.#array = sigma
        this.#updateCallback = () => {}
    }
    /**
     * 
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback){
        this.#updateCallback = callback
    }
    /**
     * 
     * @param {Person} chad 
     */
    add(chad){
        this.#array.push(chad)  
        this.#updateCallback(this.#array)  
    }
    /**
     * 
     * @param {String} sigmaName 
     */
    filterName(sigmaName){
        const result = [];
        for(const elem of this.#array){
            if(elem.nev === sigmaName){
                result.push(elem)
            }
        }
        this.#updateCallback(result)
    }
    /**
     * 
     * @param {Number} sigmaAge 
     */
    filterAge(sigmaAge){
        const result = [];
        for(const elem of this.#array){
            if(elem.eletkor === sigmaAge){
                result.push(elem)
            }
        }
        this.#updateCallback(result)
    }
}


class Datatable{
    /**
     * 
     * @param {DataManager} alpha 
     */
    constructor(alpha){
        const table = document.createElement('table')
        document.body.appendChild(table)
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        alpha.setUpdateCallback((persons) => {
            tbody = ''
            for(const elem of persons){
                const trow = document.createElement('tr')
                tbody.appendChild(trow)

                const cella1 = document.createElement('td')
                cella1.innerHTML = elem.nev
                trow.appendChild(cella1)

                const cella2 = document.createElement('td')
                cella2.innerHTML = elem.eletkor
                trow.appendChild(cella2)
            }
        }) 
    }
}