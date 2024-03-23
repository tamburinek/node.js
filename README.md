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

## Čtvrtý úkol - Zpracování HTTP požadavků
Tento úkol se zabývá vytvořením serveru v Node.js, který zpracovává HTTP požadavky ze strany prohlížeče. Server bude reagovat na tři různé typy požadavků: zvýšení, snížení a čtení čísla uloženého v souboru counter.txt. Při zavolání přes cestu /increase a /decrease server zvýší nebo sníží o jedničku hodnotu čísla uloženého v souboru counter.txt. Pokud soubor neexistuje, server ho vytvoří a nastaví hodnotu na 0. Při zavolání serveru přes cestu /read server vrátí prohlížeči číslo uložené v souboru counter.txt.

## Pátý úkol - Detail todočka
Tato stránka se bude nacházet pod URL /todo/:id a na stránce bude vidět titulek todočka a zda je hotové či ne. Dále zde budou odkazy na změnu stavu todočka, odstránění todočka a formulář na změnu titulku todočka. Na tuto stránku se dostanete kliknutím na titulek todočka na hlavní stránce se seznamem všech todoček.

## Šestý úkol - Přidání priority k úkolům

V tomto úkolu jsem přidal úroveň priority ke každému úkolu. Priorita mohla být 'NÍZKÁ', 'STŘEDNÍ' nebo 'VYSOKÁ'. 

## Kroky, které jsem provedl:

1. Aktualizoval jsem schéma databáze, aby zahrnovalo nový sloupec pro prioritu. Použil jsem metodu `enu` v Knexu k vytvoření sloupce s výčtovými hodnotami.

2. Aktualizoval jsem formulář v `index.ejs`, aby zahrnoval rozevírací seznam pro prioritu. Seznam má tři možnosti: 'NÍZKÁ', 'STŘEDNÍ' a 'VYSOKÁ'.

3. Aktualizoval jsem serverový kód, aby zvládal novou hodnotu priority, když byl úkol vytvořen nebo aktualizován.

4. Aktualizoval jsem stránku úkolu v `todo.ejs`, aby zobrazovala prioritu úkolu. Použil jsem různé barvy k reprezentaci různých úrovní priority.


## Upozornění
- Ujistěte se, že soubor `instrukce.txt` nebo `vstup.txt` existují v adresáři projektu. Pokud neexistují, program o tom informuje uživatele.
- Pokud cílový soubor neexistuje, program ho nejprve vytvoří a poté do něj nakopíruje data.


