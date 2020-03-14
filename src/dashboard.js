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
		if(localStorage.key(i) != "moodArray" && localStorage.key(i) != "dates" && localStorage.key(i) != "moodAndEntryArray")
			entries.innerHTML += getEntryTemplate(JSON.parse(localStorage.getItem(localStorage.key(i))), i);
	}

	var regularPage = document.querySelector(".main").innerHTML;

};


/* searching for entries */

document.querySelector('.search-bar').oninput = (ev) => {
    
    search();

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

const getPreviewTemplate = (data, mood) => {
	const template = `
	<div class= "preview-main">
		<div class= "prompt-container">
			<h1> Journal Prompt: ${data.prompt} </h1>
			<div class= "subheader-container">
				<h3> My Response: </h3>
				<h4> Mood: </h4>
				<p> ${data.mood} </p>
			</div>
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
	var ind = ev.currentTarget.id.indexOf("-") + 1;
	const key = ev.currentTarget.id.substring(ind);
	const data = JSON.parse(localStorage.getItem(localStorage.key(key)));

	document.querySelector(".main").innerHTML = getPreviewTemplate(data);
	var dash = document.querySelector("#dashboard");
	dash.style.borderBottom = "none";
	dash.style.fontWeight = "normal";
	dash.addEventListener("mouseenter", function( event ) {   
  		dash.style.borderBottom = "solid";
  		dash.style.borderBottomColor = "hsl(150, 54%, 44%)";
  		dash.style.borderBottomWidth = "3px";
  	});
  	
  	dash.addEventListener("mouseleave", function( event ) {   
  		dash.style.borderBottom = "none";
  	});



};


const returnBack = () => {
	location.reload();
};

