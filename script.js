function highlight() {
    //Write your code here
	Array.from(document.getElementsByTagName('strong')).forEach(strongElement => {
		strongElement.style.color = "green";
	});
}

function return_normal() {
    //Write your code here 
    Array.from(document.getElementsByTagName('strong')).forEach(strongElement => {
		strongElement.style.color = "black";
	});
}