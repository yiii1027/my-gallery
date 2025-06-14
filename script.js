function createCard(url) {
  const card = document.createElement("div");
  card.className = "stamp-card";
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "stamp";
    img.className = "stamped";
    img.onerror = () => {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    };
    card.appendChild(img);
  } else {
    const placeholder = document.createElement("div");
    placeholder.style.width = "100%";
    placeholder.style.height = "100%";
    placeholder.style.background = "transparent";
    card.appendChild(placeholder);
    card.classList.add("empty");
  }
  return card;
}

function updatePage() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".page.right");

  left.style.backgroundImage = `url("left.jpg")`;
  right.style.backgroundImage = `url("right.jpg")`;

  while (left.firstChild) {
    left.removeChild(left.firstChild);
  }
  while (right.firstChild) {
    right.removeChild(right.firstChild);
  }

  const leftGrid = document.createElement("div");
  leftGrid.className = "grid-container";

  const rightGrid = document.createElement("div");
  rightGrid.className = "grid-container";

  for (let i = 0; i < 4; i++) {
    const leftIndex = pageIndex * 8 + i;
    const rightIndex = pageIndex * 8 + 4 + i;

    const leftUrl = imageUrls[leftIndex] || null;
    const rightUrl = imageUrls[rightIndex] || null;

    leftGrid.appendChild(wrapCardWithLike(createCard(leftUrl)));
    rightGrid.appendChild(wrapCardWithLike(createCard(rightUrl)));
  }

  left.appendChild(leftGrid);
  right.appendChild(rightGrid);
}