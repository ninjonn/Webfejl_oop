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
        this.#updateCallback(this.#array)
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

    filter(callback){
        const result = [];
        for(const elem of this.#array){
            if(callback(elem)){
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
            tbody.innerHTML = ''
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

const dataManager = new DataManager([{nev: 'Feri', eletkor:17},{nev:'Teri',eletkor:18},{nev:'Rebi',eletkor:17}])
const dataTable = new Datatable(dataManager)

const input = document.createElement('input')
input.type = "file"
document.body.appendChild(input)

input.addEventListener('change',(e)=>{
    const file = e.currentTarget.files[0]
    const freader = new FileReader
    freader.readAsText(file)
    freader.onload=()=>{
        const content = freader.result
        const contentRows = content.split('\n')
        for(const row of contentRows){
            const split = row.split(';')
            const pers = {nev:split[0],eletkor:Number(split[1])}
            dataManager.add(pers)
        }
    }
})