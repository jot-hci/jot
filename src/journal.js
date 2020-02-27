let numEntries = 0;
let saveCount = 0;
var ind = 0;

const newEntry = () => {
	//saveCount = 0;
}

const pinEntry = () => {
	const pin = document.getElementById('pin');
	if (pin.style.opacity == "1")
	{
		alert("Entry is no longer visible to therapist.");
		pin.style.opacity = ".7";
	}

	else {
	    alert("Entry is now visible to therapist.");
	    pin.style.opacity = "1";
	}
};

const saveEntry = () => {
	if (saveCount == 0)
	{
		saveCount++;
		var newEntry = {
			title: document.querySelector("#title-input").value,
			content: document.querySelector("#entry").value,
			mood: document.querySelector(".slider").value,
		};
		window.localStorage.setItem(localStorage.length, JSON.stringify(newEntry));
		ind = localStorage.length;
		numEntries ++;
	}

	else {
		saveCount++;
		var entry = JSON.parse(window.localStorage.getItem(localStorage.key(ind)));
		entry = {
			title: document.querySelector("#title-input").value,
			content: document.querySelector("#entry").value,
			mood: document.querySelector(".slider").value,
		};
		window.localStorage.setItem(ind, JSON.stringify(entry));
	}

};


