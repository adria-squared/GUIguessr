const themes = ["win1", "win2", "win3", "win95", "winme","macos1", "macos7", "macos8", "macos9"];

const os_array = ["Windows", "macOS", "OS/2", "Debian", "AmigaOS"];

const imgs_win = ["win1","win2", "win3", "win31", "win95", "win98", "winme", "winxp", "winvista", "win7", "win8", "win10", "win11"];
const vers_win = ["1.0","2.0","3.0","3.1","95","98","Me","XP","Vista","7","8","10","11"];
const date_win = [1985, 1987, 1990, 1992, 1995, 1998, 2000, 2001, 2007, 2009, 2012, 2015, 2021];
const imgs_mac = ["macos1","macos3", "macos4", "macos7", "macos8", "macos9", "macosx", "macosx2", "macosx3", "macosx4", "macosx5"];
const vers_mac = ["System 1","System 3","System 4","System 7","8","9","X 10.0 Cheetah","X 10.2 Jaguar","X 10.3 Panther","X 10.4 Tiger","X 10.5 Leopard"];
const date_mac = [1984, 1986, 1987, 1991, 1997, 1999, 2001, 2002, 2003, 2005, 2007];
const imgs_os2 = ["os213","os22", "os2w3", "os2w4"];
const vers_os2 = ["1.3","2.0","Warp 3","Warp 4"];
const date_os2 = [1990, 1992, 1994, 1996];
const imgs_deb = ["debian3", "debian5", "debian7", "debian12"];
const vers_deb = ["3.0", "5.0", "7", "12"];
const date_deb = [2002, 2009, 2013, 2023];
const imgs_ami = ["amigaos13", "amigaos21", "amigaos31", "amigaos35", "amigaos41", "amigaos32"]
const vers_ami = ["1.3", "2.04", "3.1", "3.5", "4.1", "3.2.3"]
const date_ami = [1988, 1991, 1994, 1999, 2008, 2021]

var row = 1

var company = ""
var date = 0
var base = ""
var os_id = Math.floor(Math.random() * os_array.length)
var img_id = 0
var vers_array = []

if (os_array[os_id] == "Windows") {
    img_id = Math.floor(Math.random() * imgs_win.length);
    main_img = imgs_win[img_id];
    company = "Microsoft"
	vers_array = vers_win
	date_array = date_win
    date = date_win[img_id]
	if (main_img == "win1" || main_img == "win2" || main_img == "win3" || main_img == "win31" || main_img == "win95" || main_img == "win98" || main_img == "winme") {
		base = "DOS"
	} else {
		base = "WinNT"
	}
} else if (os_array[os_id] == "macOS") {
    img_id = Math.floor(Math.random() * imgs_mac.length);
    main_img = imgs_mac[img_id];
    company = "Apple"
	vers_array = vers_mac
	date_array = date_mac
    date = date_mac[img_id]
	if (main_img == "macos1" || main_img == "macos3" || main_img == "macos4" || "main_img" == "macos7" || main_img == "macos8" || main_img == "macos9") {
		base = "Mac OS Classic"
	} else {
		base = "Darwin"
	}
} else if (os_array[os_id] == "OS/2") {
    img_id = Math.floor(Math.random() * imgs_os2.length);
    main_img = imgs_os2[img_id];
    company = "IBM"
	if (main_img == "os213") {
		company = "Microsoft"
	}
	vers_array = vers_os2
	date_array = date_os2
    date = date_os2[img_id]
	base = "OS/2"
} else if (os_array[os_id] == "Debian") {
    img_id = Math.floor(Math.random() * imgs_deb.length);
    main_img = imgs_deb[img_id];
	company = "Debian Project"
	base = "Linux"
	vers_array = vers_deb
	date_array = date_deb
    date = date_deb[img_id]
} else if (os_array[os_id] == "AmigaOS") {
    img_id = Math.floor(Math.random() * imgs_ami.length);
    main_img = imgs_ami[img_id];
    company = "Commodore"
	if (main_img == "amigaos35") {
		company = "Haage & Partner"
	} else if (main_img == "amigaos41" || main_img == "amigaos32") {
		company = "Hyperion"
	}
	vers_array = vers_ami
	date_array = date_ami
	base = "AmigaOS"
    date = date_ami[img_id]
}

let suggestions_tmp = "";
for (let i=0; i < os_array.length; i++) {
	document.getElementById("suggestions").innerHTML = document.getElementById("suggestions").innerHTML + "<button type=\"button\" class=\"button\" onclick=\"check_select('" + os_array[i] + "')\">" + os_array[i] + "</button>"
}

theme = themes[Math.floor(Math.random() * themes.length)];

