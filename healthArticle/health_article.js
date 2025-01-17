var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function(){
    var articles = xhr.response.articles;
    var divarticles=document.getElementById('articles');
    
    articles.forEach(function(article){
        var divarticle=document.createElement('div');
        divarticle.classList.add('article');
    
        var title=document.createElement('h2')
        title.textContent=article.title;
    
        var description=document.createElement('p');
        description.textContent=article.description;
    
        var waytoacheive=document.createElement('h3');
        waytoacheive.textContent='Way to Acheive';
        var wayslist=document.createElement('ul');
        article.ways_to_achieve.forEach(function(way){
            var wayslistItem=document.createElement('li');
            wayslistItem.textContent=way;
            wayslist.appendChild(wayslistItem);
        });
    
        var benefitHeader=document.createElement('h3');
        benefitHeader.textContent="Benefits:"
        var benefitlist=document.createElement('ul');
        article.benefits.forEach(function(benefit){
            var benefitlistItem=document.createElement('li');
            benefitlistItem.textContent=benefit;
            benefitlist.appendChild(benefitlistItem);
        });
    
        divarticle.appendChild(title);
        divarticle.appendChild(description);
        divarticle.appendChild(waytoacheive);
        divarticle.appendChild(wayslist);
        divarticle.appendChild(benefitHeader);
        divarticle.appendChild(benefitlist);
        divarticles.appendChild(divarticle);    
    
    });

}

xhr.send();



