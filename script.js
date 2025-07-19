// Sample research data (to be moved to research.json later)
const researchData = [
    {
        title: "Basket of 3 stocks!",
        image: "Basket_of_3_stocks.png",
        description: `
            Here is my latest research on Basket of three value stocks (ONGC, Crompton, National Aluminium).
            <br><br><strong>Key Findings:</strong> Basket of 3 stocks currently trading at 784.15 which looks like (ii) of 3rd another high can take this basket to 1450 to 1550 levels. 
            <br><strong>Conclusion:</strong> This basket looks good assuming fair aluminium and oil prices in future with dividend play. 
        `
    },
    {
        title: "Another Higher high loading??",
        image: "Ong.png", // New image file
        description: `
            Technical Analysis on ONGC.
            <br><br><strong>Overview:</strong> Weekly chart analysis on ONGC.
            <br><strong>Key Findings:</strong> By looking at multiple time frames it's showing base formation and bottoming out signal. 
            <br><strong>Conclusion:</strong> Expecting another higher high with good dividend play and PSU backing.(Crude oil prices rising due to demand supply tensions)
        `
    }
];

// Function to render research items
function renderResearch() {
    const container = document.getElementById('research-container');
    researchData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'research-item';
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.title}">
        `;
        container.appendChild(div);
    });
}

// Call the render function when the page loads
window.onload = renderResearch;

// Optional: Future-proof with JSON fetch (uncomment and adjust path when ready)
// fetch('research.json')
//     .then(response => response.json())
//     .then(data => {
//         researchData = data;
//         renderResearch();
//     })
//     .catch(error => console.error('Error loading research data:', error));