fetch('/unite/js/committee.json')
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(data => {
    const tableBody = document.querySelector("#committeeTable tbody");
    
    data.committee.forEach(member => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${member.title}</td>
            <td>${member.name || "Vacant"}</td>
            <td>${member.tel || "N/A"}</td>
            <td>${member.email || "N/A"}</td>
        `;
        tableBody.appendChild(row);
    });
})
.catch(error => console.error("Error loading JSON:", error));