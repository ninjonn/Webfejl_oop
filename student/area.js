class Area {
    /**
     * @type {HTMLDivElement} ez a container az elemeknek
     */
    #div

    /**
     * @return {HTMLDivElement} visszatér az adott containerrel
     */
    get div() {
        return this.#div;
    }

    /**
     * 
     * @param {string} className a css osztalyat tartalmazza az adott teruletnek
     */
    constructor(className) {
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
    #getContainer() {
        let container = document.querySelector('.container'); // lekerjuk a container classal rendelkezo elemet
        if (!container) { // ha nem letezik
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
class DetailsArea extends Area {

    /**
     * @param {Manager}
     * @param {string} className a css osztaly 
     */
    constructor(className,manager) {
        super(className);
        manager.setSelectCallback((student) => {
            this.div.innerHTML = '';
            const detailsContainer = document.createElement('div');
            detailsContainer.innerHTML = student.comment;
            this.div.appendChild(detailsContainer);
        })
    }
}

/**
 * ez fogja tartalmazni a diakok listajat
 */
class StudentArea extends Area {

    /**
     * @param {Manager} manager manager peldany
     * @param {string} className a css osztaly 
    */
    constructor(className, manager) {
        super(className);
        manager.setAddCallback((student) => {
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';

            const nameSpan = document.createElement('span');
            nameSpan.textContent = student.name;
            nameSpan.style.color = student.bad ? 'red' : 'black';
            studentCard.appendChild(nameSpan);

            studentCard.appendChild(document.createElement('br'));

            const averageSpan = document.createElement('span');
            averageSpan.textContent = student.average;
            studentCard.appendChild(averageSpan);
            this.div.appendChild(studentCard);
            studentCard.addEventListener('click', (e) => {
                const cardList = document.querySelectorAll('.student-card');
                for (const card of cardList) { // vegigiteralunk a student cardokon
                    card.className = 'student-card' // mivel a selectednel a student card mellet lesz egy selected css class, ezert az osszesnek megadjuk az eredeti classt, a selectedes torlodik
                }
                e.currentTarget.classList.add('selected');
                manager.select(student);
            })
        })
    }
}