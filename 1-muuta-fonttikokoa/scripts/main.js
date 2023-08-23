const button = document.getElementById("font-size-button");
const currentSize = document.getElementById("current-size");

const fontSizes = ["16px", "20px", "24px", "28px", "32px"];
let index = 0;

const updateFontSize = () => {
    currentSize.textContent = fontSizes[index];

}

updateFontSize();

button.onclick = () => {
    console.log("Button was clicked!");

    const list = document.getElementById("font-size-list");

    if (index < fontSizes.length - 1)
    {
        index++;
    }
    else {
        index = 0;
    }

    list.style.fontSize = fontSizes[index];

    console.log(`Font size was changed to ${fontSizes[index]}`)

    updateFontSize();

}



