const btnEl=document.getElementById('btn');
const emojiName=document.getElementById('emoji-name');

const emoji=[];

async function getEmoji(){
    let response= await fetch('https://emoji-api.com/emojis?access_key=30a879b4b04cfb15681f6b79115bd478643ffc0b')
    data= await response.json()

    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode:data[i].unicodeName,
        })
    }
}
getEmoji();



btnEl.addEventListener('click',()=>{
    const randomNum= Math.floor(Math.random()*emoji.length);
    btnEl.innerText=emoji[randomNum].emojiName;
    emojiName.innerText=emoji[randomNum].emojiCode;
})