fetch("https://raw.githubusercontent.com/localcatolico/localcatolico-oracoes/main/prayers.json")
  .then((res) => {
  return res.json();
})
.then((data) => prayers(data));

function prayers(data) {
  let prayers = "";
  for (var prayer of data.prayers) {
    if (prayer.enabled != "true"){ continue }

    prayers +=
      `<div class="accordion-item">
        <h2 class="accordion-header" id="` + prayer.id + `">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse` + prayer.id + `" aria-expanded="false" aria-controls=flush-collapse"` + prayer.id + `">
            ` + prayer.name + `
          </button>
        </h2>
        <div id="flush-collapse` + prayer.id + `" class="accordion-collapse collapse" aria-labelledby="` + prayer.id + `" data-bs-parent="#churchs">
          <div class="accordion-body">`
            for (var content of prayer.content) {
              prayers += `<p>` + content + `</p>`
            }
            prayers +=`
          </div>
        </div>
      </div>`;
  }

  document.getElementById("prayers").innerHTML = prayers;
}