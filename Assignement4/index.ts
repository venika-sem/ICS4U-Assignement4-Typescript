/*This program uses recursion to apply a Tetranacci sequence .
* * By Venika Sem
* * @version 1.0
* * @since Feb-2024
* */


import { createPrompt } from 'bun-promptx';

// Recursive function to generate Tetranacci sequence
function tetranacci(n: number, sequence: number[] = []): number[] {
    if (n <= 0) {
        return sequence;
    }
    const length = sequence.length;
    if (length === 0 || length === 1 || length === 2) {
        sequence.push(0);
    } else if (length === 3) {
        sequence.push(1);
    } else {
        sequence.push(sequence[length - 1] + sequence[length - 2] + sequence[length - 3] + sequence[length - 4]);
    }
    return tetranacci(n - 1, sequence);
}

// Create prompt for user input
const prompt = createPrompt();

// Function to start the program
async function start() {
    const input = await prompt.input('Enter the number of Tetranacci terms to generate: ');
    const numberOfTerms = parseInt(input, 10);

    if (isNaN(numberOfTerms) || numberOfTerms <= 0) {
        console.log('Please enter a valid positive number.');
        return;
    }

    const tetranacciSequence = tetranacci(numberOfTerms);
    console.log(`Tetranacci sequence of ${numberOfTerms} terms: ${tetranacciSequence.join(', ')}`);
}

// Start the program
start();
