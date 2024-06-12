/*This program uses recursion to apply a Tetranacci sequence .
* * By Venika Sem
* * @version 1.0
* * @since Feb-2024
* */

import { createPrompt } from 'bun-promptx';

async function tetranacci(n: number): Promise<number> {
    if (n === 0 || n === 1 || n === 2) {
        return 0;
    } else if (n === 3) {
        return 1;
    } else {
        return (
            await Promise.all([
                tetranacci(n - 1),
                tetranacci(n - 2),
                tetranacci(n - 3),
                tetranacci(n - 4)
            ])
        ).reduce((acc, val) => acc + val, 0);
    }
}

async function printTetranacciSequence() {
    const count = await prompt('Enter the number of Tetranacci numbers to print: ');
    for (let i = 0; i < count; i++) {
        console.log(`Tetranacci(${i}) = ${await tetranacci(i)}`);
    }
}

printTetranacciSequence().catch(err => console.error(err));
