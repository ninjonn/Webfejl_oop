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
        for (const key in this.#inner) {
            delete this.#inner[key];
        }
        this.#length = 0;//lenullázzuk a hosszt
    };

    Contains(value){
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



class ArrayHTMLTable extends HTMLElement{ // Az ArrayHTMLTable osztály definiálása, amely a HTMLElement-ből származik
    #tbody; // Privát mező a táblázat törzsének tárolására

    constructor(){
        super(); // Az ősosztály (HTMLElement) konstruktorának hívása
        this.table = document.createElement('table'); // Új table elem létrehozása
        this.thead = document.createElement('thead'); // Új thead elem létrehozása
        this.#tbody = document.createElement('tbody'); // Új thead elem létrehozása
    }

    connectedCallback(){ // A connectedCallback metódus felülírása, amely akkor fut le, amikor az elem bekerül a DOM-ba
        const headerRow = document.createElement('tr'); // Új sor tr létrehozása a fejléc számára
        const nameHeader = document.createElement('th'); // Új fejléc cella th létrehozása a "Név" oszlophoz
        nameHeader.textContent = 'Név'; // A fejléc cella szövegének beállítása
        const ageHeader = document.createElement('th'); // Új fejléc cella th létrehozása az "Életkor" oszlophoz
        ageHeader.textContent = 'Életkor'; // A fejléc cella szövegének beállítása

        headerRow.appendChild(nameHeader); // A "Név" fejléc cella hozzáadása a fejléc sorhoz   
        headerRow.appendChild(ageHeader); // Az "Életkor" fejléc cella hozzáadása a fejléc sorhoz
        this.thead.appendChild(headerRow); // A fejléc sor hozzáadása a theadhez

        this.table.appendChild(this.thead); // A thead hozzáadása a táblázathoz
        this.table.appendChild(this.#tbody); // A tbody hozzáadása a táblázathoz
        this.appendChild(this.table); // A táblázat hozzáadása az egyedi elemhez
    }

    /**
      * Új személy sor hozzáadása a táblázathoz
     * @param {{nev:String, eletkor:Number}}
     */
    addPersonRow(person){
        const row = document.createElement('tr'); // Új sor tr létrehozása
        const nameCell = document.createElement('td'); // Új cella td létrehozása a névhez
        nameCell.textContent = person.nev; // A név cella szövegének beállítása
        const ageCell = document.createElement('td'); // Új cella td létrehozása az életkorhoz
        ageCell.textContent = person.eletkor; // Az életkor cella szövegének beállítása

        row.appendChild(nameCell); // A név cella hozzáadása a sorhoz
        row.appendChild(ageCell); // Az életkor cella hozzáadása a sorhoz
        this.#tbody.appendChild(row); // A sor hozzáadása a táblázat törzséhez
    }
}

customElements.define('array-html-table', ArrayHTMLTable); // Az egyedi elem regisztrálása a 'array-html-table' névvel

class ArrayList{ // Az ArrayList osztály definiálása
    constructor(arrayHTMLTable = null){
        this.items = []; // Az elemek tárolására szolgáló tömb
        this.arrayHTMLTable = arrayHTMLTable; // Az opcionális ArrayHTMLTable példány tárolása
    }

    add(item){ // Új elem hozzáadása a listához
        this.items.push(item); // Az elem hozzáadása a tömbhöz
        if(this.arrayHTMLTable){ // Ha van társított ArrayHTMLTable példány
            this.arrayHTMLTable.addPersonRow(item); // Az elem hozzáadása a táblázathoz
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { // Az oldal betöltődése után fut le
    const arrayHTMLTable = document.querySelector('array-html-table'); // Az egyedi elem kiválasztása a DOM-ból
    const arrayList = new ArrayList(arrayHTMLTable); // Új ArrayList példány létrehozása és az egyedi elem átadása

    document.getElementById('addPersonBtn').addEventListener('click',() => { // Eseménykezelő hozzáadása az 'addPersonBtn' gombhoz
        const newPerson = {nev:'Klári', eletkor: Math.floor(Math.random() * 100)}; // Új személy objektum létrehozása véletlenszerű életkorral
        arrayList.add(newPerson); // Az új személy hozzáadása a listához és a táblázathoz
    })
})