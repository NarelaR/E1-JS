
const pizzas = [
	{
		id: 1,
		nombre: 'muzzarela',
		precio: 1000,
		ingredientes: ['muzzarela'],
	},
	{
		id: 2,
		nombre: 'morrón y muzzarela',
		precio: 1500,
		ingredientes: ['morron', 'muzzarela'],
	},
	{
		
        id: 3,
		nombre: 'fugazzeta',
		precio: 1200,
		ingredientes: ['cebolla', 'muzzarela'],
	},
	{
        id: 4,
		nombre: 'capresse',
		precio: 2100,
		ingredientes: ['albahaca', 'tomate', 'aceituna negra'],
		
	},
	{
		id: 5,
		nombre: 'bacon y cheddar',
		precio: 1600,
		ingredientes: ['bacon', 'cheddar', 'muzzarela'],
	},
	{
		id: 6,
		nombre: 'rellena',
		precio: 3000,
		ingredientes: ['muzzarela rellena de queso cheddar', 'jamon', 'huevo', 'parmesano', 'salchicha'],
	},
];

// Ejercicio A

pizzas.forEach((numero) => {
	if (numero.id % 2 !== 0) console.log(`Las pizza impar es: ${numero.nombre}`);
});

// Ejercicio B

const pizzasMenorA = () => {
	if (pizzas.some((pizza) => pizza.precio < 600)) {
		return 'hay pizzas menor a 600$';
	} else {
		return 'no hay pizzas menores a 600$';
	}
};

console.log(pizzasMenorA());

// Ejercicio C

const nombrePizzas = pizzas.map((pizza) => pizza.nombre);
console.log(nombrePizzas);

// Ejercicio D

const precioPizzas = pizzas.map((pizza) => pizza.precio);
console.log(precioPizzas);

// ejercicio E

const nombreYPrecioPizzas = () => {
	pizzas.forEach((pizza) =>
		console.log(`la pizza ${pizza.nombre} sale $${pizza.precio}`)
	);
};

nombreYPrecioPizzas();