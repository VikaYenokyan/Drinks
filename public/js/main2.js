async function getResponse() {
    let responce = await fetch('https://api.punkapi.com/v2/beers');
    let content = await responce.json();
    let content2 = [...content];
    
    console.log(content);
    
    let list = document.querySelector(".results__wrapper");
    const inputs = document.querySelector("input");
    let searchResult = document.querySelector(".search__results__error");

    let key;
    let result = [];
    let i;
    let price, price2, flag=0;
    
    content = content.splice(0, 5);
    list.innerHTML +=`
    <a href="/" class="header__shopping-link">
        <img src="./img/left.png" alt="Left">
    </a>
    `;
        for (key in content) {
            price = content[key].ibu - 0.01;
            if (key == 0){
                list.innerHTML  += `
            <div class="item">
                <div class="info">
                    <div class="info__back"></div>
                    <div class="info__content">
                      <div class="container"><img src="${content[key].image_url}" alt="item1" class="result__item-pic"></div>
                      <div class="info__title">
                      ${content[key].name}
                      </div>
                      <div class="info__text">
                      ${content[key].description}
                      </div>
                      <div class="info__price">
                        <div>
                            abv: 
                            ${content[key].abv}
                        </div>
                        <div>
                            $
                            ${price}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            `;
            } else {
                list.innerHTML  += `
                <div class="item">
                <div class="info">
                    <div class="info__back"></div>
                    <div class="info__content">
                      <div class="container"><img src="${content[key].image_url}" alt="item1" class="result__item-pic"></div>
                      <div class="info__title">
                      ${content[key].name}
                      </div>
                      <div class="info__text">
                        ${content[key].description}
                      </div>
                    </div>
                </div>
            </div>
            `;
            }
            
        }
    list.innerHTML +=`
        <a href="/" class="header__shopping-link">
            <img src="./img/right.png" alt="Left">
        </a> 
    `;
    inputs.addEventListener("input", function (event){
        /* console.log(event.target.value); */
        list.innerHTML =``;
        i = 0;
        console.log(content2);
        let result2 = content2.filter((item) => item.tagline.toLowerCase().indexOf(event.target.value.toLowerCase()) > 0);
        /* for (let key in content2){
            console.log('content2');

            if(content2[key].tagline.toLowerCase().indexOf(event.target.value.toLowerCase()) === -1) {
                
                // сделать что-то, если 'mozilla'
                // не является частью этой строки
              } else {
                result[i] = key;
                console.log(content2[key].tagline);
                i++;
                // сделать что-то, если 'mozilla'
                // является частью этой строки
              }
        } */
        if (!result2.length){
            searchResult.innerHTML = `
                    &nbsp;&nbsp;There is no results
                `;
        } else {
            searchResult.innerHTML = ``;
        }
        /* console.log(result);
        console.log('i =');
        console.log(i); */
        result = result2.splice(0, 5);
        list.innerHTML +=`
        <a href="/" class="header__shopping-link">
            <img src="./img/left.png" alt="Left">
        </a>
        `;
        result.forEach(function(item, index) {
            price2 = item.ibu - 0.01;
            if (index == 0){
                list.innerHTML  += `
            <div class="item">
                <div class="info">
                    <div class="info__back"></div>
                    <div class="info__content">
                      <div class="container"><img src="${item.image_url}" alt="item1" class="result__item-pic"></div>
                      <div class="info__title">
                      ${item.name}
                      </div>
                      <div class="info__text">
                      ${item.description}
                      </div>
                      <div class="info__price">
                        <div>
                            abv: 
                            ${item.abv}
                        </div>
                        <div>
                            $
                            ${price2}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            `;
            } 
            else {
            list.innerHTML  += `
            <div class="item">
                <div class="info">
                    <div class="info__back"></div>
                    <div class="info__content">
                      <div class="container"><img src="${item.image_url}" alt="item1" class="result__item-pic"></div>
                      <div class="info__title">
                      ${item.name}
                      </div>
                      <div class="info__text">
                      ${item.description}
                      </div>
                    </div>
                </div>
            </div>
            `;}
        });
        
            list.innerHTML +=`
                <a href="/" class="header__shopping-link">
                    <img src="./img/right.png" alt="Left">
                </a> 
                `;
        
        
    });
   
}
getResponse();

