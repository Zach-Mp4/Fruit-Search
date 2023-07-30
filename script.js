const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const sugList = document.getElementById('sugList');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let res;
function search(str) {
	let results = [];
	const newStr = str.toLowerCase();
	console.log()
	// TODO

	for (let f of fruit){
		if (f.toLowerCase().includes(newStr)){
			results.push(f);
		}
	}

	if (input.value === ''){
		results = [];
	}
	return results;
}

function searchHandler(e) {
	res = search(input.value);
	showSuggestions(res, input.value);
}

function showSuggestions(results) {
	// TODO
	sugList.innerHTML = '';
	for (let result of results){
		const li = document.createElement("LI");
		li.innerText = result;
		sugList.appendChild(li);
	}
}

function useSuggestion(e) {
	// TODO
	input.value = e.target.innerText;
	showSuggestions([]);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);