const lists = document.querySelectorAll(".list");
const listItems = document.querySelectorAll(".list-item");
let body = document;
let draggedItem = null;

// --- Drag and drop API

for (let a = 0; a < listItems.length; a++) {
  const item = listItems[a];
  item.addEventListener("dragstart", function (e) {
    draggedItem = item;
    setTimeout(() => {
      item.style.display = "none";
      body.style.cursor = "grab";
    }, 50);
  });
  item.addEventListener("dragend", function (e) {
    setTimeout(() => {
      item.style.display = "block";
      draggedItem = null;
      body.style.cursor = "initial";
    }, 50);
  });
  for (let b = 0; b < lists.length; b++) {
    const list = lists[b];
    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      list.style.backgroundColor = "rgba(255, 255, 255, 0.7";
    });
    list.addEventListener("dragleave", function () {
      list.style.backgroundColor = "rgba(88, 65, 83, 0.5)";
    });
    list.addEventListener("drop", function (e) {
      list.append(draggedItem);
      list.style.backgroundColor = "rgba(88, 65, 83, 0.5)";
    });
  }
}
