window.addEventListener("DOMContentLoaded", () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNDRlYWZlMDMxZTAwMTliYTE4YjQiLCJpYXQiOjE3MDIwNTMwOTgsImV4cCI6MTcwMzI2MjY5OH0.fr7mhkd-nlnSfTsq7gDqnZPppGCkR7Q4J-bs0P61MKE",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((mobilePhone) => {
      const nodeList = document.getElementById("nodeList");
      mobilePhone.forEach((element) => {
        const listItem = document.createElement("li");
        nodeList.appendChild(listItem);
        listItem.classList.add("list-group-item", "justify-content-between", "align-items-center", "d-flex");
        listItem.innerHTML = `<img src="${element.imageUrl}" class="imgTel" />
      <span>${element.name}</span
      ><span class="badge  text-black ms-auto"
        >${element.price}</span
      ><button class="btn btn-outline-success"><a href="/details.html?idItem=${element._id}" class="link-underline-opacity-0">Scopri di più </a>  </button>
      `;
      });
    })
    .catch((error) => console.log(error));
});
