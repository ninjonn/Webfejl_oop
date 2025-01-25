class ArrayList {
    /**
     * @type {Number}
     */
    #length
    #inner

    get Count() {
        return this.#length
    };
    #htmlArray

    constructor(array = undefined) {
        this.#length = 0;
        this.#inner = {};
        this.#htmlArray = array;
    };

    Add(item) {
        const index = this.#length; //elkérjük és eltároljuk az aktuális hosszát
        this.#inner[index] = item; // beállítjuk az index tulajdonságnak a bemeneti paramétert 
        Object.defineProperty(this, index, {
            get: () => { return this.#inner[index] },
            configurable: true,
            enumerable: true,

            set: (value) => { this.#inner[index] = value },
            writable: true
        }
        );
        if (this.#htmlArray) {
            this.#htmlArray.addRow(item);
        }
        this.#length++;
    };

    Clear() {
        for (const i in this) {
            delete this[i];
        }
        this.#length = 0;//lenullázzuk a hosszt
        this.#inner = {};//objektumot kiürítjük
    };

    Constains(value){
        for(let key in this.#inner){
            if(this.#inner[key] === value){
                return true;
            }
        }
        return false;
    }
}

const csirke = {};
csirke.a = 'def';
csirke[0] = 'asd';
csirke['nev'] = 'Ferenc'
console.log(csirke)


const alma = {}
Object.defineProperty(alma, 'nev', {
    value: 'Ferenc',
    writable: true
})
alma.nev = 'asd';
console.log(alma)

//1. objektum -> objektum aminek a tulajdonságát megadjuk
//2.string -> kulcs
//3.descriptor -> { }
