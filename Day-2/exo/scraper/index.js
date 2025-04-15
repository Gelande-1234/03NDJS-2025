const cheerio = require('cheerio');
const fs = require('fs');

async function scraper() {
  try {
    const $ = await cheerio.fromURL('https://www.geograf.in/fr/table.php');

    const tableau = [];

    $('table.nice.full.responsive tbody tr').each((i, el) => {
      const tds = $(el).find('td');
      tableau.push({
        nom: tds.eq(0).text().trim(),
        capitale: tds.eq(1).text().trim(),
        population: tds.eq(2).text().trim(),
        superficie: tds.eq(3).text().trim(),
        pib: tds.eq(4).text().trim(),
        esperance_vie: tds.eq(5).text().trim()
      });
    });

    
    const jsonData = JSON.stringify(tableau, null, 2);

    
    fs.writeFileSync('donnees_pays.json', jsonData, 'utf8');

    console.log('✅ Données exportées dans donnees_pays.json');
  } catch (err) {
    console.error('Erreur :', err.message);
  }
}

scraper();


