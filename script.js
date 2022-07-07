const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const img = document.querySelector('#img')
const name = document.querySelector('.name-character')
const navBtn = document.querySelector('.menu-toggle')
const navtoggle = document.querySelector('.nav-toggle')


let dataIndex = 0

data = {
    "characters": [
        {
            "name": "Loid Forger",
            "description": " He has discarded everything about his past to work for his country as an undercover spy who acts under the codename Twilight. For his current mission, he is required to marry and have a child. Thus, he enters a marriage with Yor Briar and becomes the adoptive father of Anya Forger.",
            "image": "img/chara_loid_1.png"
        },
        {
            "name": "Anya Forger",
            "description": "Formerly known as Test Subject 007 , she is a telepath whose abilities were created in an experiment conducted by an unknown organization. She is a student in Cecile Hall at Eden Academy and the adopted daughter of Loid Forger and Yor Forger.",
            "image": "img/chara_anya_1.png"
        },
        {
            "name": "Yor Forger",
            "description": "While she works as an ordinary clerk at Berlint City Hall, she also leads a secret life as a Garden assassin with the code name 'Thorn Princess'. She and Loid Forger get married to fulfill their separate goals, with the former becoming the adoptive mother of Anya Forger.",
            "image": "img/chara_yor_1.png"
        }
    ]
}

loadChara(data.characters[dataIndex])

console.log(data)

function loadChara(song) {
    name.innerHTML = song.name.toUpperCase()
    img.src = `${song.image}`
}


function prevCharacter() {
    dataIndex--

    if (dataIndex < 0) {
        dataIndex = data.characters.length - 1
    }

    loadChara(data.characters[dataIndex])
}

function nextCharacter() {
    dataIndex = dataIndex + 1

    if (dataIndex > data.characters.length - 1) {
        dataIndex = 0
    }

    loadChara(data.characters[dataIndex])
}
 function show(){
     if (navtoggle.style.display === 'block'){
         navtoggle.style.display = 'none'
     }else{
         navtoggle.style.display = 'block'
     }
     
 }

//change
prevBtn.addEventListener('click', prevCharacter)
nextBtn.addEventListener('click', nextCharacter)


navBtn.addEventListener('click', show)
