# node.js
Repozitář pro domácí úkoly na předmět 4IT573 Základy node.js

## První úkol - Number guessser
První úkol je jednoduchá html stránka s dvěmi inputy a tlačítkem.
Do inputů uživatel napíše 2 čísla, která odpovídají počtu pokusů a rozptylem hádaného čísla.
Po stisknutí tlačítka .js vygeneruje random číslo a uživatel pomocí funkce "prompt" číslo hádá.
Po úspěšném uhodnutí se zobrazí win page, ale pokud dojdou uživateli pokusy tak prohrává.
Samozřejmě si hru může zkusit znovu.

## Druhý úkol - Instrukce pro kopírování souborů
Po spuštění programu se obsah zdrojového souboru `vstup.txt` zkopíruje do cílového souboru podle instrukcí v souboru `instrukce.txt`.

## Třetí úkol - Vytváření souborů
Program nejprve přečte obsah souboru "instrukce.txt", ve kterém bude číslo (například 10). Následně program vytvoří n souborů (kde n se rovná číslu ze souboru instrukce.txt) s názvy 0.txt, 1.txt, 2.txt až n.txt a obsahem "Soubor 0", "Soubor 1", "Soubor 2" až "Soubor n". Poté co budou všechny soubory úspěšně vytvořeny, vypíše program informativní hlášku do konzole a skončí. Základní program za 2 body bude může být sériový. Pokročilejší program za 3 body musí využít paralelizaci pomocí Promise.all.

## Upozornění
- Ujistěte se, že soubor `instrukce.txt` nebo `vstup.txt` existují v adresáři projektu. Pokud neexistují, program o tom informuje uživatele.
- Pokud cílový soubor neexistuje, program ho nejprve vytvoří a poté do něj nakopíruje data.


