function navbar() {
    return `
    <h1><a href="index.html">News</a></h1>
        <input type="text" id="search_input" placeholder="Search News">`
}

function sidebar() {
    return `
    <h1>Countries</h1>
    <h2 id="in">India</h2>
    <h2 id="ch">China</h2>
    <h2 id="us">Usa</h2>
    <h2 id="uk">United Kingdom</h2>
    <h2 id="nz">New Zealand</h2>`
}
export { navbar, sidebar };