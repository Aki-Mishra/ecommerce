

const sliderzButtonsWorkingfunc = () => {
    let productContainers = [...document.querySelectorAll('.product-container')];
    let nxtBtn = [...document.querySelectorAll('.next-btn')];
    let preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimenstions = item.getBoundingClientRect();
        let containerWidth = containerDimenstions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}
// let fetchDataAcToTags = (tags) => {
//     let data = fetch('/get-product', {
//         method: 'POST',
//         headers: new Headers({ 'Content-Type': 'application/json' }),
//         body: JSON.stringify({ tag: tags })
//     }).then((res) => res.json())
//     return data
// }


// const createProductCards = (data) => {
//     let productInnerHTML= '';
//     data.forEach(elm => {
//         productInnerHTML += ` 
//      <div class="product-card">
//             <div class="product-image">
//                 <span class="discount-tag">${elm.discountPrecent}% off</span>
//                 <img src="${elm.imagesPaths[0]}" alt="" class="product-thumbnail">
//                     <button class="whislist-btn"> Add to whishlist</button>
//             </div>
//             <div class="product-info">
//                 <p class="brand">${elm.productName}</p>
//                 <p class="product-line">${elm.shortDes}</p>
//                 <span class="price">${elm.sellingPrice}</span><span class="actual-price">${elm.actualPrice}</span>
//             </div>
//         </div>
//         `
//     })
//     return productInnerHTML
// }
// const createProductSliders = (data, parentClass, title) => {
//     let sliderConatiner = document.querySelector(`.${parentClass}`);
//     sliderConatiner.innerHTML = `
//     <section class="product">
//         <h2 class="category">${title} </h2>
//         <div class="product-container">
//             <button class="pre-btn"><img src="../img/arrow.png" class="arrow-image" alt=""></button>
//             <button class="next-btn"><img src="../img/arrow.png" class="arrow-image" alt=""></button>
//             ${createProductCards(data)}
//       </div>
//     </section>
//   `;
//     sliderzButtonsWorkingfunc();
// }
sliderzButtonsWorkingfunc();
fetch('https://cdn.rawgit.com/Aki-Mishra/ecommerce/main/data/product.json')
  .then(response => response.json())
  .then(data => {
    console.log(  data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
