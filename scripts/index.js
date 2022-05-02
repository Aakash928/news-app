// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar, sidebar } from "../components/nav.js";



document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#sidebar").innerHTML = sidebar();

let cato = document.querySelector("#sidebar").children;

function extra() {
    // console.log(this.id);
    fetchhome(this.id)
}
const fetchhome = async(ds) => {
    if (ds == undefined) {
        ds = 'in'
    } else {
        ds = ds;

    }
    const res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${ds}`);
    const data = await res.json();
    // console.log(data.articles)
    append(data.articles);
}
fetchhome();


let append = (data) => {
    document.querySelector("#results").innerHTML = null;
    data.forEach(({ title, description, urlToImage }) => {
        let box = document.createElement('div');
        box.setAttribute('class', 'news');
        let img = document.createElement('img');
        let p = document.createElement('h3');
        let des = document.createElement('p');
        img.src = urlToImage;
        p.innerText = title;
        des.innerText = description;
        box.append(img, p, des)
        document.querySelector("#results").append(box);
        var nes = {
            title,
            description,
            urlToImage
        }

        box.onclick = () => {
            localStorage.setItem('news', JSON.stringify(nes));
            window.location.href = "news.html";
        }

    })
}

for (let el of cato) {
    el.addEventListener('click', extra)
}

// search_input

let startsearch = async(e) => {
    if (e.key == "Enter") {
        let query = document.querySelector("#search_input").value;
        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        const data = await res.json();
        console.log(data);
        takestor(data.articles)
    }
}

let takestor = (data) => {

    // data.forEach(({ title, description, urlToImage }) => {
    //     var nes = {
    //         title,
    //         description,
    //         urlToImage
    //     }

    localStorage.setItem('search-news', JSON.stringify(data));
    window.location.href = "search.html";




}
document.querySelector("#search_input").addEventListener("keydown", startsearch);