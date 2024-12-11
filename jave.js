document.addEventListener("DOMContentLoaded", function () {
  const shoppingList = document.getElementById("shoppingList");
  const itemInput = document.getElementById("itemInput");
  const addItemBtn = document.getElementById("addItemBtn");
  const clearListBtn = document.getElementById("clearListBtn");
  const markPurchasedBtn = document.getElementById("markPurchasedBtn");

  let items = [];

  function createList() {
    shoppingList.innerHTML = "";
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      if (item.completed) {
        li.classList.add("competed");
      }
      li.addEventListener("click", () => {
        toggleCompleted(index);
      });
      shoppingList.appendChild(li);
    });
  }

  function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
      items.push({ name: itemName, completed: false });
      createList();
      itemInput.value = "";
    }
  }

  function markAllPurchased() {
    items.forEach((item) => {
      item.completed = true;
    });
    createList();
  }

  addItemBtn.addEventListener("click", addItem);
  clearListBtn.addEventListener("click", () => {
    items = [];
    createList();
  });

  markPurchasedBtn.addEventListener("click", markAllPurchased);
});
