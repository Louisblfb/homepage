function submitSearch(){
	string = window.document.getElementById("string").value;
	//window.location = ((string[0] == '!') ? "https://duckduckgo.com/?q=" : "https://startpage.com/do/search?language=english&cat=web&query=") + string;
	window.location = "https://www.google.com/search?q=" + string;
}

function onReturnPress(){
	$("#string").keyup(function(event){
		if(event.keyCode == 13){
			submitSearch();
		}
	});
}
