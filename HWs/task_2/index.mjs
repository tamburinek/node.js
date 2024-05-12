import fs from 'fs';

// Funkce pro asynchronní čtení obsahu souboru
const readFileAsync = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Funkce pro asynchronní zápis do souboru
const writeFileAsync = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// Hlavní funkce pro kopírování obsahu ze zdrojového souboru do cílového souboru
const copyFileContent = async (sourceFile, targetFile) => {
  try {
    // Čtení obsahu zdrojového souboru
    const content = await readFileAsync(sourceFile);
    // Zápis obsahu do cílového souboru
    await writeFileAsync(targetFile, content);
    console.log(`Obsah z "${sourceFile}" byl úspěšně zkopírován do "${targetFile}".`);
  } catch (error) {
    console.error('Nastala chyba při kopírování souboru:', error);
  }
};

// Funkce pro čtení instrukcí ze souboru
const readInstructions = async (instructionFile) => {
  try {
    const data = await readFileAsync(instructionFile);
    const [sourceFile, targetFile] = data.trim().split(' ');
    // Kontrola existence zdrojového souboru
    fs.access(sourceFile, fs.constants.F_OK, async (err) => {
      if (err) {
        console.error(`Zdrojový soubor "${sourceFile}" neexistuje.`);
        return;
      }
      // Pokud cílový soubor neexistuje, vytvoří se
      if (!fs.existsSync(targetFile)) {
        fs.writeFileSync(targetFile, '');
      }
      // Kopírování obsahu ze zdrojového souboru do cílového souboru
      await copyFileContent(sourceFile, targetFile);
    });
  } catch (error) {
    console.error('Nastala chyba při čtení instrukcí:', error);
  }
};

// Spuštění programu
const instructionFile = 'instrukce.txt';
readInstructions(instructionFile);