document.getElementById("version_search").style.display = 'none';

document.getElementById("body").style.backgroundImage = "url('themes/" + theme + "/bg.png')";

if (theme == "win1" || theme == "win2") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "Fixedsys";
    }
}else if (theme == "win3") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "System";
    }
}else if (theme == "win95" || theme == "winme") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "W95FA";
    }
}else if (theme == "macos1" || theme == "macos7") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "Chicago";
    }
}else if (theme == "macos8" || theme == "macos9") {
    var all = document.getElementsByTagName("*");

    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily = "Charcoal";
    }
}

document.getElementById("main_img").setAttribute('src', 'img/' + main_img + '.png');

function check_select(button) {
    document.getElementById("search").style.display = 'none';
    document.getElementById("search_cell").innerHTML = button;
    document.getElementById("version_search").style.display = 'block';
    document.getElementById("suggestions_ver").style.display = 'block';
	font = document.getElementById("body").style.fontFamily
	document.getElementById("suggestions_ver").innerHTML = ""
    if (document.getElementById("search_cell").innerHTML == "Windows") {
		suggestions_tmp = "";
		for (i=0; i < vers_win.length; i++) {
			document.getElementById("suggestions_ver").innerHTML = document.getElementById("suggestions_ver").innerHTML + "<button type=\"button\" class=\"button\" onclick=\"check_select_ver('" + vers_win[i] + "')\" style='font-family:"+ font + ";'>" + vers_win[i] + "</button>"
		}
    } else if (document.getElementById("search_cell").innerHTML == "macOS") {
		suggestions_tmp = "";
		for (i=0; i < vers_mac.length; i++) {
			document.getElementById("suggestions_ver").innerHTML = document.getElementById("suggestions_ver").innerHTML + "<button type=\"button\" class=\"button\" onclick=\"check_select_ver('" + vers_mac[i] + "')\" style='font-family:"+ font + ";'>" + vers_mac[i] + "</button>"
		}
    } else if (document.getElementById("search_cell").innerHTML == "OS/2") {
		suggestions_tmp = "";
		for (i=0; i < vers_os2.length; i++) {
			document.getElementById("suggestions_ver").innerHTML = document.getElementById("suggestions_ver").innerHTML + "<button type=\"button\" class=\"button\" onclick=\"check_select_ver('" + vers_os2[i] + "')\" style='font-family:"+ font + ";'>" + vers_os2[i] + "</button>"
		}
    } else if (document.getElementById("search_cell").innerHTML == "Debian") {
		suggestions_tmp = "";
		for (i=0; i < vers_deb.length; i++) {
			document.getElementById("suggestions_ver").innerHTML = document.getElementById("suggestions_ver").innerHTML + "<button type=\"button\" class=\"button\" onclick=\"check_select_ver('" + vers_deb[i] + "')\" style='font-family:"+ font + ";'>" + vers_deb[i] + "</button>"
		}
    } else if (document.getElementById("search_cell").innerHTML == "AmigaOS") {
		suggestions_tmp = "";
		for (i=0; i < vers_ami.length; i++) {
			document.getElementById("suggestions_ver").innerHTML = document.getElementById("suggestions_ver").innerHTML + "<button type=\"button\" class=\"button\" onclick=\"check_select_ver('" + vers_ami[i] + "')\" style='font-family:"+ font + ";'>" + vers_ami[i] + "</button>"
		}
    }
}

function check_select_ver(button) {
    document.getElementById("version_search").style.display = 'none';
    document.getElementById("version").innerHTML = button;
	OS = document.getElementById("search_cell").innerHTML
	version = document.getElementById("version").innerHTML
	version_array = []
	
	if (OS == "Windows") {
		document.getElementById("company").innerHTML = "Microsoft"
		if (version == "1.0" || version == "2.0" || version == "3.0" || version == "3.1" || version == "95" || version == "98" || version == "Me") {
			document.getElementById("base").innerHTML = "DOS"
		} else {
			document.getElementById("base").innerHTML = "WinNT"
		}
		version_array = vers_win
		date_array = date_win
	} else if (OS == "macOS") {
		document.getElementById("company").innerHTML = "Apple"
		if (version == "System 1" || version == "System 3" || version == "System 4" || version == "System 7" || version == "8" || version == "9") {
		document.getElementById("base").innerHTML = "Mac OS Classic"
		} else {
			document.getElementById("base").innerHTML = "Darwin"
		}
		version_array = vers_mac
		date_array = date_mac
	} else if (OS == "OS/2") {
		if (version == "1.3") {
			document.getElementById("company").innerHTML = "Microsoft";
		} else {
			document.getElementById("company").innerHTML = "IBM";
		}
		document.getElementById("base").innerHTML = "OS/2"
		version_array = vers_os2
		date_array = date_os2
	} else if (OS == "Debian") {
		document.getElementById("company").innerHTML = "Debian Project"
		document.getElementById("base").innerHTML = "Linux"
		version_array = vers_deb
		date_array = date_deb
	} else if (OS == "AmigaOS") {
		if (version == "3.5") {
			document.getElementById("company").innerHTML = "Haage & Partner";
		} else if (version == "4.1" || version == "3.2") {
			document.getElementById("company").innerHTML = "Hyperion";
		} else {
			document.getElementById("company").innerHTML = "Commodore";
		}
		document.getElementById("base").innerHTML = "AmigaOS"
		version_array = vers_ami
		date_array = date_ami
	}
	
	
	let version_id = 0
	let version_tmp = ""
	for (i=0; i < version_array.length; i++) {
		if (version_array[i] == version) {
			version_id = i
			break
		}
	}
	document.getElementById("date").innerHTML = date_array[i]
    tab_down()
}

