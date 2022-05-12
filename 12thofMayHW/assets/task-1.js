"use strict"
//length
let str = "Hello world";
console.log(str.length);
//slice
let strSlice = "Live Eat";
console.log(strSlice.slice(5));
//substring
let strSubstring = "Salam olsun yaxşılara";
console.log(strSubstring.substring(5, 0));
//replace
let strReplace = "Rick & Morty";
console.log(strReplace.replace("Morty", "Summer"));
//toUpperCase işləmədi
let strUppercase = "Hello world";
console.log(strUppercase.toUpperCase);
//toLowerCase işləmədi
let strLowercase = "Hello world";
console.log(strLowercase.toLowerCase);
//concat
let strConcat1 = "Hello";
let strConcat2 = " world";
console.log(strConcat1.concat(" ", strConcat2));
//trim
let strTrim = "      Hello World!      ";
console.log(strTrim.trim());
//padStart
let strpadStart = "A";
console.log(strpadStart.padStart(7, "g"));
//padEnd
let strpadEnd = "aq";
console.log(strpadEnd.padEnd(3, "a"));
//charAt
let strcharAt = "salamka";
console.log(strcharAt.charAt(0));
//charCodeAt
let strcharCodeAt = "flipflop";
console.log(strcharCodeAt.charCodeAt(3));
//split
let strSplit = "Rick & Morty";
console.log(strSplit.split("&"));