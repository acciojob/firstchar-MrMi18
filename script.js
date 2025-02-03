function firstChar(text) {
  // your code here
	let ans = text.trim();
	if(ans.length===0) return ""
	return ans.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