function hide() {
    document.getElementById("suggestions").style.display = 'none';
    document.getElementById("suggestions_ver").style.display = 'none';
}

function check_answer() {
    var os_check = false
    var ver_check = false
    if (document.getElementById("cell_12").innerHTML == os_array[os_id]) {
        document.getElementById("cell_12").style.color = "#ffffff";
        document.getElementById("cell_12").style.backgroundColor = "#538d4e";
        os_check = true
    }
    if (os_array[os_id] == "Windows") {
        if (document.getElementById("version_cell2").innerHTML == vers_win[img_id]) {
            document.getElementById("version_cell2").style.color = "#ffffff";
            document.getElementById("version_cell2").style.backgroundColor = "#538d4e";
            ver_check = true
        }
    } else if (os_array[os_id] == "macOS") {
        if (document.getElementById("version_cell2").innerHTML == vers_mac[img_id]) {
            document.getElementById("version_cell2").style.color = "#ffffff";
            document.getElementById("version_cell2").style.backgroundColor = "#538d4e";
            ver_check = true
        }
    } else if (os_array[os_id] == "OS/2") {
        if (document.getElementById("version_cell2").innerHTML == vers_os2[img_id]) {
            document.getElementById("version_cell2").style.color = "#ffffff";
            document.getElementById("version_cell2").style.backgroundColor = "#538d4e";
            ver_check = true
        }
    } else if (os_array[os_id] == "Debian") {
        if (document.getElementById("version_cell2").innerHTML == vers_deb[img_id]) {
            document.getElementById("version_cell2").style.color = "#ffffff";
            document.getElementById("version_cell2").style.backgroundColor = "#538d4e";
            ver_check = true
        }
    } else if (os_array[os_id] == "AmigaOS") {
        if (document.getElementById("version_cell2").innerHTML == vers_ami[img_id]) {
            document.getElementById("version_cell2").style.color = "#ffffff";
            document.getElementById("version_cell2").style.backgroundColor = "#538d4e";
            ver_check = true
        }
    }
    if (document.getElementById("company2").innerHTML == company) {
        document.getElementById("company2").style.color = "#ffffff";
        document.getElementById("company2").style.backgroundColor = "#538d4e";
    }
    if (document.getElementById("base2").innerHTML == base) {
        document.getElementById("base2").style.color = "#ffffff";
        document.getElementById("base2").style.backgroundColor = "#538d4e";
    }
    if (document.getElementById("date2").innerHTML == date) {
        document.getElementById("date2").style.color = "#ffffff";
        document.getElementById("date2").style.backgroundColor = "#538d4e";
    } else if (document.getElementById("date2").innerHTML > date) {
        document.getElementById("date2").innerHTML = document.getElementById("date2").innerHTML + "↓";
    } else {
        document.getElementById("date2").innerHTML = document.getElementById("date2").innerHTML + "↑";
    }
    if (os_check && ver_check) {
        document.getElementById("search").style.display = 'none';
        check_answer_row1()
        document.getElementById("table_test").deleteRow(1);
        document.getElementById("conglaturations").style.display = "block";
        if (row == 2) {
            document.getElementById("end_text").innerHTML = "Congratulations!!!<br>You found it in 1 try!!!";
        } else {
            document.getElementById("end_text").innerHTML = "Congratulations!!!<br>You found it in " + (row-1) + " tries!!!";
        }
    }
}

function reload() {
    location.reload();
}

