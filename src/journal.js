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

