// invite button
const addGuestButton = document.querySelector(".invite");
//console.log(addGuestButton.outerHTML); //<button class="invite">Invite</button>

// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
//console.log(guestInputLabel.outerHTML); //<label for="invite">Add Guest</label>

// text input box
const guestInput = document.querySelector(".add-guest input");
//console.log(guestInput.outerHTML); //<input type="text" id="invite"></input>

// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
//console.log(guestList.outerHTML); //<ul class="guest-list"></ul>

// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
//console.log(guestCount.outerHTML); //<span class="attendance">0</span>

// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//console.log(guestFull.outerHTML);
//<div class="alert hide">
//          <h3>Guest list is full!</h3>
//          <button class="assign"><a href="#assigned">Assign dishes!</a></button>
//       </div> 


const assignButton = document.querySelector(".assign");
console.log(assignButton.outerHTML); // <button class="assign"><a href="#assigned">Assign dishes!</a></button>


const assignedItems = document.querySelector(".assigned-items");
console.log(assignedItems); //<ul class="assigned-items"></ul>

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;


    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

const clearInput = function () {
    guestInput.value = "";
};

const addToList = function (guest) {
    let listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const potluckItmes = ["Biriyani", "Fried-Rice", "Raita", "Chicken-65", "Shawarma", "Mutton Kola", "Pulav", "Appalam", "Kheer", "Bread-Halva", "Laddu", "Coconut-Barfi"]
    const allGuests = document.querySelector(".guest-list li");

    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItmes [randomPotluckIndex];
        let listItem = document.createElement("li");

        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
    };
};