function check_answer_row1() {
    os_check = false
    ver_check = false
    if (document.getElementById("search_cell").innerHTML == os_array[os_id]) {
        document.getElementById("cell_1").style.color = "#ffffff";
        document.getElementById("cell_1").style.backgroundColor = "#538d4e";
		os_check = true
    } if (os_array[os_id] == "Windows") {
        if (document.getElementById("version").innerHTML == vers_win[img_id]) {
            document.getElementById("version_cell").style.color = "#ffffff";
            document.getElementById("version_cell").style.backgroundColor = "#538d4e";
			ver_check = true
        }
    } else if (os_array[os_id] == "macOS") {
        if (document.getElementById("version").innerHTML == vers_mac[img_id]) {
            document.getElementById("version_cell").style.color = "#ffffff";
            document.getElementById("version_cell").style.backgroundColor = "#538d4e";
			ver_check = true
        }
    } else if (os_array[os_id] == "OS/2") {
        if (document.getElementById("version").innerHTML == vers_os2[img_id]) {
            document.getElementById("version_cell").style.color = "#ffffff";
            document.getElementById("version_cell").style.backgroundColor = "#538d4e";
			ver_check = true
        }
    } else if (os_array[os_id] == "Debian") {
        if (document.getElementById("version").innerHTML == vers_deb[img_id]) {
            document.getElementById("version_cell").style.color = "#ffffff";
            document.getElementById("version_cell").style.backgroundColor = "#538d4e";
			ver_check = true
        }
    } else if (os_array[os_id] == "AmigaOS") {
        if (document.getElementById("version").innerHTML == vers_ami[img_id]) {
            document.getElementById("version_cell").style.color = "#ffffff";
            document.getElementById("version_cell").style.backgroundColor = "#538d4e";
			ver_check = true
        }
    }
    if (document.getElementById("company").innerHTML == company) {
        document.getElementById("company").style.color = "#ffffff";
        document.getElementById("company").style.backgroundColor = "#538d4e";
    }
    if (document.getElementById("base").innerHTML == base) {
        document.getElementById("base").style.color = "#ffffff";
        document.getElementById("base").style.backgroundColor = "#538d4e";
    }
    if (document.getElementById("date").innerHTML == date) {
        document.getElementById("date").style.color = "#ffffff";
        document.getElementById("date").style.backgroundColor = "#538d4e";
    } else if (document.getElementById("date").innerHTML > date) {
        document.getElementById("date").innerHTML = document.getElementById("date").innerHTML + "↓";
    } else {
        document.getElementById("date").innerHTML = document.getElementById("date").innerHTML + "↑";
    }
    if (os_check && ver_check) {
        document.getElementById("conglaturations").style.display = "block";
        document.getElementById("end_text").innerHTML = "Congratulations!!!<br>You found it in 5 tries!!!";
    }
}

