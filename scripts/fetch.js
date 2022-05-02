let searchNews= async (url)=>{
    try{
        let res= await fetch(url);
        let data= await res.json();
        console.log(data.articles);
        appendNews(data.articles)
    }catch(err){
        console.log("error", err)
    }
}

let appendNews= (data)=>{
    document.getElementById("results").innerHTML= null;
    data.forEach((el)=>{
        let box= document.createElement("div");
        box.class= "news"
        let image= document.createElement("img");
        image.id="image"
        let ti= document.createElement("h3");
        let des= document.createElement("p");
        ti.innerText= el.title;
        image.src= el.urlToImage;
        des.innerText= el.description;

        box.addEventListener("click", function(){
            openNews(el);
        })

        box.append(image, ti, des);
        document.getElementById("results").append(box)
    })
}

let openNews= (el)=>{
    let arr= [];
    arr.push(el.title)
    arr.push(el.urlToImage)
    arr.push(el.description)
    arr.push(el.content);

    localStorage.setItem("news", JSON.stringify(arr));
    window.location.href= "news.html"
}

let openDetails= (data)=>{
    let box1= document.createElement("box");
    let ti= document.createElement("h3");
    let im= document.createElement("img");
    im.id="image1";
    let de= document.createElement("p");
    let co= document.createElement("p");
    ti.innerText= data[0];
    im.src= data[1];
    de.innerText= data[2];
    co.innerText= data[3];
    box1.append(ti, im, de, co);
    document.getElementById("detailed_news").append(box1)

}
export { searchNews, appendNews, openDetails }