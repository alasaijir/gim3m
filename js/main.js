function down1(isScrolled, id,id2) {
	if (isScrolled == true) {
		document.getElementById(id).style.marginTop = '100px';
		document.getElementById(id).style.opacity = '1';
		document.getElementById(id2).style.color = '#400000';
		document.getElementById(id2).style.backgroundColor = '#FFF';
	} else {
		document.getElementById(id).style.marginTop = '-33px';
		document.getElementById(id).style.opacity = '0.4';
		document.getElementById(id2).style.color = '#FFF';
		document.getElementById(id2).style.backgroundColor = '#400000';
	}
}

function down4(isScrolled, id, id2) {
	if (isScrolled == true) {
		document.getElementById(id).style.marginTop = '117px'
		document.getElementById(id).style.opacity = '1';
		document.getElementById(id2).style.color = '#400000';
		document.getElementById(id2).style.backgroundColor = '#FFF';
	} else {
		document.getElementById(id).style.marginTop = '-52px'
		document.getElementById(id).style.opacity = '0.4';
		document.getElementById(id2).style.color = '#FFF';
		document.getElementById(id2).style.backgroundColor = '#400000';

	}
}
