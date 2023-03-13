let API_URL = "https://640f1f4a4ed25579dc467831.mockapi.io";
let HTML_Response = document.querySelector("#api__content");


fetch(`${API_URL}/Destinies`)
  .then((response) => response.json())
  .then((Destinies) => {
    let template = Destinies.map((destiny) =>
      `<div class="card">
  <div class="card__image">
    <img class="card__img" src="${destiny.destinyImage}" alt="">
  </div>
  <div class="card__info">
    <p class="card__info--name">${destiny.destinyName}</p>
    <p class="card__info--description">${destiny.destinyInfo}</p>
  </div>
  <a class="card__cta" href="destiny.html"><span class="visually-hidden">See Hotel</span></a>
</div>`);
    HTML_Response.innerHTML = `${template}`;
  });