function toggleMenu(){

let menu=document.getElementById('navLinks');

if(menu.style.display==='flex'){
menu.style.display='none';
}else{
menu.style.display='flex';
}

}

function toggleAI(){

let box=document.getElementById('aiBox');

if(box.style.display==='flex'){
box.style.display='none';
}else{
box.style.display='flex';
}

}

function sendMessage(){

let input=document.getElementById('userInput');
let text=input.value.trim();

if(text==='') return;

let chat=document.getElementById('chatArea');

chat.innerHTML+=`<div class="user-msg">${text}</div>`;

let lower=text.toLowerCase();

let reply='Ask me about chicks, incubators, prices, delivery or Safari Farm.';

if(lower.includes('silkie')){
reply='🐔 Silkie chicks available. Price ₹70-₹100. Minimum order 100. Soft fluffy decorative breed.';
}
else if(lower.includes('sultan')){
reply='🐔 Sultan chicks available. Royal white premium breed. Price ₹70-₹100.';
}
else if(lower.includes('brahma')){
reply='🐔 Brahma chicks available. Giant heavy breed. Price ₹1000-₹1200.';
}
else if(lower.includes('sonali')){
reply='🐔 Sonali chicks available. Commercial farming breed. Price ₹20-₹30.';
}
else if(lower.includes('desi')){
reply='🐔 Desi chicks available. Natural immunity breed. Price ₹30-₹60.';
}
else if(lower.includes('quail')){
reply='🐔 Quail chicks available. High egg production bird. Price ₹10-₹15.';
}
else if(lower.includes('turkey')){
reply='🐔 Turkey chicks available. Heavy premium farming breed. Price ₹100-₹170.';
}
else if(lower.includes('kadaknath') || lower.includes('karaknath')){
reply='🐔 Kadaknath chicks available. Black meat medicinal breed. Price ₹40-₹70.';
}
else if(lower.includes('incubator')){
reply='🥚 Automatic incubators available with digital temperature control and automatic egg turning.';
}
else if(lower.includes('delivery')){
reply='🚚 Delivery support available for bulk orders.';
}
else if(lower.includes('location')){
reply='📍 West Bengal, Malda, Sujapur, Baranagar Danga Station Road Near Al Amin Mission.';
}
else if(lower.includes('contact') || lower.includes('number')){
reply='📞 Contact: 7063482623\n📧 Email: rifatsahin000@gmail.com';
}
else if(lower.includes('farm')){
reply='🏡 Safari Farm & Hatchery provides healthy vaccinated chicks, incubators, farming guidance and premium hatchery support.';
}
else if(lower.includes('bangla') || lower.includes('bengali')){
reply='🐔 Safari Farm এ premium chicks, incubator এবং delivery support পাওয়া যায়।';
}
else if(lower.includes('hindi')){
reply='🐔 Safari Farm me premium chicks, incubator aur delivery support available hai.';
}

chat.innerHTML+=`<div class="bot-msg">${reply}</div>`;

chat.scrollTop=chat.scrollHeight;

input.value='';

}

function showDetails(title,text){

document.getElementById('popup').style.display='flex';
document.getElementById('popupTitle').innerText=title;
document.getElementById('popupText').innerText=text;

}

function closePopup(){

document.getElementById('popup').style.display='none';

}