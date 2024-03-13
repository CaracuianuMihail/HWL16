// Creati un loop care sa numere de la 0 pina la 10 folosind for, while si do-while. //
    let counter = 0;
    let counters = 0;  
    let count = 0;
    let string_counter = 0;
    let string = "Hello World!"

    console.log("-------------------------------------------------------");
    // Folosind for //
    for(counter; counter <= 10; counter++) console.log("Se afiseaza numarul pentru For:", counter);
    console.log("-------------------------------------------------------");

    // Folosind while //
    while(counters <= 10){
        console.log("Se afiseaza numarul pentru While:", counters);
        counters++;
    } console.log("-------------------------------------------------------");

    // Folosind do-while //
    do{
    console.log("Se afiseaza numarul pentru Do-While:", count);
    count++;
    } while(count <=10);
    console.log("-------------------------------------------------------");

// Creati un for loop care sa afiseze pe rand fiecare litera dintr-un string. //
    for(string_counter; string_counter < string.length; string_counter++){
        console.log("Litera pe pozitia:", string_counter, ", separata din String:", string[string_counter]);
    } console.log("-------------------------------------------------------");

// Creati o functie care sa indeplineasca exercitiile de mai sus, folosin arrow function, function declaration si function expression. //
// La exercitiu cu numaratul, functia tebuie sa primeasca numarul pina la care este nevoie de numarat, iar la afisarea literilor trebuie sa primeasca ca argument stringul. //
    const loopFunction = (limit) => {
        console.log("Utilizând for loop:");
        for (let i = 0; i <= limit; i++) {
        console.log(i);
        }

        console.log("Utilizând while loop:");
        let j = 0;
        while (j <= limit) {
            console.log(j);
            j++;
        }

        console.log("Utilizând do while loop:");
        let k = 0;
        do {
        console.log(k);
        k++;
        } while (k <= limit);
    };

    const printCharactersFor = (str) => {
        console.log("Afisarea fiecărei litere dintr-un string folosind for loop:");
        for (let i = 0; i < str.length; i++) {
            console.log(str[i]);
        }
    };

    function loopFunctionDeclaration(limit){
        loopFunction(limit);
    }

    function printCharactersWhile(str) {
        console.log("Afisarea fiecărei litere dintr-un string folosind while loop:");
        let i = 0;
        while (i < str.length) {
            console.log(str[i]);
            i++;
        }
    }

    const loopFunctionExpression = function(limit){
        loopFunction(limit);
    }

    const printCharactersDoWhile = function(str) {
        console.log("Afisarea fiecărei litere dintr-un string folosind do while loop:");
        let i = 0;
        do {
            console.log(str[i]);
            i++;
        } while (i < str.length);
    };

    loopFunctionDeclaration(10);
    console.log("-------------------------------------------------------");
    loopFunctionExpression(5);
    console.log("-------------------------------------------------------");
    loopFunction(3);
    console.log("-------------------------------------------------------");
    printCharactersFor("Hello");
    console.log("-------------------------------------------------------");
    printCharactersWhile("World");
    console.log("-------------------------------------------------------");
    printCharactersDoWhile("Today!");
    console.log("-------------------------------------------------------");