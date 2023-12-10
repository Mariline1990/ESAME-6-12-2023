const params = new URLSearchParams(window.location.search);
const idItems = params.get("idItem");
const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = () => {
  fetch(url + idItems, {
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
    .then((item) => {
      const nodeList = document.querySelector(".detailNode");
      console.log(nodeList);
      nodeList.innerHTML = ` <h2 class="my-5 text-danger nomeProdotto">${item.name}</h2>
       <ul class="list-group" id="nodeList">
         <li class="list-group-item d-flex justify-content-center">
           <img src="${item.imageUrl}" class="imgTel" />
         </li>
         <li class="list-group-item d-flex justify-content-between">
           <strong class="span1">Brand</strong><strong class="span2">${item.brand}</strong>
         </li>
         <li class="list-group-item d-flex justify-content-between">
           <strong class="span1">Descrizione</strong><span class="span2">${item.description}</span>
         </li>
         <li class="list-group-item d-flex justify-content-between">
           <strong class="span1">prezzo</strong><span class="span2">${item.price}$</span>
         </li>
         <li class="list-group-item d-flex justify-content-between">
         <strong class="span1">createdAt</strong><span class="span2">${item.createdAt}</span>
         </li> <li class="list-group-item d-flex justify-content-between">
         <strong class="span1">upatedAt</strong><span class="span2">${item.updatedAt}</span>
         </li>
       
       </ul>
       <div class="d-flex justify-content-end">
       <button type="submit" class="btn btn-success px-5 my-3" onclick="editButton()">Modifica</button>
       <button type="submit" class="btn btn-danger px-5 mx-3 my-3 " onclick="deleted()" >Elimina</button>`;
    })
    .catch((error) => console.log(error));
};

const editButton = () => {
  window.location.assign("./backoffice.html?myid=" + idItems);
};
const deleted = () => {
  fetch(url + idItems, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNDRlYWZlMDMxZTAwMTliYTE4YjQiLCJpYXQiOjE3MDIwNTMwOTgsImV4cCI6MTcwMzI2MjY5OH0.fr7mhkd-nlnSfTsq7gDqnZPppGCkR7Q4J-bs0P61MKE",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((responseObj) => {
      window.location.assign("./catalog.html");
    });
};
