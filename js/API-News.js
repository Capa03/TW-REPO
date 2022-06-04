async function news() {
    let url = 'https://newsapi.org/v2/top-headlines?country=pt&apiKey=b4db146479934660a4175b53b02d5d4d';

    const newsResponse = await fetch(url);
    const newsResponseJson = await newsResponse.json();
    const articles = newsResponseJson.articles;
    const body = document.getElementById("body")
    const date = new Date();
    document.getElementById("newsDate").innerHTML = date.toDateString() ;

    for (let i = 0; i < articles.length; i++) {

            let urlSite = articles[i].url;

            let divPostPreview = document.createElement("div")        
            divPostPreview.setAttribute("class","post-preview")
            body.appendChild(divPostPreview)
            //Link Site
            let a = document.createElement("a")
            a.setAttribute("href",urlSite)
            divPostPreview.appendChild(a)
            
            //Titulo
            let header = document.createElement("h2")
            header.setAttribute("class","post-title")
            header.textContent = articles[i].title
                a.appendChild(header)
            
            //Descrição
            let conteudo = document.createElement("h3")
            conteudo.setAttribute("class", "post-subtitle")
            conteudo.textContent = articles[i].description
                a.appendChild(conteudo)
            
            //Post by
            
            let postMeta = document.createElement("p")
            postMeta.setAttribute("class","post-meta")
            postMeta.innerHTML = "Post by "
            postMeta.innerHTML += `<a href="https://${articles[i].source.name}">"${articles[i].source.name}"</a>`
            divPostPreview.appendChild(postMeta)
        
            //Divider
            let divider = document.createElement("hr")
            divider.setAttribute("class","my-4")
            body.appendChild(divider)
            
    }
}

news()