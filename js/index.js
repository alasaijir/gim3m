function down1(isScrolled, id,id2) {
	if (document.documentElement.clientWidth > 1080) {
		if (isScrolled == true) {
			document.getElementById(id).style.marginTop = '100px';
			document.getElementById(id).style.opacity = '1';
			document.getElementById(id2).style.color = '#400000';
			document.getElementById(id2).style.backgroundColor = '#FFF';
		} else {
			document.getElementById(id).style.marginTop = '-53px';
			document.getElementById(id).style.opacity = '0.4';
			document.getElementById(id2).style.color = '#FFF';
			document.getElementById(id2).style.background = 'none';
		}
	} else {
		if (isScrolled == true) {
			document.getElementById(id).style.marginTop = '110px';
			document.getElementById(id).style.opacity = '1';
			document.getElementById(id2).style.color = '#400000';
			document.getElementById(id2).style.backgroundColor = '#FFF';
		} else {
			document.getElementById(id).style.marginTop = '-73px';
			document.getElementById(id).style.opacity = '0.4';
			document.getElementById(id2).style.color = '#FFF';
			document.getElementById(id2).style.background = 'none';
		}
	}
}

function down4(isScrolled, id, id2) {
	if (document.documentElement.clientWidth > 1080) {
		if (isScrolled == true) {
			document.getElementById(id).style.marginTop = '117px'
			document.getElementById(id).style.opacity = '1';
			document.getElementById(id2).style.color = '#400000';
			document.getElementById(id2).style.backgroundColor = '#FFF';
		} else {
			document.getElementById(id).style.marginTop = '-52px'
			document.getElementById(id).style.opacity = '0.4';
			document.getElementById(id2).style.color = '#FFF';
			document.getElementById(id2).style.background = 'none';
		}
	} else {
		if (isScrolled == true) {
			document.getElementById(id).style.marginTop = '110px'
			document.getElementById(id).style.opacity = '1';
			document.getElementById(id2).style.color = '#400000';
			document.getElementById(id2).style.backgroundColor = '#FFF';
		} else {
			document.getElementById(id).style.marginTop = '-82px'
			document.getElementById(id).style.opacity = '0.4';
			document.getElementById(id2).style.color = '#FFF';
			document.getElementById(id2).style.background = 'none';
		}
	}
}
