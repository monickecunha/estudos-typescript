// --- 4. Type Assertions (afirmações de tipo) ---
// Você diz ao TypeScript que você "sabe" o tipo de um valor. Não é uma conversão em runtime.
// Use 'as Tipo' ou '<Tipo>valor' (evitar a segunda forma com JSX/React)

let algumaCoisa: any = 'isso é uma string';
// let comprimento: number = algumaCoisa.length; // Pode ser um erro se 'algumaCoisa' não for string.
// Para dizer ao TS que você sabe que é uma string:
let comprimentoString: number = (algumaCoisa as string).length;
console.log(`Comprimento da string (assertion): ${comprimentoString}`);

// Exemplo com HTMLElement (simulando um cenário de DOM)
// Suponha que você tem um elemento input em seu HTML: <input id="meuInput" type="text">
// Em um ambiente de navegador, document.getElementById retorna HTMLElement | null.
// Para acessar propriedades específicas de input (como 'value'), precisamos de type assertion.
// O 'as HTMLInputElement' diz ao TS: "Confie em mim, este elemento é um input HTML."
// const inputElement = document.getElementById("meuInput") as HTMLInputElement;
// if (inputElement) { // Verifica se o elemento não é null antes de usar
//    console.log(inputElement.value);
// }

// --- 5. Type Guards (guardas de tipo) ---
// Permitem estreitar o tipo de uma variável dentro de um bloco condicional.

function processarValor(valor: string | number): void {
    if (typeof valor === 'string') {
        // Type Guard: dentro deste if, 'valor' é garantidamente 'string'
        console.log(`Valor é uma string: ${valor.toUpperCase()}`);
    } else {
        // Dentro deste else, 'valor' é garantidamente 'number'
        console.log(`Valor é um número: ${valor * 2}`);
    }
}

processarValor('hello world');
processarValor(123);

// Type Guard com 'instanceof' para classes
class Pato {
    nadar(): void {
        console.log('Pato nadando...');
    }
}
class Peixe {
    nadar(): void {
        console.log('Peixe nadando...');
    }
    respirarNaAgua(): void {
        console.log('Peixe respirando na água...');
    }
}

type Nadador = Pato | Peixe;

function moverNadador(nadador: Nadador): void {
    nadador.nadar();
    if (nadador instanceof Peixe) {
        // Type Guard: 'nadador' é garantidamente um Peixe aqui
        nadador.respirarNaAgua();
    }
}

moverNadador(new Pato());
moverNadador(new Peixe());

// Type Guard personalizado (User-Defined Type Guard)
interface CachorroPet {
    latir(): void;
}

interface GatoPet {
    miar(): void;
}

// Função que verifica se um objeto é do tipo CachorroPet
function isCachorro(pet: CachorroPet | GatoPet): pet is CachorroPet {
    return (pet as CachorroPet).latir !== undefined;
}

function interagirComPet(pet: CachorroPet | GatoPet): void {
    if (isCachorro(pet)) {
        pet.latir();
    } else {
        pet.miar();
    }
}

class MeuCachorro implements CachorroPet {
    latir() {
        console.log('Au au!');
    }
}
class MeuGato implements GatoPet {
    miar() {
        console.log('Miau!');
    }
}

interagirComPet(new MeuCachorro());
interagirComPet(new MeuGato());

console.log('\n--- Fim dos Exemplos de Type Assertions e Type Guards ---');
