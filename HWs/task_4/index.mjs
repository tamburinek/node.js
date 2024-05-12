import http from 'http';
import fs from 'fs';

// Funkce pro kontrolu a vytvoření souboru counter.txt s počáteční hodnotou 0, pokud neexistuje
function ensureCounterFileExists(callback) {
    fs.access('counter.txt', fs.constants.F_OK, (err) => {
        if (err && err.code === 'ENOENT') {
            fs.writeFile('counter.txt', '0', (err) => {
                if (err) throw err;
                console.log('Soubor counter.txt vytvořen s počáteční hodnotou 0.');
                callback();
            });
        } else {
            callback(err);
        }
    });
}

// Funkce pro zpracování HTTP požadavků
function handleRequest(req, res) {
    const url = req.url;

    // Funkce pro aktualizaci čísla v souboru counter.txt
    function updateCounter(action, callback) {
        ensureCounterFileExists((err) => {
            if (err) {
                callback(err);
            } else {
                fs.readFile('counter.txt', 'utf8', (err, data) => {
                    if (err) {
                        callback(err);
                    } else {
                        let number = parseInt(data);
                        if (action === 'increase') {
                            number++;
                        } else if (action === 'decrease') {
                            number--;
                        }
                        fs.writeFile('counter.txt', number.toString(), (err) => {
                            if (err) throw err;
                            console.log(`Číslo aktualizováno v souboru counter.txt: ${number}`);
                            callback(null, number);
                        });
                    }
                });
            }
        });
    }

    if (url === '/increase' || url === '/decrease') {
        updateCounter(url.substr(1), (err, number) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('OK');
            }
        });
    } else if (url === '/read') {
        // Při provolání /read vytvoří soubor counter.txt s hodnotou 0, pokud neexistuje
        ensureCounterFileExists((err) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                fs.readFile('counter.txt', 'utf8', (err, data) => {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            res.writeHead(404, {'Content-Type': 'text/plain'});
                            res.end('File Not Found');
                        } else {
                            res.writeHead(500, {'Content-Type': 'text/plain'});
                            res.end('Internal Server Error');
                        }
                    } else {
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.end(data);
                    }
                });
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
}

// Vytvoření HTTP serveru
const server = http.createServer(handleRequest);

// Nastavení portu
const port = 3000;

// Spuštění serveru
server.listen(port, () => {
    console.log(`Server běží na adrese http://localhost:${port}/`);
});
