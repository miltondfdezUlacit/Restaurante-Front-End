document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("grid-container");

    // Number of chairs
    const numChairs = 16;

    // Add chairs to the grid
    for (let i = 0; i < numChairs; i++) {
        const chairButton = document.createElement("button");
        chairButton.classList.add("chair-button");
        chairButton.innerHTML = `<i class="bi bi-slash-square"></i>`;
        
        // Create and append chair number
        const chairNumber = document.createElement("div");
        chairNumber.classList.add("chair-number");
        chairNumber.innerText = i + 1;
        chairButton.appendChild(chairNumber);

        gridContainer.appendChild(chairButton);
    }
});