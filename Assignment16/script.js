// Selectors to perform search
let cardsDiv = document.querySelector(".cards")
let searchButton = document.querySelector("#search-button")
let displayText = document.querySelector("#display-text")
let searchInput = document.querySelector("#search-input")

// Sample data to populate cards
let studentData = [
    { "name": "Priya", "marks": "85%", "class": "11th", "address": "23, MG Road, Delhi" },
    { "name": "Rohan", "marks": "78%", "class": "10th", "address": "45, Andheri West, Mumbai" },
    { "name": "Sneha", "marks": "92%", "class": "12th", "address": "12, Sector 17, Chandigarh" },
    { "name": "Amit", "marks": "74%", "class": "9th", "address": "67, FC Road, Pune" },
    { "name": "Kavya", "marks": "88%", "class": "11th", "address": "89, MI Road, Jaipur" },
    { "name": "Manish", "marks": "81%", "class": "10th", "address": "34, Hazratganj, Lucknow" },
    { "name": "Neha", "marks": "95%", "class": "12th", "address": "56, Indiranagar, Bangalore" },
    { "name": "Vikas", "marks": "69%", "class": "9th", "address": "21, Boring Road, Patna" },
    { "name": "Simran", "marks": "90%", "class": "11th", "address": "78, Banjara Hills, Hyderabad" },
    { "name": "Arjun", "marks": "77%", "class": "10th", "address": "14, Park Street, Kolkata" },
    { "name": "Meera", "marks": "83%", "class": "12th", "address": "90, Vijay Nagar, Indore" },
    { "name": "Sahil", "marks": "72%", "class": "9th", "address": "33, Sitabuldi, Nagpur" },
    { "name": "Ananya", "marks": "89%", "class": "11th", "address": "55, Ring Road, Surat" },
    { "name": "Rahul", "marks": "80%", "class": "10th", "address": "11, Sector 62, Noida" },
    { "name": "Divya", "marks": "91%", "class": "12th", "address": "88, DLF Phase 3, Gurgaon" },
    { "name": "Karan", "marks": "76%", "class": "9th", "address": "29, MP Nagar, Bhopal" },
    { "name": "Pooja", "marks": "87%", "class": "11th", "address": "41, Tajganj, Agra" },
    { "name": "Aditya", "marks": "93%", "class": "12th", "address": "60, Kakadeo, Kanpur" }
]


// Function to render cards into DOM initially as well as upon searching
function renderCards(results) {
    newCards = results.map(item =>
        ` <div class="card"> <div class="name">Student Name : <span class="name">${item.name}</span> </div>
                <div class="marks">Marks : <span class="marks">${item.marks}</span> </div>
                <div class="class">Class : <span class="class">${item.class}</span> </div>
                <div class="address">Address : <span class="address">${item.address}</span> </div></div>`
    ).join("")
    cardsDiv.innerHTML = newCards
}

//  FUnction to call for populating cards
function populate() {
    let searchText = document.querySelector("#search-input").value
    displayText.innerHTML = searchText;
    let results = studentData.filter(row =>
        (row.name).toLowerCase().includes(searchText.toLowerCase())
    )
    cardsDiv.innerHTML = ""
    renderCards(results)
}

// Click event listener on Search button
searchButton.addEventListener("click", populate)
searchInput.addEventListener("input", populate)

// Code to populate cards dynamically using
renderCards(studentData)