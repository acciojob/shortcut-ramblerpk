function shortcut(str1, str2) {
  if (!str1 || !str2) return '';
  return str1[0] + str2[0];
}


// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));


