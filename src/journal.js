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
			prompt: document.querySelector("#prompt").innerText,
			title: document.querySelector("#title-input").value,
			content: document.querySelector("#entry").value,
			mood: document.querySelector(".slider").value,
		};

		if(newEntry.title == "")
		{
			var today = new Date();
			var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
			newEntry.title = date;
		}
		window.localStorage.setItem(localStorage.length, JSON.stringify(newEntry));
		ind = localStorage.length - 1;
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

const saveMood = () => {
	let mood = document.querySelector(".slider").value;

	if (window.localStorage.getItem("moodArray") === null) {
		var moodArray = [];
		moodArray.push(mood);
		window.localStorage.setItem("moodArray", JSON.stringify(moodArray));
	}
	else {
		var arr = JSON.parse(window.localStorage.getItem("moodArray"));
		arr.push(mood);
		window.localStorage.setItem("moodArray", JSON.stringify(arr));
	}

	var d = new Date();
	let month = d.getMonth() + 1;
	let day = d.getDay() + 1;
	let year = d.getFullYear();
	let date = month + "/" + day + "/" + year;

	if (window.localStorage.getItem("dates") === null) {
		var dates = [];
		dates.push(date);
		window.localStorage.setItem("dates", JSON.stringify(dates));
	}
	else {
		var dts = JSON.parse(window.localStorage.getItem("dates"));
		dts.push(date);
		window.localStorage.setItem("dates", JSON.stringify(dts));
	}
}
