const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const hexColor = document.querySelector("#hex");

const tooltip = document.createElement("span");
tooltip.classList.add("tooltip");
tooltip.textContent = "Click to Copy";
hexColor.appendChild(tooltip);

btn.addEventListener("click", () => {
    let randomHexColor = "#";
    for (let i = 0; i < 6; i++) {
        randomHexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    document.body.style.backgroundColor = randomHexColor;
    hexColor.textContent = randomHexColor;
    hexColor.style.color = randomHexColor;
    hexColor.appendChild(tooltip);
});

hexColor.addEventListener("click", () => {
    navigator.clipboard.writeText(hexColor.textContent.substring(0, 7));
    tooltip.textContent = "COPIED";
    setTimeout(() => {
        tooltip.textContent = "COPY CODE";
    }, 500);
});
