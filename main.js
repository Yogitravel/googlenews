let newsList = []
const apiKey = "a7be96f9d0f54cb895dd865d8500fe04"
const loadNews = async () => {
    let url = `https://newsapi.org/v2/everything?q=yoga&page=1&pagesize=${pageSize}&apiKey=${apiKey}`
    let data = await fetch(url)
    let result = await data.json();
    newsList = result.articles
    render(newsList)
    console.log(result)

}

//tao 1 ham chua du lieu cua trang 2
// let total = hege.concat(stale); 


let pageSize = 20

function pageSize1() {
    pageSize += 20
    loadNews()
    document.getElementById("numberArticle").innerHTML = `No. of Articles:${pageSize}`
}
document.getElementById("numberArticle").innerHTML = `No. of Articles: ${pageSize}`




const render = (list) => {

    let newsHtml = list.map(item => `<div id="news">
     <div id="contentsArea">
        <div id="title">${item.title}</div>
        <div id="author"> ${item.author} </div>
        <div id="publishedAt">${publicTime(item.publishedAt)}</div>
        <div id="description"> ${item.description} </div>
        <div id="url"> <a href=${item.url}> Read More</a> </div>

      
     </div>
     <div id="imgArea">
         <img src="${item.urlToImage}" width=400/>

     </div>
  </div>`).join('')



document.getElementById("newsArea").innerHTML = newsHtml

}


loadNews()

//tao nut thoi gian  
function publicTime(time) {
    let newTime = time.toString().split("").splice(0, 10).join("")
    let newTime1 = newTime.replace("-", "")
    let newTime2 = newTime1.replace("-", "")
    console.log(newTime2)
    return moment(newTime2, "YYYYMMDD").fromNow()
}