function tab_down() { // (mostly) un-spaghettified
    document.getElementById("search").style.display = 'block';
    document.getElementById("suggestions").style.display = 'none';
    document.getElementById("suggestions_ver").style.display = 'none';
    document.getElementById("version_search").style.display = 'none';
    row = row+1
    if (row == 2) {
		var row2 = document.createElement("tr");
		row2.id = "row2";
		document.getElementById("tab_main").appendChild(row2);
		document.getElementById("row2").innerHTML = document.getElementById("row1").innerHTML
		var cells = document.getElementById("row2").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = (cells[i].id + 2);
		}
		cells = document.getElementById("row1").querySelectorAll("td")
		for (i = 2; i < cells.length; i++) {
			cells[i].innerHTML = "";
		}
		document.getElementById("cell_12").innerHTML = document.getElementById("search_cell").innerHTML
		document.getElementById("version_cell2").innerHTML = document.getElementById("version").innerHTML
		document.getElementById("search_cell").innerHTML = ""
		document.getElementById("version").innerHTML = ""
        check_answer()
    } else if (row == 3) {
        var row3 = document.createElement("tr");
        row3.id = "row3";
		document.getElementById("tab_main").appendChild(row3);
		document.getElementById("row3").innerHTML = document.getElementById("row2").innerHTML
		cells = document.getElementById("row3").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = cells[i].id.replace("2", "3");
		}
		
		document.getElementById("row2").innerHTML = document.getElementById("row1").innerHTML
		cells = document.getElementById("row2").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = (cells[i].id + 2);
			cells[i].style.backgroundColor = "#ffffff";
			cells[i].style.color = "#000000"
		}
		cells = document.getElementById("row1").querySelectorAll("td")
		for (i = 2; i < cells.length; i++) {
			cells[i].innerHTML = "";
		}
		document.getElementById("cell_12").innerHTML = document.getElementById("search_cell").innerHTML
		document.getElementById("version_cell2").innerHTML = document.getElementById("version").innerHTML
		document.getElementById("search_cell").innerHTML = ""
		document.getElementById("version").innerHTML = ""
        check_answer()
    } else if (row == 4) {
        var row4 = document.createElement("tr");
		document.getElementById("tab_main").appendChild(row4);
        row4.id = "row4";
		document.getElementById("row4").innerHTML = document.getElementById("row3").innerHTML
		cells = document.getElementById("row4").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = cells[i].id.replace("3", "4");
		}
		
		document.getElementById("row3").innerHTML = document.getElementById("row2").innerHTML
		cells = document.getElementById("row3").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = cells[i].id.replace("2", "3");
		}
		
		document.getElementById("row2").innerHTML = document.getElementById("row1").innerHTML
		cells = document.getElementById("row2").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = (cells[i].id + 2);
			cells[i].style.backgroundColor = "#ffffff";
			cells[i].style.color = "#000000"
		}
		cells = document.getElementById("row1").querySelectorAll("td")
		for (i = 2; i < cells.length; i++) {
			cells[i].innerHTML = "";
		}
		document.getElementById("cell_12").innerHTML = document.getElementById("search_cell").innerHTML
		document.getElementById("version_cell2").innerHTML = document.getElementById("version").innerHTML
		document.getElementById("search_cell").innerHTML = ""
		document.getElementById("version").innerHTML = ""
		
        check_answer()
    } else if (row == 5) {
        var row5 = document.createElement("tr");
        row5.id = "row5";
        document.getElementById("tab_main").appendChild(row5);
		document.getElementById("row5").innerHTML = document.getElementById("row4").innerHTML
		cells = document.getElementById("row5").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = cells[i].id.replace("4", "5");
		}
		
		document.getElementById("row4").innerHTML = document.getElementById("row3").innerHTML
		cells = document.getElementById("row4").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = cells[i].id.replace("3", "4");
		}
		
		document.getElementById("row3").innerHTML = document.getElementById("row2").innerHTML
		cells = document.getElementById("row3").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = cells[i].id.replace("2", "3");
		}
		
		document.getElementById("row2").innerHTML = document.getElementById("row1").innerHTML
		cells = document.getElementById("row2").querySelectorAll("td")
		for (i = 0; i < cells.length; i++) {
			cells[i].id = (cells[i].id + 2);
			cells[i].style.backgroundColor = "#ffffff";
			cells[i].style.color = "#000000"
		}
		cells = document.getElementById("row1").querySelectorAll("td")
		for (i = 2; i < cells.length; i++) {
			cells[i].innerHTML = "";
		}
		document.getElementById("cell_12").innerHTML = document.getElementById("search_cell").innerHTML
		document.getElementById("version_cell2").innerHTML = document.getElementById("version").innerHTML
		document.getElementById("search_cell").innerHTML = ""
		document.getElementById("version").innerHTML = ""
		
        check_answer()
    } else if (row >= 6) {
        document.getElementById("search").style.display = 'none';
        document.getElementById("conglaturations").style.display = "block";
        document.getElementById("end_text").innerHTML = "You didn't find it in 5 tries, the answer was " + os_array[os_id] + " " + vers_array[img_id];
        check_answer_row1()
    }
    return
}

const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById('suggestions');

searchInput.addEventListener('input', function () {
const inputValue = this.value.trim().toLowerCase();
const suggestionItems = suggestionsList.querySelectorAll('button');

let hasMatches = false;

suggestionItems.forEach(function (listItem) {
const textValue = listItem.textContent.toLowerCase();
const displayStyle = textValue.includes(inputValue) ? 'block' : 'none';
listItem.style.display = displayStyle;
hasMatches = hasMatches || displayStyle === 'block';
});

suggestionsList.style.display = hasMatches ? 'block' : 'none';
});


const searchInput_ver = document.getElementById("searchInput_ver");
const suggestionsList_ver = document.getElementById('suggestions_ver');

searchInput_ver.addEventListener('input', function () {
const inputValue_ver = this.value.trim().toLowerCase();
const suggestionItems_ver = suggestions_ver.querySelectorAll('button');

let hasMatches_ver = false;

suggestionItems_ver.forEach(function (listItem) {
const textValue_ver = listItem.textContent.toLowerCase();
const displayStyle_ver = textValue_ver.includes(inputValue_ver) ? 'block' : 'none';
listItem.style.display = displayStyle_ver;
hasMatches_ver = hasMatches_ver || displayStyle_ver === 'block';
});

suggestionsList_ver.style.display = hasMatches_ver ? 'block' : 'none';
});
