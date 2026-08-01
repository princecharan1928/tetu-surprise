const openBtn = document.getElementById("openBtn");
const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

openBtn.addEventListener("click", () => {
    loader.classList.add("hidden");
    main.classList.remove("hidden");
});

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    alert("❤️ I Love You So Much Tetu 😘 ❤️\n\nYours,\nPrince 🌹");
});
