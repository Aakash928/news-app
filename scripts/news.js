// Ude Import export (MANDATORY)
// detailed_news 
//  title,
// description,
// urlToImage

import { navbar, sidebar } from "../components/nav.js";

document.querySelector("#navbar").innerHTML = navbar();



let getdata = JSON.parse(localStorage.getItem('news'));
console.log(getdata);
for (let key in getdata) {
    // console.log(getdata.title)
    var box = document.createElement('div');
    var img = document.createElement('img');
    var p = document.createElement('h3');
    var des = document.createElement('p');
    img.src = getdata.urlToImage;
    p.innerText = getdata.title;
    des.innerHTML = getdata.description;
    box.append(img, p, des);
}

document.querySelector("#detailed_news ").append(box)

// console.log(getdata);