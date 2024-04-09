/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the arrayOne array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

//These are links to external resourses such as iamges stored in the internet.
//These are also used to establish links to other html files stored in the folder.

const sample_sombrero_url = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjJjbWY3MzNmMjFsb2p2ajN1NmtoY24wcXNvcG5ybXJpeDVvbTNzYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Oo8Ly1JXZjrqm54qK4/giphy.webp";
const sample_boot_url = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdicjZiZXpwZnNldWt2OG5yYXA4bjFvejYzcmh1YXEzbnN5YTY1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Obg5OueQjRgTVZ9nk4/giphy.gif";
const sample_sunglasses_url = "https://64.media.tumblr.com/9be64552a49fa39e79dc4a4833c9e66e/9e841a74d1efa458-92/s540x810/bc3c951522f4f01d29f1f68cac41c56e5ba21789.gifv";
const sombreros_website = "sombreros.html"
const boots_website = "boots.html"
const sunglasses_website = "sunglasses.html"
const sample_hammock_url = "https://i0.wp.com/f3southwake.com/wp-content/uploads/2019/10/tumblr_penjk6QSC11wzvt9qo2_500.gif?fit=500%2C268&ssl=1"
const hammocks_website = "hammocks.html"
const sample_pendnants_url = "https://cdn.shopify.com/s/files/1/0005/8946/3604/files/Cross_430x_8821509c-6271-4c1b-9dbb-5635c5e29cee_480x480.gif?v=1660142903"
const pendants_website = "pendants.html"
const sample_buckle_url = "https://img.texasmonthly.com/2022/12/long-live-belt-buckle.gif?auto=compress&crop=faces&fit=fit&fm=webp&h=0&ixlib=php-3.3.1&q=45&w=1820"
const buckle_website= "buckles.html"
const sample_loading_url = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGJ1ZzJhMmlndmNsNDA5NXNscm9wOGRwZHhydGhlN3pjcTUyOWw3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r6k2skexAWdxhfKY74/giphy.gif"
const loading_website =""

// Created a second Array to add a second container in which another set of items are displayed.
//arrayOne is used with the First Card Container
let arrayOne = [
    "Sombreros",
    "Sunglasses",
    "Boots",
];
//arrayTwo is used for the Second Card Container
let arrayTwo = [
    "Hammocks",
    "Pendants",
    "Belt Buckles",
];
//arrayThree is used for the Third Container
//This will accept user requests for future products
let arrayThree = [
    "Example",
];

//This will create an array of objects for the products shown in our catalog
const arrayOfObjects = [{name:"Retro1", color:"White", durability:"High", cost:"$49.99",  imgLink:"https://m.media-amazon.com/images/I/71UOleB-wuL._AC_SX679_.jpg"},
                        {name:"Retro2", color:"Brown", durability:"High", cost:"$49.99",  imgLink:"https://m.media-amazon.com/images/I/71UOleB-wuL._AC_SX679_.jpg"},
                        {name:"Retro3", color:"Black", durability:"High", cost:"$49.99",  imgLink:"https://m.media-amazon.com/images/I/71UOleB-wuL._AC_SX679_.jpg"}

];

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < arrayOne.length; i++) {
        let title = arrayOne[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        let imageweb = "";
        if (i == 0) {
            imageURL = sample_sombrero_url;
            imageweb = sombreros_website;
        } else if (i == 1) {
            imageURL = sample_sunglasses_url;
            imageweb = sunglasses_website;
        } else if (i == 2) {
            imageURL = sample_boot_url;
            imageweb = boots_website;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, imageweb); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
    const cardContainer2 = document.getElementById("card-container2");
    cardContainer2.innerHTML = "";
    const templateCard2 = document.querySelector(".card2");
    
    for (let i = 0; i < arrayTwo.length; i++) {
        let title = arrayTwo[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        let imageweb = "";
        if (i == 0) {
            imageURL = sample_hammock_url;
            imageweb = hammocks_website;

        } else if (i == 1) {
            imageURL = sample_pendnants_url;
            imageweb = pendants_website;
        } else if (i == 2) {
            imageURL = sample_buckle_url;
            imageweb = buckle_website;
        }

        const nextCard = templateCard2.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, imageweb); // Edit title and image
        cardContainer2.appendChild(nextCard); // Add new card to the container
    }
    const cardContainer3 = document.getElementById("card-container3");
    cardContainer3.innerHTML = "";
    const templateCard3 = document.querySelector(".card3");

    for (let i = 0; i < arrayThree.length; i++) {
        let title = arrayThree[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        let imageweb = "";
            imageURL = sample_loading_url;
            imageweb = "index.html";
        
        const nextCard = templateCard3.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, imageweb); // Edit title and image
        cardContainer3.appendChild(nextCard); // Add new card to the container
    } 
}

function editCardContent(card, newTitle, newImageURL,newImageweb) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";
    cardImage.href = newImageweb;

    const cardButton = card.querySelector("button");
    cardButton.addEventListener("click", function() {
        // Redirect to another webpage
        window.location.href = newImageweb; // Replace with the URL of the webpage you want to redirect to
    });

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);



