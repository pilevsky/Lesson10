let first = document.querySelector(".first");
fetch("https://randomuser.me/api")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data.results[0]);
    first.innerHTML += `<img src =${data.results[0].picture.large} />`;
    first.innerHTML += `<h2>Имя: ${data.results[0].name.title} ${data.results[0].name.first}</h2>`;
    first.innerHTML += `<h2>Фамилия: ${data.results[0].name.last}</h2>`;
    first.innerHTML += `<h2>Номер телефона: ${data.results[0].cell}</h2>`;
    first.innerHTML += `<h2>Возраст: ${data.results[0].dob.age}</h2>`;
    first.innerHTML += `<h2>Возраст: ${data.results[0].email}</h2>`;
    first.innerHTML += `<h2>Гендер: ${data.results[0].gender}</h2>`;
    first.innerHTML += `<h2>ID: ${data.results[0].id.value}</h2>`;
  });

let second = document.querySelector(".second");
fetch("https://randomuser.me/api")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data.results[0]);
    second.innerHTML += `<img src =${data.results[0].picture.large} />`;
    second.innerHTML += `<h2>Имя: ${data.results[0].name.title} ${data.results[0].name.first}</h2>`;
    second.innerHTML += `<h2>Фамилия: ${data.results[0].name.last}</h2>`;
    second.innerHTML += `<h2>Номер телефона: ${data.results[0].cell}</h2>`;
    second.innerHTML += `<h2>Возраст: ${data.results[0].dob.age}</h2>`;
    second.innerHTML += `<h2>Возраст: ${data.results[0].email}</h2>`;
    second.innerHTML += `<h2>Гендер: ${data.results[0].gender}</h2>`;
    second.innerHTML += `<h2>ID: ${data.results[0].id.value}</h2>`;
  });

let third = document.querySelector(".third");
fetch("https://randomuser.me/api")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data.results[0]);
    third.innerHTML += `<img src =${data.results[0].picture.large} />`;
    third.innerHTML += `<h2>Имя: ${data.results[0].name.title} ${data.results[0].name.first}</h2>`;
    third.innerHTML += `<h2>Фамилия: ${data.results[0].name.last}</h2>`;
    third.innerHTML += `<h2>Номер телефона: ${data.results[0].cell}</h2>`;
    third.innerHTML += `<h2>Возраст: ${data.results[0].dob.age}</h2>`;
    third.innerHTML += `<h2>Возраст: ${data.results[0].email}</h2>`;
    third.innerHTML += `<h2>Гендер: ${data.results[0].gender}</h2>`;
    third.innerHTML += `<h2>ID: ${data.results[0].id.value}</h2>`;
  });
