import { readFile, writeFile } from 'fs/promises';

async function createFiles() {
    try {
        const data = await readFile('instrukce.txt', 'utf-8');
        const n = parseInt(data);

        const promises = [];
        for (let i = 0; i < n; i++) {
            promises.push(writeFile(`${i}.txt`, `Soubor ${i}`));
        }

        await Promise.all(promises);

        console.log('Všechny soubory byly úspěšně vytvořené.');
    } catch (error) {
        console.error('Hele vyskočil mi error: ', error);
    }
}

createFiles();