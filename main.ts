const json = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

json.then((response) => {
	return response.json();
}).then((jsonData) => {
	console.log(jsonData);
});

