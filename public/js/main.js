fetch('https://api.punkapi.com/v2/beers')
    .then(function (text) {
        return text.json();
    })
/*     .then((text) => {
        console.log(text.map((item) => {
            return { name: item.name, description: item.description, img: item.image_url, abv: item.abv };
        }));

        console.log(text[10].name);
    }); */
    .then((text) => {
        const tt = text.map((item) => {
            return { name: item.name, description: item.description, img: item.image_url, abv: item.abv };
        });
        console.log(tt);
        document.addEventListener("DOMContentLoaded", function (tt) {
            let images = document.querySelectorAll(".result__item-pic");
            /* inputs[0].addEventListener("change", function (event){
                console.log(event.target.value);
            }) */
            console.log(images[0].innerHTML=`
            <img src="${tt.img[0]}" class="result__item-pic">`

            );
/*             for (let i=0; i<5; i++){
                images[i].innerHTML =`
                <img src=${tt.img} class="result__item-pic">`
            }; */
        });
    });

/* console.log(item);
 */
/*  document.querySelectorAll(".header"); */
let numbers = Math.random();
document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".header");
    console.log(headers[0].innerHTML =`
    <div class="info__text">
        ${numbers}
    </div>`);
});


/* document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input");
    inputs[0].addEventListener("change", function (event){
        console.log(event.target.value);
    })
}); */
