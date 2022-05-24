
class Instrumento{
    constructor(id,nombre,marca,precio)
    {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca
        this.precio = precio;
    }


    
    calcularValorDolares()
    {
        return this.precio / 45;
    }
    calcularDescuento()
    {
        return this.precio * 0.80;
    }
   
}
class Vendedores
{
    constructor(id,nombre,apellido,salario)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.salario = salario;
    }
    datosVendedores(){
    return this.id + " " + this.nombre + " " + this.apellido + " " + this.salario;           

    }
    sueldoMayorVendedor()
    {
        if(this.salario >= 20000)
        {
            return this.nombre + " " + this.apellido + " " + this.salario;
        }
        else{
            console.log('No es el mayor')
        }
    }
}
//Array utilizado para los instrumentos.
const instrumentOne = new Instrumento(1,'guitar','fender','saxophone',1344)
const  instrumentTwo = new Instrumento(2,'bat','les paul','drums',3434)
let instrumentThree = new Instrumento (3,'jeoa ','Gibson','drums',334434)

let generalInstruments = [instrumentOne,instrumentTwo,instrumentThree]
console.log('Inicia',generalInstruments)

function mostrarMenu()
{
    let option=0;

    while(option!==6)
    {
        option = Number(prompt(`Select an action:
                                1- Add Instrument
                                2- FindInstrument
                                3- Update Instrument
                                4-Delete Instrument
                                5- List Instrument
                                6- Exit
                                `))
    
    switch(option)
    {
        case 1:
            {
                addInstrument() 
                break;

            }
            case 2:
              {
             findInstrument()
                break;
             
            }
            case 3:
                {
                updateInstrument()
                break;
                }
            case 4:
                {
                deleteInstrument()
                break;
                }       
            case 5:
                {
                listInstrument()
            break;
                }
    
    default:{
        alert("saliendo")}
    break;
   }
}
}
mostrarMenu()

function addInstrument()
{
    let id = 1;
    if(generalInstruments.length>0)
    {
        id=generalInstruments[generalInstruments.length-1].id + 1;
    }

    let nombre = prompt('ingrese nombre')
    let marca = prompt('ingrese marca')
    let tipo = prompt('ingrese tipo ')
    let precio = Number(prompt("ingrese precio"))

    let instrumento = new Instrumento(nombre,marca,tipo,precio)

    generalInstruments.push(instrumento)
}
function deleteInstrument()
{
    let id = Number(prompt("Ingrese id del instrumento a eliminar"))
    let found = generalInstruments.find((instrumento)=>instrumento.id==id)

    if(!found)
    {
        console.log("Instrumento no encontrado")
    }
    else{
        let index = generalInstruments.indexOf(found);

        generalInstruments.splice(index,1)

        console.log('delete user')
        console.log(generalInstruments);
    }

}
function updateInstrument()
{
    let id = Number(prompt("ingrese instrumento a modificar"))

    let exists = generalInstruments.some((instrumento)=>instrumento.id === id)

    if(exists)
    {
    
        let found = generalInstruments.find((instrumento)=>instrumento.id == id)
        let newName =prompt("ingrese nuevo nombre");
        let newMarc = prompt("ingrese nueva marca");
        let newPrice = Number(prompt("ingrese nuevo precio"))
        
        found.nombre = newName;
        found.precio = newPrice;
        found.marca = newMarc;

        console.log('Modificacion')
        console.log(generalInstruments)
        
    }
    else{
        console.log('instrument doesnt exists')
    }
}
function findInstrument()
{
    let nombre = prompt("ingrese nombre del instrumento a buscar")

    let found = generalInstruments.filter((instrumento)=> instrumento.nombre.toLowerCase().indexOf(nombre.toLowerCase())!== -1)

    console.log("Buscar instrumento",found)

}      
 function listInstrument()
 {
     console.log('Listar Usuarios')
     generalInstruments.forEach((instrumento)=>{

        console.log(instrumento.id + "" + instrumento.nombre + "" + instrumento.marca + " " + instrumento.tipo + " " + instrumento.precio)
     })
 }
function sumaInstrumentosGanados()
{
let suma = 0;
 let dineroGanadoMes =[1000,233,444,555,6666,7777]

 for(let i=0; i<dineroGanadoMes.length; i++)
 {
   suma += dineroGanadoMes[i];
 }
 console.log("" + suma);

} 