function toggleActive(div) {
	var className = div.getAttribute('class');
	if(className === 'icons-timegate') {
		div.className = 'icons-timegate-inactive';
	}
	else if(className === 'icons-timegate-inactive') {
		div.className = 'icons-timegate';
	}
	else if(className === 'icons-uselimit') {
		div.className = 'icons-uselimit-inactive';
	}
	else if(className === 'icons-uselimit-inactive') {
		div.className = 'icons-uselimit';
	}
	else if(className === 'icons-goldenticket') {
		div.className = 'icons-goldenticket-inactive';
	}
	else {
		div.className = 'icons-goldenticket';
	}
}