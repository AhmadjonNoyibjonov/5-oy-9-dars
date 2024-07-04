// let n = true;

// let promise = new Promise(function(resolve,reject) {
//     setInterval(function() {
//         if(n) {
//             resolve("Mavjud ekan")
//         } else{
//             reject("mavjud emas ekan");
//         }
//     },3000)
// });

// promise
//         .then(function(a) {
//             console.log(a);
//         })
//         .catch(function(b) {
//             console.log(b);
//         })
//         .finally(function() {
//             console.log("muvaffaqqiyatli bajarildi");
//         })

// async function test() {
//     return "Hello"
// }

// console.log(test());

// let a;

// try {
//   console.log(33,b);
// } catch (error) {
//   console.log(35, error);
// }

const wrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");
// const flags = document.querySelectorAll(".flag_img");

function createCard(user) {
  return `<div class="card">
    <img src="${user.flag}" alt="">
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
    })
    .catch(function (err) {
      console.log(err);
    });
});

const flags = document.querySelectorAll(".flag_img");
flags.forEach(function (value) {
    check.onclick = width;
    function width() {
        if (value.checked) {
            this.style.transform = "scale(1.5, 1.5)";
        } else {
            this.style.transform = "scale(0,0)"
        }
    }
});


