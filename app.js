document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  //OPEN xhr; true - do asynchronus action
  xhr.open("GET", "data.txt", true);

  // Optional - Used for spinners
  xhr.onprogress = function() {
    console.log("READY STATE", xhr.readyState);
  };
  xhr.onload = function() {
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.querySelector(
        "#output"
      ).innerHTML = `<h5> Reading from Text file. </h5><h1>${
        this.responseText
      } </h1>`;
    }
  };

  xhr.onerror = function() {
    console.log("Request error ...");
  };
  xhr.send();
}
