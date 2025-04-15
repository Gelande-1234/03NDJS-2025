const cheerio = require('cheerio');
const fs = require('fs');

// Lire le fichier HTML localement (exemple : 'page.html')
fs.readFile('page.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Charger le contenu HTML dans Cheerio
  const $ = cheerio.load(data);
  let tableau = [];

  // Extraire les lignes du tableau
  $('table tbody tr').each((index, element) => {
    let pays = {};
    pays.nom = $(element).find('td').eq(0).text().trim();
    pays.capitale = $(element).find('td').eq(1).text().trim();
    pays.population = $(element).find('td').eq(2).text().trim();
    pays.superficie = $(element).find('td').eq(3).text().trim();
    pays.pib = $(element).find('td').eq(4).text().trim();
    pays.esperance_vie = $(element).find('td').eq(5).text().trim();

    tableau.push(pays);
  });

  console.log(tableau);
});
