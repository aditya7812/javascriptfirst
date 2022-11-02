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
    //console.log(item);
    console.log(item.playerName);
   
    let countryFont;
    let playerFont;
    if (item.countryName.length > 9) {
        countryFont = "smallCountry";
    } else {
        countryFont = "bigCountry";
    }

    if (item.playerName.length > 14) {
        playerFont = "smallName";
    } else {
        playerFont = "bigName"
    }
    

   return `<div class="parent">
                <div class="child child1 child5">
                    <div class="flag">
                          <img src="${"./Country/" + item.countryName + ".png"}" alt="${item.countryName}" srcset=""> 
                        
                        
                    </div>
                    <div class="countryname ${countryFont}">${item.countryName}</div>
                    <div class="pentagon">
                    </div>
                 </div>

                 <div class="child box2">
                     <div class="name ${playerFont}">${item.playerName}</div>
                    <div class="runs">
                        ${item.sixes}
                    </div>
                 </div>

                 <div class="child box3">
                    <div class="player">
                        <img src="${"./Player/" + item.playerName + ".png"}" alt="" srcset="">
                    
                    </div>
                </div>

       </div>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);
 


  sectionCenter.innerHTML = displayMenu;
  
};

const dataa = [
    {"playerName":"Salman Butt","countryName":"Pakistan","sixes":"343"},
{"playerName":"Sanath Jayasurya","countryName":"Sri Lanka","sixes":"346"},
{"playerName":"Mohammad Rizwan","countryName":"Pakistan","sixes":"348"},
{"playerName":"Graeme Smith","countryName":"South Africa","sixes":"352"},
{"playerName":"Charith Asalanka","countryName":"Sri Lanka","sixes":"354"},
{"playerName":"Mahmudullah","countryName":"Bangladesh","sixes":"363"},
{"playerName":"Pathum Nissanka","countryName":"Sri Lanka","sixes":"368"},
{"playerName":"Misbah-ul-Haq","countryName":"Pakistan","sixes":"368"},
{"playerName":"Paul Stirling","countryName":"Ireland","sixes":"370"},
{"playerName":"Hashim Amla","countryName":"South Africa","sixes":"376"},
{"playerName":"Glenn Maxwell","countryName":"Australia","sixes":"392"},
{"playerName":"Quinton de Kock","countryName":"South Africa","sixes":"397"},
{"playerName":"Mohammad Shahzad","countryName":"Afghanistan","sixes":"402"},
{"playerName":"Mushfiqur Rahim","countryName":"Bangladesh","sixes":"402"},
{"playerName":"Jack Kallis","countryName":"South Africa","sixes":"433"},
{"playerName":"Alex Hales","countryName":"England","sixes":"434"},
{"playerName":"Michael Hussey","countryName":"Australia","sixes":"437"},
{"playerName":"Luke Wright","countryName":"England","sixes":"439"},
{"playerName":"Suresh Raina","countryName":"India","sixes":"453"},
{"playerName":"Aaron Finch","countryName":"Australia","sixes":"458"},
{"playerName":"Angelo Mathews","countryName":"Sri Lanka","sixes":"459"},
{"playerName":"Umar Akmal","countryName":"Pakistan","sixes":"486"},
{"playerName":"Mohammad Hafeez","countryName":"Pakistan","sixes":"511"},
{"playerName":"Tamim Iqbal","countryName":"Bangladesh","sixes":"514"},
{"playerName":"Gautam Gambhir","countryName":"India","sixes":"524"},
{"playerName":"Kamran Akmal","countryName":"Pakistan","sixes":"524"},
{"playerName":"MS Dhoni","countryName":"India","sixes":"529"},
{"playerName":"Marlon Samuels","countryName":"West Indies","sixes":"530"},
{"playerName":"Dwayne Bravo","countryName":"West Indies","sixes":"530"},
{"playerName":"Shane Watson","countryName":"Australia","sixes":"537"},
{"playerName":"Shahid Afridi","countryName":"Pakistan","sixes":"546"},
{"playerName":"Eoin Morgan","countryName":"England","sixes":"552"},
{"playerName":"Ross Taylor","countryName":"New Zealand","sixes":"562"},
{"playerName":"JP Duminy","countryName":"South Africa","sixes":"568"},
{"playerName":"Kevin Pietersen","countryName":"England","sixes":"580"},
{"playerName":"Kane Williamson","countryName":"New Zealand","sixes":"592"},
{"playerName":"Yuvraj Singh","countryName":"India","sixes":"593"},
{"playerName":"Martin Guptil","countryName":"New Zealand","sixes":"617"},
{"playerName":"Brendon McCullum","countryName":"New Zealand","sixes":"637"},
{"playerName":"Shoaib Malik","countryName":"Pakistan","sixes":"646"},
{"playerName":"Kumar Sangakkara","countryName":"Sri Lanka","sixes":"661"},
{"playerName":"Jos Butler","countryName":"England","sixes":"665"},
{"playerName":"AB de Villiers","countryName":"South Africa","sixes":"717"},
{"playerName":"Shakib-Al-Hasan","countryName":"Bangladesh","sixes":"742"},
{"playerName":"David Warner","countryName":"Australia","sixes":"781"},
{"playerName":"T Dilshan","countryName":"Sri Lanka","sixes":"897"},
{"playerName":"Rohit Sharma","countryName":"India","sixes":"921"},
{"playerName":"Chris Gayle","countryName":"West Indies","sixes":"965"},
{"playerName":"M Jayawardene","countryName":"Sri Lanka","sixes":"1016"},
{"playerName":"Virat Kohli","countryName":"India","sixes":"1065"}
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