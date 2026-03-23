// Selectors to perform search
let cards = document.querySelector(".cards")
let searchButton = document.querySelector("#search-button")
let displayText = document.querySelector("#display-text")
let searchInput = document.querySelector("#search-input")

// Sample data to populate cards
let studentData = [
    ["Priya", "85%", "11th", "Delhi"],
    ["Rohan", "78%", "10th", "Mumbai"],
    ["Sneha", "92%", "12th", "Chandigarh"],
    ["Amit", "74%", "9th", "Pune"],
    ["Kavya", "88%", "11th", "Jaipur"],
    ["Manish", "81%", "10th", "Lucknow"],
    ["Neha", "95%", "12th", "Bangalore"],
    ["Vikas", "69%", "9th", "Patna"],
    ["Simran", "90%", "11th", "Hyderabad"],
    ["Arjun", "77%", "10th", "Kolkata"],
    ["Meera", "83%", "12th", "Indore"],
    ["Sahil", "72%", "9th", "Nagpur"],
    ["Ananya", "89%", "11th", "Surat"],
    ["Rahul", "80%", "10th", "Noida"],
    ["Divya", "91%", "12th", "Gurgaon"],
    ["Karan", "76%", "9th", "Bhopal"],
    ["Pooja", "87%", "11th", "Agra"],
    ["Aditya", "93%", "12th", "Kanpur"]
];

// Click event listerner on Search button
searchButton.addEventListener("click", () => {
    let searchText = document.querySelector("#search-input").value.toLowerCase()
    let results = studentData.filter(row =>
        row[0].toLowerCase().includes(searchText)
    )
    cards.innerHTML = ""
    results.forEach(item => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `  <div class="name">Student Name : <span id="name">${item[0]}</span> </div>
                <div class="marks">Marks : <span id="marks">${item[1]}</span> </div>
                <div class="class">Class : <span id="class">${item[2]}</span> </div>
                <div class="address">Address : <span id="address">${item[3]}</span> </div>`
        cards.appendChild(card)
    })
})


// Additional even listener that triggers upon input change making the search more efficient
searchInput.addEventListener("input", () => {
    let searchText = document.querySelector("#search-input").value
    displayText.innerHTML = searchText;
    let results = studentData.filter(row =>
        row[0].toLowerCase().includes(searchText.toLowerCase())
    )
    cards.innerHTML = ""
    results.forEach(item => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `  <div class="name">Student Name : <span id="name">${item[0]}</span> </div>
                <div class="marks">Marks : <span id="marks">${item[1]}</span> </div>
                <div class="class">Class : <span id="class">${item[2]}</span> </div>
                <div class="address">Address : <span id="address">${item[3]}</span> </div>`
        cards.appendChild(card)
    })
})

// Code to populate cards dynamically
studentData.forEach(item => {
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `  <div class="name">Student Name : <span id="name">${item[0]}</span> </div>
                <div class="marks">Marks : <span id="marks">${item[1]}</span> </div>
                <div class="class">Class : <span id="class">${item[2]}</span> </div>
                <div class="address">Address : <span id="address">${item[3]}</span> </div>`
    cards.appendChild(card)
})