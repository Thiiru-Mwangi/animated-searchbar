const searchBarContainerEl = document.querySelector(".searchbar-container");
const magnifyingGlassEl = document.querySelector(".magnifying-glass");

magnifyingGlassEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active")
})