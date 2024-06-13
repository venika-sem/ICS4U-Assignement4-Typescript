/*This program uses recursion to apply a Tetranacci sequence .
* * By Venika Sem
* * @version 1.0
* * @since Feb-2024
* */

import { createPrompt } from 'bun-promptx';

async function tetranacci(integer: number): Promise<number> {
    if (integer === 0 || integer === 1 || integer === 2) { // base case
        return 0;
    } else if (integer === 3) { //base case
        return 1;
    } else {
        // Create an array of promises to calculate previous Tetranacci numbers
        return (
            await Promise.all([
                tetranacci(integer - 1),
                tetranacci(integer - 2),
                tetranacci(integer - 3),
                tetranacci(integer - 4)
            ])
        ).reduce((acc, val) => acc + val, 0);
    }
}

async function printTetranacciSequence() {
    const count = await prompt('Enter the number of Tetranacci numbers to print: ');
    for (let sequenceNumber = 0; sequenceNumber < count; sequenceNumber++) {
        console.log(`Tetranacci(${sequenceNumber}) = ${await tetranacci(sequenceNumber)}`);
    }
}

printTetranacciSequence().catch(err => console.error(err));

