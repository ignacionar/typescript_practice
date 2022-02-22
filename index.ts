function hola(name:any) {
  let nombre = name;
  console.log(nombre)
}

let myString: string;

myString = 'xd';

let obj = {
  prop: 'hola',
  prop2: 123,
}

let array: (string | number | (() => void) | boolean)[] = ['asd', 123, () => {}, false];

array.push("XD")

function printNumbers(array: number[]): void {
  array.forEach((e) => {
    console.log(e);
    
  })
}

printNumbers([123])

function doble(num: number): number {
  return num * 2;
}

function printObj(obj: User) {
  if (obj.age) {
    console.log(obj.age);    
  }
}

interface Admin {
  name: string,
  age?: number,
  editMode: boolean
}

interface CommonUser {
  name: string,
  age?: number,
}

type User = Admin | CommonUser 

let nacho: Admin = {
  name: "Nacho",
  age: 17,
  editMode: true
}

printObj(nacho);

interface Movil {
  avanzar(): string;
}

interface Auto {
  chasis: string;
  motor: string;
  avanzar(): string;
}

let auto1: Auto = {
  chasis: 'asdasd',
  motor: 'faopfk',
  avanzar: () => {
    return 'Auto avanza xDXd'
  }
}

function printMovil(movil: Movil) {
  console.log(movil.avanzar());
}

printMovil(auto1)