/* loading entries into journal hub */

const getEntryTemplate = (data, num) => {
	
	const template = `
	<a onclick="previewEntry(event)" id="entry-${num}">${data.title}</a>
	`
	return template;

}


const loadEntries = () => {
	var entries = document.querySelector(".entries");
	for (var i = 0; i < localStorage.length; i++){
		if(localStorage.key(i) != "moodArray" && localStorage.key(i) != "dates")
			entries.innerHTML += getEntryTemplate(JSON.parse(localStorage.getItem(localStorage.key(i))), i);
	}

	var regularPage = document.querySelector(".main").innerHTML;

};


/* searching for entries */

document.querySelector('.search-bar').onkeyup = (ev) => {
    // 13 --> enter key
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};

const search = () => {
	var input, filter, title;
	input = document.querySelector('.search-bar');
	filter = input.value.toUpperCase();

	for (var i = 0; i < localStorage.length; i++)
	{
		if(localStorage.key(i) != "moodArray" && localStorage.key(i) != "dates")
		{
			title = JSON.parse(localStorage.getItem(localStorage.key(i))).title;
			if(title.toUpperCase().indexOf(filter) > -1)
			{
				document.getElementById('entry-' + i).style.display = "block";
			}
			else{
				document.getElementById('entry-' + i).style.display = "none";
			}

		}
	}


};

/* previewing saved entries */

const getPreviewTemplate = (data) => {
	const template = `
	<div class= "preview-main">
		<div class= "prompt-container">
	        <h1> Journal Prompt: ${data.prompt} </h1>
	        <h3> My Response: </h3>
	    </div>
	    <section class= "journal-entry">
	        <div class= "title-container">
	            <h3> ${data.title} </h3>
	        </div>
	        <div class="entry-container">
	            <p> ${data.content}</p>
	        </div>
	    </section> 
	</div>
	`
	return template;

}

const previewEntry = (ev) => {
	const key = ev.currentTarget.id;
	const data = JSON.parse(localStorage.getItem(localStorage.key(key)));
	document.querySelector(".main").innerHTML = getPreviewTemplate(data);
	document.querySelector("#dashboard").innerHTML

};


const returnBack = () => {
	location.reload();
};

