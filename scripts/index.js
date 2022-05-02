// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
import { searchNews, appendNews } from "./fetch.js"
document.getElementById("navbar").innerHTML= navbar();

let url= `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

searchNews(url)

let cate= document.getElementById("sidebar").children;
function catesearch(){
    let url1= `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
    searchNews(url1)
}
for(let el of cate){
    el.addEventListener("click", catesearch)   
}

let assistF=(e)=>{
    if(e.key==="Enter"){
        assistFun()
    }
}
let assistFun= ()=>{
    let query= document.getElementById("search_input").value;
    localStorage.setItem("query", JSON.stringify(query));
    window.location.href= "search.html";
}
document.getElementById("search_input").addEventListener("keydown", assistF)
