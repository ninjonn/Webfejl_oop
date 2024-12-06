
class Factory{
 // TODO 1, 2, 3, 4, 9, 10
constructor(){
    this.manoklist = [] //manoklist tulajdonság létrehozása, azért üres mert még nem tartozik hozzá tag
}

hozzaAd(companion){ //azért csak a companion kell paraméternek, mert a manoklist elérhető classon belül
    this.manoklist.push(companion)
    createRow(companion)
}


}

class Companion{
 // TODO 5
 constructor(id,kernev,veznev,reszleg){
    this.id = id
    this.kernev = kernev
    this.veznev = veznev
    this.reszleg = reszleg
    this.productlist = [] //mivel nem szükséges a példány létrehozásakor ezért nem a construktor leszármazottja
 }

 getName(){ //nem kell paraméter, mert a class tulajdonságaira hivatkozunk
    return this.kernev + this.veznev
 }

 productAdd(product){
    this.productlist.push(product)
 }
}