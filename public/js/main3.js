async function getResponse() {
    let responce = await fetch('https://api.punkapi.com/v2/beers');
    let content = await responce.json();
    let content2 = [...content];
    let result2 = content;
    console.log(content);


    let list = document.querySelector(".ul");

    const inputs = document.querySelector("input");
    let searchResult = document.querySelector(".search__results__error");

    let key;
    let result = [];
    let i;
    let price, price2, flag = 0;
    let first = 1;


    let width = 260;
    let count = 1;
    let position = 0; // положение ленты прокрутки
    let next;
    var child, child_prev, child_next;

    let listElems = document.querySelectorAll("li");

    document.querySelector('.left').onclick = function () {
        position += width * count;
        position = Math.min(position, 0);
        list.style.marginLeft = position + 'px';
        if (first > 1) {
            next = first;
            first -= 1;

            child = document.querySelector('.item:nth-child('+first+')');
            child.classList.add("item__first");

            child_next = document.querySelector('.item:nth-child('+next+')');
            child_next.classList.remove("item__first");
            

        }
        console.log("влево ", first);
    };

    
    let prev;

    document.querySelector('.right').onclick = function () {
        position -= width * count;
        position = Math.max(position, -width * (result2.length - count));
        list.style.marginLeft = position + 'px';
        /* console.log(-width * (content.length - count)); */
        
        if (first < result2.length) {
            
            first += 1;
            prev = first - 1;

            child = document.querySelector('.item:nth-child('+first+')');
            child.classList.add("item__first");


            child_prev = document.querySelector('.item:nth-child('+prev+')');
            child_prev.classList.remove("item__first");
            /* child_prev.classList.add("item"); */
            console.log("URA");
            console.log(prev);
            console.log(first);
            
            
        }
        console.log("вправо ", first);
    };


    list.innerHTML = ``;
    for (key in content) {
        price = content[key].ibu - 0.01;
        if (key == first-1) {
            
            list.innerHTML += `
            <li class="item item__first">
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
            </li>
            `;
        } else {
            list.innerHTML += `
                <li class="item">
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
            </li>
            `;
        }
    }
    
    inputs.addEventListener("input", function (event) {
        /* console.log(event.target.value); */
        list.innerHTML = ``;
        i = 0;
        first=0;
        console.log(content2);
        result2 = content2.filter((item) => item.tagline.toLowerCase().indexOf(event.target.value.toLowerCase()) > 0);

        if (!result2.length) {
            searchResult.innerHTML = `
                    &nbsp;&nbsp;There is no results
                `;
        } else {
            searchResult.innerHTML = ``;
        }

        result = result2.slice(0, 5);
        result.forEach(function (item, index) {
            price2 = item.ibu - 0.01;
            if (index == first) {
                list.innerHTML += `
            <li class="item item__first">
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
            </li>
            `;
            }
            else {
                list.innerHTML += `
            <li class="item">
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
            </li>
            `;
            }
        });
    });

    position = 0; // положение ленты прокрутки
    list.style.marginLeft = position + 'px';
}
getResponse();

