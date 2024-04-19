const ulPosition = (position, arr) => {
  try {
    let ul = document.getElementById("ul-dom");
    let createLi = document.createElement("li");
    createLi.setAttribute("class", "nav-item");
    createLi.setAttribute("style", "margin-right:10px");

    let createButton = document.createElement("button");
    createButton.setAttribute("class", "btn btn-primary");
    createButton.innerText = position;

    createButton.addEventListener("click", (event) => {
      if (position === "All") {
        displayMain(arr);
      } else {
        let filter = arr.filter((a) => a.position === position);
        displayMain(filter);
      }
    });

    createLi.appendChild(createButton);
    ul.appendChild(createLi);
  } catch (e) {
    console.log("e ", e);
  }
};

const displaying = (arrs) => {
  let uniquePositions = [
    {
      position: "All",
    },
  ];
  for (let arr of arrs) {
    let find = uniquePositions.find((a) => a.position === arr.position);
    if (find === undefined) {
      if (arr.position) {
        uniquePositions.push(arr);
      }
    }
  }

  for (let uniquePosition of uniquePositions) {
    ulPosition(uniquePosition.position, arrs);
  }

  displayMain(arrs);
};

const displayMain = (arrs) => {
  let mainDisplay = document.getElementById("main-display");
  mainDisplay.innerHTML = "";
  for (let arr of arrs) {
    let column = document.createElement("div");
    column.setAttribute("class", "col");
    column.setAttribute("style", "width:200px;height:auto;padding:10px");


    let img = document.createElement("img");
    img.setAttribute("src", arr?.image);
    img.setAttribute("style", "width:200px;height:200px;border-radius:20px");

    let div = document.createElement("div");
    div.setAttribute("style", "font-weight:bold;font-size:18px");
    div.innerText = arr.name;

    let div1 = document.createElement("div");
    div1.setAttribute("style", "font-size:12px");
    div1.innerText = arr.position;

    column.appendChild(img);
    column.appendChild(div);
    column.appendChild(div1);
    mainDisplay.appendChild(column);
  }
};
