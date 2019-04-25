/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
"use strict";
function myFunction(a) {
  a.parentNode.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
	var total = 0;
	var cpu = document.getElementsByName("cpus");
	var mobo = document.getElementsByName("motherboards");
	var gpu = document.getElementsByName("gpus");
	var cases = document.getElementsByName("cases");
	var drives = document.getElementsByName("drives");
	var power = document.getElementsByName("power");
	
	//CPU Loop 
	for (var i = 0, length = cpu.length; i < length; i++)
	{
		if (cpu[i].checked)
		{
			console.log(cpu[i].value);
			cpu = parseFloat(cpu[i].value);
		break;
		}
	}
	
	//Motherboard loop
	for (var i = 0, length = mobo.length; i < length; i++)
	{
		if (mobo[i].checked)
		{
			console.log(mobo[i].value);
			mobo = parseFloat(mobo[i].value);
		break;
		}
	}
	
	// GPU Loop 
	for (var i = 0, length = gpu.length; i < length; i++)
	{
		if (gpu[i].checked)
		{
			console.log(gpu[i].value);
			gpu = parseFloat(gpu[i].value);
		break;
		}
	}
	
	//Cases Loop
	for (var i = 0, length = cases.length; i < length; i++)
	{
		if (cases[i].checked)
		{
			console.log(cases[i].value);
			cases = parseFloat(cases[i].value);
		break;
		}
	}
	
	//Drives Loop
	for (var i = 0, length = drives.length; i < length; i++)
	{
		if (drives[i].checked)
		{
			console.log(drives[i].value);
			drives = parseFloat(drives[i].value);
		break;
		}
	}
	
	//Power Loop
	for (var i = 0, length = power.length; i < length; i++)
	{
		if (power[i].checked)
		{
			console.log(power[i].value);
			power = parseFloat(power[i].value);
		break;
		}
	}
	total = (cpu + mobo + gpu + cases + power);
	document.getElementById("price").innerHTML = "Total Price: $" + parseFloat(total);
}