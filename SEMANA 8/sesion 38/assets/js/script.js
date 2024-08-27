/*
//Arrays o arreglos 
let nums = [1, 2, 3, 4, 5];

//Mostrar el arreglo
console.log(nums);

//tamaño del arreglo
console.log("Tamalo del arreglo");
console.log(nums.length);

// Aceder a los elementos (indexar)
console.log("Primer elemento");
console.log(nums[0]);

console.log(num[1]);
console.log(num[2]);
console.log(num[3]);

console.log("Último elemento");
console.log(num[4]);
comsole.log(nums[nums.length - 1]);
*/

/*
//Iterar un array
let numsImpares = [1, 3, 5, 7, 9];

console.log("Recorrer el array por indices");
//Bucle para iterrar un array
for (let i = 0; i < numsImpares.length; i++) {
    console.log(numsImpares[i]);
}

console.log("");

console.log("Recorrer el array al revés");
// Bucle para iterar un array
for (let i = numsImpares.length - 1; i >= 0; i--) {
    console.log(numsImpares[i]);
}

console.log("");

console.log("Recorrer el array por elementos");
for (let num of numsImpares) {
    console.log(num);
}
*/
/*
let nums = [];
console.log(nums);

//Agregar elementos al array vacío 
nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;

console.log(nums);

nums[2] = 8693;
console.log(nums);
*/

/*
//Arreglos multidimencionales 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(nums);
console.log(nums.length);
console.log("");

console.log(matriz);
console.log(matriz.length);
console.log("");

console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

console.log(matriz[0][0]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][1]);
*/

// Métodos de arrays
let nums = [1, 2, 3, 4, 5];
console.log(nums);

// array.push(e) Añade el elemento e al finao del array
nums.push(6);
nums.push(7);
nums.push("HOLAAAA");
console.log(nums);

//array.pop() Elimina el último elemento del array y lo retorna
let elementoEliminado = nums.pop();
console.log(nums);
// Mostrar el elemento eliminado que guardamos
console.log(elementoEliminado);
// Eliminamis otros dos elementos 
nums.pop();
nums.pop();
console.log(nums);
