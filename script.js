function shortcut(s1, s2) {
  // your code here
	if (str1.isEmpty() || str2.isEmpty()) {
        return ""; // Return empty string if any input is empty
    }
    // Get the first character of each string
    char firstChar1 = str1.charAt(0);
    char firstChar2 = str2.charAt(0);
    
    // Return the concatenated result
    return "" + firstChar1 + firstChar2; 
	
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));

