/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
// const lorem = document.querySelector("p");
const loremHtml = document.getElementsByTagName("p")[0];
const lorem = document.getElementsByTagName("p")[0].innerText;

const loremArray = lorem.split(" ");

const newLoremArray = [];
for (const i in loremArray) {
  if (loremArray[i].length > 8) {
    newLoremArray.push("<mark>" + loremArray[i] + "</mark>");
  } else {
    newLoremArray.push(loremArray[i]);
  }
}

const LoremWzMark = newLoremArray.join(" ");

loremHtml.innerHTML = LoremWzMark;
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const officeIpsum = document.createElement("a");
officeIpsum.href = "http://officeipsum.com/";
officeIpsum.target = "_blank";

// const linkText = document.createTextNode("http://officeipsum.com/");
// officeIpsum.title = "http://officeipsum.com/";
// officeIpsum.appendChild(linkText);
// document.body.append(officeIpsum);

officeIpsum.innerText = "http://officeipsum.com/";
document.body.appendChild(officeIpsum);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const addBrArrary = [];
for (const i in LoremWzMark) {
  if (LoremWzMark[i] == ".") {
    addBrArrary.push(LoremWzMark[i] + "<br>");
  } else {
    addBrArrary.push(LoremWzMark[i]);
  }
}

const addBr = addBrArrary.join("");

loremHtml.innerHTML = addBr;

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const countChar = loremArray.length;
const countEl = document.createElement("div");
countEl.innerText = `${countChar} words`;
document.body.insertBefore(countEl, loremHtml);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

loremHtml.innerHTML = loremHtml.innerHTML
  .replaceAll("?", "🤔")
  .replaceAll("!", "😲");
