const mainElement = document.getElementById("main");
mainElement.remove();  // Removes the <main> element

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "YOUR-NAME is the champion"; // Replace 'YOUR-NAME' with your actual name

document.body.append(newHeader);
