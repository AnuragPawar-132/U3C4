// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML= navbar();
import { searchNews, appendNews } from "./fetch.js";

let q2= JSON.parse(localStorage.getItem("query"));
let url2= `https://masai-mock-api.herokuapp.com/news?q=${q2}`
searchNews(url2)


let assit1= (e)=>{
    if(e.key==="Enter"){
        myFun();
    }
}
let myFun= ()=>{
    let que= document.getElementById("search_input").value;
    let url= `https://masai-mock-api.herokuapp.com/news?q=${que}`;
    searchNews(url)
}

document.getElementById("search_input").addEventListener("keydown", assit1);

