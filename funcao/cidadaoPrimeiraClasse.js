// Funcão em JS é First-Class Object ( Citizens )
// Higher order function

// criar de forma literal
function func1()
{
}

// armazenar em uma constante
const func2 =  function () { }

// armazenar em um array
const array = [function (a, b) { return a + b }, func1, func2]
console.log(array[0](2,3))


// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar funcao como parametro para outra funcao
function run(fun) 
{
    fun()
}

run(function () { console.log('Executando aguarde.......')})
