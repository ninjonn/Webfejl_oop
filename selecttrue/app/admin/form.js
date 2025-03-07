/**
 * Manageli és rendereli a formunkat a fieldjeink segítségével
 */
class FormController{

    /**
     * @type {Manager}
     */
    #manager;

    /**
     * @type {FormField[]}
     */
    #formFieldArray;

    /**
     * 
     * @param {Manager} manager 
     * @param {{laber:string,type:string,id:string,optional?:boolean}[]} fieldConfiguration 
     */
    constructor(manager, fieldConfiguration){
        this.#formFieldArray = [];
        this.#manager = manager;
        const form = document.createElement('form');
        document.body.appendChild(form)
        for(const field of fieldConfiguration){
            const formField = new FormField(field.id,field.label,field.type,field.optional)
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getDivElement());
        }
        const sendButton = document.createElement('button');
        sendButton.textContent = 'Elkuld';
        form.appendChild(sendButton);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(this.#validateFields()){
                const value = this.#getValueObject();
                const card = new Card(value.cardtext,value.right);
                this.#manager.add(card);
                e.target.reset();
                // validaljuk a fieldeket, megjelenitjuk errorokat, elkerjuk a fieldek ertekeit, peldanyositunk egy cardot, hozzaadjuk a managerhez
            }
            
        })
    }

    /**
     * validalja a fieldeket, es megjeleniti a hibauzenetet, ha szukseges
     * 
     * @returns {boolean} igazzal ter vissza ha minden field helyesen van kitoltve
     */
    #validateFields(){
        let valid = true;
        for(const formField of this.#formFieldArray){
            formField.error = '';
            if(!formField.optional){
                if(formField.value == ''){
                    formField.error = 'A mezo kitoltese kotelezo';
                    valid = false;
                }
            }
        }
        return valid;
    }

    /**
     * vegigmegy a formfieldeken és id-hoz rendeli az ertekeket amik az inputokba vannak
     * 
     * @returns {{cardtext: string, right:boolean}} a formfieldek ertekei
     */
    #getValueObject(){
        const result = {};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value;
        }
        return result
    }
}

/**
 * Ez fogja tartalmazni a labeleket, inputokat, errorspanokat
 * pl.: text input alatta errorspan
 */
class FormField{

    /**
     * @type {string}
     */
    #id

    /**
     * @type {string}
     */
    #type

    /**
     * @type {boolean}
     */
    #optional

    /**
     * @type {HTMLInputElement}
     */
    #inputField

    /**
     * @type {HTMLLabelElement}
     */
    #labelElement

    /**
     * @type {HTMLSpanElement}
     */
    #errorField

    get id(){
        return this.#id;
    }

    /**
     * Ha az input tipusa checkbox akkor visszatér azzal hogy be van pipálva vagy sem, ha pedig text akkor visszatér a szöveggel
     * 
     * @returns {boolean|string}
     */
    get value(){
        if(this.#type === 'checkbox'){
            return this.#inputField.checked
        }
        return this.#inputField.value
    }

    /**
     * ha opcionalis akkor igaz
     */
    get optional(){
        return this.#optional;
    }

    /**
     * beallitja az errorfield tartalmat
     */
    set error(value){
        this.#errorField.textContent = value;
    }

    /**
     * 
     * @param {string} id 
     * @param {string} lableContent 
     * @param {string} type 
     * @param {boolean?} optional 
     */
    constructor(id,lableContent,type,optional = false){
        this.#id = id;
        this.#type = type;
        this.#optional = optional;
        this.#labelElement = Gomszab.makeLabel(id,lableContent);
        this.#inputField = Gomszab.makeInput(id,type);
        this.#errorField = Gomszab.makeErrorField()
    }

    /**
     * létrehoz egy div elementet, amiben benne van az input, a label és az errorspan
     * 
     * @returns {HTMLDivElement} a div ami tartalmazza a fieldjeinket
     */
    getDivElement(){
        const div = Gomszab.makeDiv([this.#labelElement,this.#inputField,this.#errorField])
        return div;
    }
}