let str1 = "Hello world";
let str2 = 'Hey i am good';
let str3 = `Aur kya haal chaal`; // latest tarika 

// let price = 70;
// console.log(`price of tomator is ${price}, get it asap`);
// console.log(str1, str2, str3);

// STRING CONCATENATION

let s1 = "hello";
let s2 = " world";
let s3 = s1+s2;
console.log(s3);

// length :  returns length
console.log(s1.length);
console.log(s2.length);
console.log(s3.length);


// print quotation -> "hello world"
console.log('"hello world"');

// print 'hello world'
console.log("'hello world'");

// 2.. use of Backslash \ in js 
// print after full stop sentence in new line -> Welcome to bihar. This is going to be crazy for all of you.
// use of \n - > to begin with new line 
console.log("Welcome to bihar. \nThis is going to be crazy for all of you.") 
// print \n with the helpof ESCAPE CHAR \
console.log("Welcome to bihar.\\nThis is going to be crazy for all of you.") 

// 3. Accessing Chars -> [] or charAt(index);
let special = "Rohit";
console.log(special[0]); // R
console.log(special[2]); // h
console.log(special[7]); // out of limit
console.log(special.charAt(3));// i

// 4. Changing Case : toUpperCase() and toLowerCase() , doesnt changes in old string, new string is made 
console.log(special.toLowerCase());
console.log(special.toUpperCase());

console.log(special);// original string remain unchanged 

// 5.Searching in String 
let hero = "hello world,Shivam world here";
console.log(hero.indexOf("world")); // checks present ? then return first starting index of the string 
console.log(hero.lastIndexOf("world")); // last starting index of string 
console.log(hero.indexOf("World")); // not present so return -1
console.log(hero.includes("world")); // true 

// 6. EXTRACTING SUBSTRING
            //12345678
        //  -8-7-6-5-4-3-2-1
let newstr = "HelloDon";
//SLICE: slice(si,ei) : extracts part of string from si to ei-1;
console.log(newstr.slice(1,4));
console.log(newstr.slice(-7,6));
console.log(newstr.slice(-2,4)); // EMPTY STRING , why?
// si should always comes before ei wether be negative or pos 

// substring(start,end) : similar to slice but doesn't accepts negative index
console.log(newstr.substring(1,4));
// substr(si, length);Extracts a substring of specified length . this is outdated tho 
console.log(newstr.substr(2,4));

// 7. REPLACING CONTENT
let str12 = "Hello ji kaise ho ji";
//replce(oldsubstring, newsubstring) : Replaces the first match
console.log(str12.replace("ji", "shivam"));
//replaceAll(oldSubstring, newSubstring) : replaces all mathces (ES2021+)
console.log(str12.replaceAll("ji", "shivam"));

// 8. Splitting Strings
let str11 ="Money! honey! sunny! funny";
// split(delimiter) : Splits a string into an array based on a delimiter.
console.log(str11.split("! ")); // "! " is the delimiter 


// 9. Trimming
let str14 = "  hello ji ";
// trim() : Removes WhiteSpace from both ends.
console.log(str14.trim());
console.log(str14.trim().length);

// trimStart() or trimEnd() : removes whitespace from the start or the end.
console.log(str14.trimStart().length);


// NEW WAY TO CREATE STRING 
let latestString = new String("Helloo Coder Army");
// new word -> memory allocated in heap, just like any other non primtv datatype thats why the typeof of this newstring is Object just like any other non primtv datatype 
console.log(latestString);
console.log(typeof latestString);
