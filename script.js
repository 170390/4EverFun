function mostrar(id){
let sec=document.querySelectorAll(".seccion");
sec.forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

document.addEventListener("DOMContentLoaded", ()=>{
mostrar('vision');
});
