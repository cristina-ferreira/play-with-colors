
const misturar = () => {
         var red = document.getElementById("qtR").value;
         document.getElementById("r").style.backgroundColor = "rgb(" + red + "," + 0 + "," + 0 + ")";   
                        
		var green = document.getElementById("qtG").value;
		document.getElementById("g").style.backgroundColor = "rgb(" + 0 + "," + green + "," + 0 + ")";        
		
		var blue = document.getElementById("qtB").value;
		document.getElementById("b").style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + blue + ")";   
		
		document.getElementById("painel").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"; 
		document.getElementById("rgb").innerHTML= "RGB " + "(" + red + ", " + green + ", " + blue + ")";
}

