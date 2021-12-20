

const dbResponse = { col1: 1, col2: 'abc', zip: 46282, country: 'de' };

const { zip, country } = dbResponse;

console.log ( zip, country );


let numbers: number[] = [1,2,3];
let numExt = [...numbers, 4,5, 6];
let numExt2 = [0, ...numbers, 4,5, 6];

console.log ( numExt2 );

let user: { name: string, age: number } = {
  name: "Saban",
  age: 44
}

const userClone = {...user};
const userOverwite = {...user, age: 33 };
const userExt = {...user, city: 'dorsten'}

console.log ( userExt );

/*
<button onclick="..." >label</button>

*/

class NavButton {
  constructor ( private btn: HTMLButtonElement ) {
    this.init ();
  }

  private init () {
    // let that = this;
    this.btn.addEventListener('click',  event => {
      console.log ( this.sayHello ); // instanz des Buttons
    })
  }

  sayHello () {}
}

function func1 () {
  console.log ( 'func1' );
}

let func2 = function () {
  console.log ( 'func2' );
};

func1 ();
func2 ();

let func3 = () => {
  console.log ( 'func3' );
}

func3 ();

function add ( val: number ) {
  return 1 + val ;
}

let addViaArrow = ( val: number ) => {
  return 1 + val ;
}


let addViaArrow2 = ( val: number ) =>  1 + val ;
// @ts-ignore
let addViaArrow3 = val =>  1 + val ;


console.log ( add (2) );
console.log ( addViaArrow (2) );
console.log ( addViaArrow2 (2) );
console.log ( addViaArrow3 (2) );

interface ICar {
  brand: string;
  type?: string | undefined;


  sayYourData (): void;
}
/* - ohne Methoden
let myCar: ICar = {
    brand: 'MyBrand', type: 'My Type'
}
*/
abstract class Human {
  age: number|undefined;
  name: string|undefined;

  constructor (name: string ) {
    this.name = name;
  }

  sayYourName () {
    return this.name;
  }

}

class Man extends Human {
  constructor (name: string ) {
    super ( name );
  }

  override sayYourName (): string {
    return `Ich bin ein Mann und mein Name ist ${this.name}`;
  }
}

let saban = new Man ('Saban');
// console.log ( saban.sayYourName() );

class Car implements ICar {

  static className = 'CAR';


  private _val: number|undefined;

  /*
  brand: string | undefined;

  constructor (
                  brand: string
      ) {
      this.brand = brand;
  }
  */


  constructor (
    public brand: string = 'audi',
    public type?: string
  ) {
    // console.log ( type );
  }

  set val ( value: number|undefined ) {
    this._val = value;
  }

  get val ( ): number|undefined {
    return this._val;
  }

  sayMeYourBrand ( param1: string, param2?: number,  ) {
    console.log ( this.brand );
    console.log ( param1 );
    console.log ( param2 );
    // console.log ( this.type );
    if ( param2 && param2 > 10 ) {

    }
  }

  sayHello ( msg: string, ...otherStrings: string[] ): number {
    console.log ( msg, otherStrings );
    return 123;
  }

  sayYourData () {
    console.log ( this.brand, this.type  )
  }



}

class Audi extends Car {
  constructor ( type: string ) {
    super ( 'Audi', type );
  }

  override sayYourData () {
    console.log ( `brand:= ${this.brand} and type:= ${this.type}`  );
    super.sayYourData();
  }
}

/*
let audi: Audi = new Audi ( 'A4' );
// bmw.sayMeYourBrand( 'abc' );
// bmw.sayHello ( 'a', 'b', 'c', 'd' );
audi.sayYourData();
audi.val = 123;
console.log ( audi.val );
let car = new Car ();
// car.sayMeYourBrand( 'abc', 1 );
*/


let username = 'saban';
let num: number | null;
let isTrue: boolean = true;

let date: Date = new Date();

const plz: number = 46282;
// plz = 444;

function test1 () {
  let num2 = 123;
}

for ( let i = 0; i < 10; i++ ) {
  for ( let i = 0; i < 10; i++ ) {
    // console.log ('i von innen' + i );
  }
  // console.log ('i von außen' + i );
}

// console.log ('i nicht gültig' + i );
