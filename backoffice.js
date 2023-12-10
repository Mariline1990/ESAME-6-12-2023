const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

const id = new URLSearchParams(window.location.search).get("myid");

window.addEventListener("DOMContentLoaded", () => {
  if (id) {
    fetch(endpoint + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNDRlYWZlMDMxZTAwMTliYTE4YjQiLCJpYXQiOjE3MDIwNTMwOTgsImV4cCI6MTcwMzI2MjY5OH0.fr7mhkd-nlnSfTsq7gDqnZPppGCkR7Q4J-bs0P61MKE",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((valueImput) => {
        const { brand, name, description, price, imageUrl } = valueImput;
        document.getElementById("brand").value = brand;
        document.getElementById("modello").value = name;
        document.getElementById("descrizione").value = description;
        document.getElementById("prezzo").value = price;
        document.querySelector("#basicurl").value = imageUrl;

        const removeButton = document.getElementById("backOfficeBtn");
        removeButton.remove();

        const editButton = document.getElementById("nodeButton");
        editButton.innerHTML = `<button type="submit" class="btn btn-success px-5" id="backOfficeBtn"">Modifica</button>`;
      });
  }
});
const url = id ? endpoint + id : endpoint;
const putOrpost = id ? "PUT" : "POST";

const handleSubmit = (event) => {
  event.preventDefault();

  const newItem = {
    brand: document.getElementById("brand").value,
    name: document.getElementById("modello").value,
    description: document.getElementById("descrizione").value,
    price: document.getElementById("prezzo").value,
    imageUrl: document.querySelector("#basicurl").value,
  };
  fetch(url, {
    method: putOrpost,
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNDRlYWZlMDMxZTAwMTliYTE4YjQiLCJpYXQiOjE3MDIwNTMwOTgsImV4cCI6MTcwMzI2MjY5OH0.fr7mhkd-nlnSfTsq7gDqnZPppGCkR7Q4J-bs0P61MKE",
    },
  })
    .then((rest) => rest.json())
    .then((createAlert) => {
      window.location.assign("./catalog.html");
      if (id === null) {
        alert(createAlert.name + " " + "aggiunto alla lista"),
          (document.getElementById("brand").value = ""),
          (document.getElementById("modello").value = ""),
          (document.getElementById("descrizione").value = ""),
          (document.getElementById("prezzo").value = ""),
          (document.querySelector("#basicurl").value = "");
      } else {
        alert(createAlert.name + " " + "modificato");
      }
    });
};
