class Area{
    /**
     * @type {HTMLDivElement} ez a container az elemeknek
     */
    #div

    /**
     * @return {HTMLDivElement} visszatér az adott containerrel
     */
    get div(){
        return this.#div;
    }

    /**
     * 
     * @param {string} className a css osztalyat tartalmazza az adott teruletnek
     */
    constructor(className){
        const container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = className;
        container.appendChild(this.#div);
    }

    /**
     * a container calssasl rendelkezo elembe tesszuk bele az alkalmazas egyes reszeit
     * Elso korben megnezzuk letezik-e a container oszallyal rendelkezo div
     * Ha nem letezik, letrehozunk egyet
     * @returns {HTMLDivElement} visszater a container classal rendelkezo elemmel
     */
    #getContainer(){
        let container = document.querySelector('.container'); // lekerjuk a container classal rendelkezo elemet
        if(!container){ // ha nem letezik
            container = document.createElement('div'); // letrehozzuk
            container.className = 'container'; // FONTOS, ha ujra meghivjuk, akkor ne hozzon letre
            document.body.appendChild(container); 
        }
        return container;
    }
}

/**
 * Letrehoz egy detais teruletet a megadott css osztallyal
 */
class DetailsArea extends Area{

    /**
     * 
     * @param {string} className a css osztaly 
     */
    constructor(className){
        super(className);
    }
}

/**
 * ez fogja tartalmazni a diakok listajat
 */
class StudentArea extends Area{
    
    /**
     * 
     * @param {string} className a css osztaly 
     */
    constructor(className){
        super(className);
    }
}