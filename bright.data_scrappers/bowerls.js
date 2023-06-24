//stage 1

// Interaction code

navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');


let links = parse().playersLinks;
for(let i of links) { 
  next_stage({url: i}) 
}

// Parser Code

let links = []
const allRows = $('table.engineTable > tbody > tr.data1');
 	allRows.each((index, element) => {
  	const tds = $(element).find('td');
  	const rowURL = "https://www.espncricinfo.com" +$(tds[6]).find('a').attr('href');
  	links.push(rowURL);
 })
return {
  'playersLinks': links
};

// stage 2

// Interaction code

navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');


let links = parse().playersLinks;
for(let i of links) { 
  next_stage({url: i}) 
}

// Parser Code

let links = []
const allRows = $('table.engineTable > tbody > tr.data1');
 	allRows.each((index, element) => {
  	const tds = $(element).find('td');
  	const rowURL = "https://www.espncricinfo.com" +$(tds[6]).find('a').attr('href');
  	links.push(rowURL);
 })
return {
  'playersLinks': links
};