export function init() {
    const LUNGHEZZA_ARRAY: number = 20;

    let array1: number[] = creaArray();
    let array2: number[] = creaArray();
    let array3: number[] = creaArray();

//Funzione per creare gli array
    function creaArray() {
        let array: number[] = [];
        for (let i: number = 0; i < LUNGHEZZA_ARRAY; i++) {
            array[i] = Math.floor(Math.random() * 100);
        }
        return array;
    }


//Funzione bubble sort
    function ordinaBubble(array: number[]) {
        let lArr: number = array.length - 1;
        while (lArr > 0) {
            for (let i: number = 0; i < lArr; i++) {
                if (array[i] > array[i + 1]) {
                    let nTemp: number = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = nTemp;
                }
            }
            lArr--;
        }
    }

//Funzione insertion sort
    function ordinaInsert(array: number[]) {
        for (let i: number = 0; i < array.length; i++) {
            let temp: number = array[i];
            let j: number = i - 1;
            while (j >= 0 && array[j] > temp) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = temp;

        }
    }


//Funzione selection sort
    function ordinaSelect(array: number[]) {
        for (let i: number = 0; i < array.length - 1; i++) {
            let minimo: number = i;
            for (let j: number = i; j < array.length; j++) {
                if (array[j] < array[minimo]) {
                    minimo = j;
                }
            }

            if (minimo !== i) {
                let temp: number = array[i];
                array[i] = array[minimo];
                array[minimo] = temp;
            }
        }
    }


    /* -----------------------------------------------------------------------------------  OTHER  ----------------------------------------------------------------------------------- */

//Funzione per formattare un array
    function formattato(array: number[]) {
        let nuovoArray: string = "";
        for (let i: number = 0; i < array.length; i++) {
            if (i === array.length - 1) {
                nuovoArray += array[i];
            } else {
                nuovoArray += array[i] + ", ";
            }
            if (i % 10 === 0 && i !== 0) {
                nuovoArray += "\n";
            }
        }
        return nuovoArray;
    }

//Funzione per inserire gli array nell'html
    function htmlArray(array1: number[], array2: number[], array3: number[]) {
        let div = document.getElementById("array") as HTMLDivElement;
        let a1 = document.createElement("h3") as HTMLHeadingElement;
        let a2 = document.createElement("h3") as HTMLHeadingElement;
        let a3 = document.createElement("h3") as HTMLHeadingElement;

        a1.innerText = 'Array 1 (Bubble Sort):\n' + formattato(array1);
        a2.innerText = 'Array 2 (Insertion Sort):\n' + formattato(array2);
        a3.innerText = 'Array 3 (Selection Sort):\n' + formattato(array3);

        div.appendChild(a1);
        div.appendChild(a2);
        div.appendChild(a3);
    }

    /* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//Chiamo le funzioni
    ordinaBubble(array1)
    ordinaInsert(array2);
    ordinaSelect(array3);
    htmlArray(array1, array2, array3);

}