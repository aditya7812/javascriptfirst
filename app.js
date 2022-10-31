//836
//393

function togglefullscreen() {
    btn.requestFullscreen();
}

async function refreshPage() {
    await window.location.reload();
    await btn.requestFullscreen();
}

const sectionCenter = document.querySelector(".slide");

const btn = document.querySelector("body");

sectionCenter.addEventListener("click", togglefullscreen)
const refreshBTN = document.querySelector(".refbtn");
refreshBTN.addEventListener("click", refreshPage);

window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(dataa);
  
  });

  function diplayMenuItems(menuItems) {

  

  let displayMenu = menuItems.map(function (item) {
    console.log(item);
    let playerName = item.playerName;
    console.log(playerName);
    let playerSrc = playerName.split(" ");

    if (item.end) {
        console.log("Virat");

        
            
        
       
        return `<div class="parent child end">
                    ${item.playerName}
        </div>`
        
    };
    

   return `<div class="parent">
                <div class="child child1 child5">
                    <div class="flag">
                          <img src="${"./country/" + item.countryname + ".png"}" alt="${item.countryname}" srcset=""> 
                        
                        
                    </div>
                    <div class="countryname">${item.countryname}</div>
                    <div class="pentagon">
                    </div>
                 </div>

                 <div class="child box2">
                     <div class="name">${item.playerName}</div>
                    <div class="runs">
                        ${item.runs}
                    </div>
                 </div>

                 <div class="child box3">
                    <div class="player">
                        <img src=${playerSrc[0]}${"%20"}${playerSrc[1]}${".png"} alt="" srcset="">
                    
                    </div>
                </div>

       </div>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);
 


  sectionCenter.innerHTML = displayMenu;
  
};

const dataa = [
    {
        playerName : "Virat Kohli",
        runs: "50",
        countryname: "India",
        
    },

    {
        playerName : "New Zealand",
        runs: "10990",
        countryname: "New Zealand",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Suryakumar Yadav",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Hazratullah Zazai ",
        runs: "10",
        countryname: "India",
    },

    {
        playerName : "brendon mccullum",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Yuvraj Singh",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    {
        playerName : "Rohit Sharma",
        runs: "10990",
        countryname: "India",
    },

    /*{
        playerName : "Like",
        end: true,

    },

    {
        playerName : "Share",
        end: true,

    },

    {
        playerName : "Subscribe",
        end: true,

    },

    {
        playerName : "Comment",
        end: true,

<img src=${item.countryname}${".png"} alt=${item.countryname}  />
    },*/
];