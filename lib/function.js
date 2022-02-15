export function getRandomNews(allnews){
    let news;
    try {
        news = Object.values(allnews.results);
    }catch{
        news = {error:'request limit reached! Please wait one minute'};
    }

    let randomNews = [];

    if(news.error == undefined){
        for (let x = 0; x < 3; x++){
            const randomValue = Math.floor((Math.random() * news.length));
            if(randomNews.includes(news[randomValue]) == false && randomValue >= 2){
                randomNews.push(news[randomValue]);
            }else{
                x=x-1
            }
        }
        return{
            randomNews
        }
    }else{
        randomNews.push(news);
        return{
            randomNews
        }
    }
}