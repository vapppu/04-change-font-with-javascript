const button = document.getElementById("font-style-button");
const currentStyle = document.getElementById("current-style");


const fontStyles = ["Courier New", "Roboto", "Mansalva", "Grenze", "Turret Road"];
let index = 0;

const updateFontStyle = () => {
    currentStyle.textContent = fontStyles[index];
}

updateFontStyle();

button.onclick = () => {
    console.log("Button was clicked!");

    const list = document.getElementById("font-size-list");

    index = (index + 1) % (fontStyles.length); // Luuppaa listaa ympäri

    list.style.fontFamily = fontStyles[index];

    console.log(`Font style was changed to ${fontStyles[index]}`)

    updateFontStyle();

}



