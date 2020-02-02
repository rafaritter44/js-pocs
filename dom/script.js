document.getElementById("demo").textContent += " changed";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").setAttribute("hidden", true);

// document.createElement();

/*
document.open();
document.write("<h2>Hi</h2>");
document.close();
*/

document.querySelector("button").onclick = () => document.querySelector("button").textContent = "Clicked";

for (const p of document.getElementsByTagName("p")) {
    p.textContent += " changed";
}

for (const p of document.getElementsByClassName("odd-paragraphs")) {
    p.textContent += " twice";
}

document.getElementById("last-paragraph").innerHTML = document.baseURI + "<br>" + document.documentURI + "<br>" + document.URL;

for (const p of document.querySelectorAll("p.odd-paragraphs")) {
    console.log (p.textContent);
}

console.log(document.readyState);
console.log(document.scripts[0].src);
console.log(document.cookie);
console.log(document.domain);
console.log(document.referrer);
console.log(document.title);
// document.anchors
// document.links
// document.forms