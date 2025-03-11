console.log("ciao", process.argv[2]);

const argv = process.argv.slice(2) //ho preso solo la posizione 2  (la pos 0 è node, la pos 1 è il percorso, e la due è il messaggio che ci abbino dopo)
console.log(argv)//esce sottoforma di array
const messaggio = argv[0] //in questo caso contiene solo un dato ed è in posizione 0
console.log("Estrazione del messaggio in posizione 0 da un array", messaggio)