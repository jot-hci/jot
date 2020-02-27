

const getEntryTemplate = (data, num) => {
	
	const template = `
	<a href="#" id="${num}">${data.title}</a>
	`
	return template;

}

const loadEntries = () => {
	var entries = document.querySelector(".entries");
	for (var i = 0; i < localStorage.length; i++){
		entries.innerHTML += getEntryTemplate(JSON.parse(localStorage.getItem(localStorage.key(i))), i);
	}

};