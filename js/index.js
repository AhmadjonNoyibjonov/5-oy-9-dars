
const wrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");
const flags = document.querySelectorAll(".flag_img");

function createCard(user) {
  return `<div class="card">
    <img class="flag_img" src="${user.flag}" alt="">
    <h2>${user.country}</h2>
    <h2>${"Kodi: " + user.code}</h2>
    <h2>${"id: " + user.id}</h2>
</div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/all-countries", {
    method: "GET",
  })
    .then(function (response) {
      if (response.status >= 200 && response.status <= 300) {
        return response.json();
      }
    })
    .then(function (data) {
      data.length > 0 &&
        data.forEach((value) => {
          const card = createCard(value);
          wrapper.innerHTML += card;
          loading.style.display = "none";
        });

      const images = document.querySelectorAll(".flag_img");
      images.forEach(function (value) {
        value.onclick = mode;
        function mode() {
          if (value.check) {
            this.style.transform = "scale(1,1)";
          } else {
            this.style.transform = "scale(2.5,2.5)";
          }

          value.addEventListener("click", function () {
            this.style.transform = "scale(1,1)";
          });
        }
      });
    })
    .catch(function (err) {
      console.log(err);
    });
});