function SubmitRecomendations() {
    arrayThree.length=0;
    showCards(); 
    alert("Recommendations Submitted");
}

function removeLastCard() {
    arrayThree.pop(); // Remove last item in arrayOne array
    showCards(); // Call showCards again to refresh
}



function addCard(){
    if(arrayThree.length>=3){
        alert("Please submit before adding more recomendations")
    } else if(document.getElementById("textbox").value==""){
        alert("No valid recomendation was inserted");
    }
        else{
    arrayThree.push(document.getElementById("textbox").value);
    showCards();
    }
}
function displayList() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear existing content
    
    // Loop through the array of objects
    arrayOfObjects.forEach(function(item) {
      // Create a new div element
      let div = document.createElement("div");
      // Set the text content of the div to display object properties
      div.textContent = "Name: " + item.name + ", Cost: " + item.cost;
      // Append the div to the output div
      outputDiv.appendChild(div);
    });
  }
totalcell=0;
  function addRowSombrero()
        {
            var table = document.getElementById("table1"),
                newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),
                model =document.getElementById("model").value,
                color =document.getElementById("color").value,
                quantity =document.getElementById("quantity").value;
        if (model == "Retro"){
            cost = 40
        } else if (model == "Modern"){
            cost = 50
        } else if (model == "Vintage"){
            cost = 60
        }
        cell1.innerHTML = model;
        cell2.innerHTML = color;
        cell3.innerHTML = quantity;
        amount = Math.round(cost* quantity);
        cell4.innerHTML = "$"+ amount;
        totalcell = totalcell + Math.round(cost* quantity);
        document.getElementById("totalSombrero").innerHTML= totalcell;
        }
        function AddRowSunglasses()
        {
            var table = document.getElementById("table1"),
                newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),
                model =document.getElementById("model").value,
                color =document.getElementById("color").value,
                quantity =document.getElementById("quantity").value;
        if (model == "Classic"){
            cost = 70
        } else if (model == "Square"){
            cost = 80
        } else if (model == "Navigator"){
            cost = 50
        }
        cell1.innerHTML = model;
        cell2.innerHTML = color;
        cell3.innerHTML = quantity;
        amount = Math.round(cost* quantity);
        cell4.innerHTML = "$"+ amount;
        totalcell = totalcell + Math.round(cost* quantity);
        document.getElementById("totalSunglasses").innerHTML= totalcell;
        }
        function AddRowBoots()
        {
            var table = document.getElementById("table1"),
                newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),
                model =document.getElementById("model").value,
                color =document.getElementById("color").value,
                quantity =document.getElementById("quantity").value;
        if (model == "Leather"){
            cost = 100
        } else if (model == "Western"){
            cost = 110
        } else if (model == "Cruiser"){
            cost = 120
        }
        cell1.innerHTML = model;
        cell2.innerHTML = color;
        cell3.innerHTML = quantity;
        amount = Math.round(cost* quantity);
        cell4.innerHTML = "$"+ amount;
        totalcell = totalcell + Math.round(cost* quantity);
        document.getElementById("totalBoots").innerHTML= totalcell;
        }
    function removeRowSunglasses()
    {
        document.getElementById("totalSunglasses").innerHTML= totalcell-amount;
         table1 = document.getElementById("table1");
         var rowCountt = table1.rowCount;
         table1.deleteRow(rowCountt-1);
         if (table1.rowCount==0){
             totalcell=0;
             document.getElementById("totalSunglasses").innerHTML= "0.00";
         }
    }
    function removeRowBoots()
    {
        document.getElementById("totalBoots").innerHTML= totalcell-amount;
         table1 = document.getElementById("table1");
         var rowCountt = table1.rowCount;
         table1.deleteRow(rowCountt-1);
         if (table1.rowCount==0){
             totalcell=0;
             document.getElementById("totalBoots").innerHTML= "0.00";
         }
    }
    function removeRow()
    {
        document.getElementById("totalSombrero").innerHTML= totalcell-amount;
         table1 = document.getElementById("table1");
         var rowCountt = table1.rowCount;
         table1.deleteRow(rowCountt-1);
         if (table1.rowCount==0){
             totalcell=0;
             document.getElementById("totalSombrero").innerHTML= "0.00";
         }
    }
    function submitRow()
    {
         table = document.getElementById("table1");
         var rowCount = table.rowCount;
         alert("Order Submitted");
         table.innerHTML="";
         totalcell=0;
         document.getElementById("totalSombrero").innerHTML= "0.00";
    }
    function submitRowSunglasses()
    {
         table = document.getElementById("table1");
         var rowCount = table.rowCount;
         alert("Order Submitted");
         table.innerHTML="";
         totalcell=0;
         document.getElementById("totalSunglasses").innerHTML= "0.00";
    }
    function submitRowBoots()
    {
         table = document.getElementById("table1");
         var rowCount = table.rowCount;
         alert("Order Submitted");
         table.innerHTML="";
         totalcell=0;
         document.getElementById("totalSunglasses").innerHTML= "0.00";
    }
