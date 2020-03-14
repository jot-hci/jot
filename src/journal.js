let saveCount = 0;
var ind = 0;

const newEntry = () => {
	//saveCount = 0;
}

const pinEntry = () => {
	const pin = document.getElementById('pin');
	if (saveCount == 0)
	{
		alert("Save entry first and try again.");
		return;
	}

	if (pin.style.opacity == "1")
	{
		alert("Entry is no longer visible to therapist.");
		pin.style.opacity = ".7";
		entry = JSON.parse(window.localStorage.getItem(ind));
	    entry.shared = false;
	    window.localStorage.setItem(ind, JSON.stringify(entry));
	}

	else {
	    alert("Entry is now visible to therapist.");
	    pin.style.opacity = "1";
	    entry = JSON.parse(window.localStorage.getItem(ind));
	    entry.shared = true;
	    window.localStorage.setItem(ind, JSON.stringify(entry));

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
			shared: false,
		};

		if(newEntry.title == "")
		{
			var today = new Date();
			var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
			newEntry.title = date;
		}
		window.localStorage.setItem(localStorage.length, JSON.stringify(newEntry));
		ind = localStorage.length - 1;
		saveMood();
	}

	else {
		saveCount++;
		var entry = JSON.parse(window.localStorage.getItem(ind));
		entry = {
			prompt: entry.prompt,
			title: document.querySelector("#title-input").value,
			content: document.querySelector("#entry").value,
			mood: document.querySelector(".slider").value,
			shared: entry.shared,
		};

		console.log(entry.shared);

		if(entry.title == "")
		{
			var today = new Date();
			var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
			entry.title = date;
		}

		window.localStorage.setItem(ind, JSON.stringify(entry));
		saveMood();
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
	let day = d.getDate();
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

const popupMoodShow = () => {
	var popup = document.getElementById("moodPopup");
	popup.classList.add("show");
	setTimeout(popupMoodFade, 3000);
}

const popupMoodFade = () => {
	var popup = document.getElementById("moodPopup");
	popup.classList.remove("show");
}

const popupSaveShow = () => {
	var popup = document.getElementById("savePopup");
	popup.classList.add("show");
	setTimeout(popupSaveFade, 3000);
}

const popupSaveFade = () => {
	var popup = document.getElementById("savePopup");
	popup.classList.remove("show");
}
