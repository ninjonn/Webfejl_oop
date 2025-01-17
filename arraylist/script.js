class ArrayList{
    /**
     * @type {Number}
     */
    #length
    #inner

    get Count(){
        this.#length
        return this.#length
    };

    constructor(){
        this.#length = 0;
        this.#inner = {};
    };

    Add(item){
        const index = this.#length; //elkérjük és eltároljuk az aktuális hosszát
        this.#inner[index] = item; // beállítjuk az index tulajdonságnak a bemeneti paramétert 
        Object.defineProperty(this,index,{
            get:function(){
                return this.#inner[index]
            },
            set:function(value){
               this.#inner[index] = value
            }
        })
        this.#length++; 
    };

    Clear(){
        this.#length = 0;//lenullázzuk a hosszt
        this.#inner = {};//objektumot kiürítjük
    };
}

const csirke = {};
csirke.a = 'def';
csirke[0] = 'asd';
csirke['nev'] = 'Ferenc'
console.log(csirke)


const alma = {}
Object.defineProperty(alma,'nev',{
    value:'Ferenc',
    writable:true
})
alma.nev = 'asd';
console.log(alma) 
    
//1. objektum -> objektum aminek a tulajdonságát megadjuk
//2.string -> kulcs
//3.descriptor -> { }


