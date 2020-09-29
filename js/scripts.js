var activeLinkID = "";

$(function(){
	$('#head').load("snippets/header.html", function() {
		if(activeLinkID) {
			document.querySelector(activeLinkID).className += " active";
		}
	});
	$('#foot').load("snippets/footer.html");
})