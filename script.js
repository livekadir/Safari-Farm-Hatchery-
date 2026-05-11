function toggleMenu(){

let menu=document.getElementById('navLinks');

if(menu.style.display==='flex'){
menu.style.display='none';
}else{
menu.style.display='flex';
}

}

function openPopup(title,text){

document.getElementById('popupBox').style.display='flex';
document.getElementById('popupTitle').innerText=title;
document.getElementById('popupText').innerText=text;

}

function closePopup(){
document.getElementById('popupBox').style.display='none';
}

function toggleAI(){

let box=document.getElementById('aiBox');

if(box.style.display==='flex'){
box.style.display='none';
}else{
box.style.display='flex';
}

}

function sendAI(){

let input=document.getElementById('aiInput');
let text=input.value.trim();

if(text==='') return;

let chat=document.getElementById('aiChat');

chat.innerHTML+=`<div class="user-msg">${text}</div>`;

let lower=text.toLowerCase();

let reply='Ask me about chicks, prices, incubators or Safari Farm.';

if(lower.includes('silkie')){
reply='Silkie chicks available. Price ₹70-₹100. Minimum order 100.';
}
else if(lower.includes('sultan')){
reply='Sultan chicks available. Price ₹70-₹100. Minimum order 100.';
}
else if(lower.includes('brahma')){
reply='Brahma chicks available. Price ₹1000-₹1200.';
}
else if(lower.includes('sonali')){
reply='Sonali chicks available. Price ₹20-₹30.';
}
else if(lower.includes('desi')){
reply='Desi chicks available. Price ₹30-₹60.';
}
else if(lower.includes('quail')){
reply='Quail chicks available. Price ₹10-₹15.';
}
else if(lower.includes('turkey')){
reply='Turkey chicks available. Price ₹100-₹170.';
}
else if(lower.includes('kadaknath') || lower.includes('karaknath')){
reply='Kadaknath chicks available. Price ₹40-₹70.';
}
else if(lower.includes('location')){
reply='West Bengal, Malda, Sujapur, Baranagar Danga Station Road Near Al Amin Mission.';
}
else if(lower.includes('contact')){
reply='Call 7063482623 or Email rifatsahin000@gmail.com';
}
else if(lower.includes('delivery')){
reply='Delivery support available for bulk orders.';
}
else if(lower.includes('incubator')){
reply='Automatic incubators available with digital control.';
}

chat.innerHTML+=`<div class="bot-msg">🤖 ${reply}</div>`;

chat.scrollTop=chat.scrollHeight;

input.value='';

}