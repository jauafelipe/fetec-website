const toggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const date=document.getElementById("date"),time=document.getElementById("time");
const today=new Date();const local=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split("T")[0];
date.min=local;date.value=local;
["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00"].forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;time.appendChild(o)});

const phone=document.getElementById("phone");phone.addEventListener("input",e=>{let v=e.target.value.replace(/\D/g,"").slice(0,11);if(v.length>10)v=v.replace(/^(\d{2})(\d{5})(\d{4}).*/,"($1) $2-$3");else if(v.length>6)v=v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,"($1) $2-$3");else if(v.length>2)v=v.replace(/^(\d{2})(\d{0,5}).*/,"($1) $2");e.target.value=v});

const form=document.getElementById("bookingForm"),modal=document.getElementById("modal"),confirmation=document.getElementById("confirmation");
form.addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("name").value.trim();const d=date.value.split("-").reverse().join("/");const t=time.value;confirmation.textContent=`Olá, ${name}! Sua solicitação para ${d} às ${t} foi registrada. Em um sistema real, a clínica poderá confirmar o horário automaticamente por WhatsApp ou e-mail.`;modal.classList.add("show");form.reset();date.value=local});
function close(){modal.classList.remove("show")}document.querySelector(".close").onclick=close;document.querySelector(".close-action").onclick=close;modal.addEventListener("click",e=>{if(e.target===modal)close()});
