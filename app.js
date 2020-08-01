console.log("hello")
// d5948baa64a442f9983fc40815ebcfbc
//grab the news container
let newsAccord = document.getElementById("newsAccord")
let apiKey = 'd5948baa64a442f9983fc40815ebcfbc'
// let sources = 'bbc-news'

//create a get reqst 
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(articles)
        let newsHtml = "";


        articles.forEach(function (element, index) {

            console.log(element, index)

                let news = `<div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                ${element.title}
                            </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                        data-parent="#newsAccord">
                        <div class="card-body">
                        ${element.content}<span>&nbsp;</span><a href='${element.url}' target="_blank">Read more<a>
                        </div>
                    </div>
                </div>`
            newsHtml += news;
        });
        newsAccord.innerHTML = newsHtml;
    }
    else {
        console.log('Some error occured');
    }
}

xhr.send()

search=document.getElementById('searchTxt')
search.addEventListener('input',function(){
   let inputval=search.value.toLowerCase();; 
    console.log(inputval);
    let card =document.getElementsByClassName("card")
    Array.from(card).forEach(function(element){
        let newsInput=element.getElementsByTagName("h2")[0].innerText
        if(newsInput.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})
// `<div class="card">
//             <div class="card-header" id="heading${index}">
//                 <h2 class="mb-0">
//                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                     aria-expanded="false" aria-controls="collapse${index}">
//                    <b>Breaking News ${index+1}:</b> ${element["title"]}
//                 </button>
//                 </h2>
//             </div>

//             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                 <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
//             </div>
//         </div>`;
