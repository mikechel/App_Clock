let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let dia = document.getElementById('data');
let data = document.getElementById('dia');
let mes = document.getElementById('mes');
let ano = document.getElementById('ano');

setInterval(()=>{
  let currentTime = new Date();
  hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000);

let currentTime = new Date();
let day = currentTime.getDay();
let month = (currentTime.getMonth()) + 1;
let year = currentTime.getFullYear();


const diaSemana = (day)=>{
  if (day == 1){
    return "Sedunda-Feira"
  }else if (day == 2 ){
    return "Terça-Feira"
  }else if (day == 3 ){
    return "Quarta-Feira"
  }else if (day == 4 ){
    return "Quinta-Feira"
  }else if (day == 5 ){
    return "Sexta-Feira"
  }else if (day == 6 ){
    return "Sabado"
  }else if (day == 7 ){
    return "Domingo"
  }
}
const mesAno = (month)=>{
  if (month == 1){
    return "Janeiro"
  }else if (month == 2 ){
    return "Fevereiro"
  }else if (month == 3 ){
    return "Março"
  }else if (month == 4 ){
    return "Abril"
  }else if (month == 5 ){
    return "Maio"
  }else if (month == 6 ){
    return "Junho"
  }else if (month == 7 ){
    return "Julho"
  }else if (month == 8 ){
    return "Agosto"
  }else if (month == 9 ){
    return "Setembro"
  }else if (month == 10 ){
    return "Outubro"
  }else if (month == 11 ){
    return "Novembro"
  }else if (month == 12 ){
    return "Dezembro"
  }
}
dia.innerHTML = diaSemana(day);
data.innerHTML = currentTime.getDate();
mes.innerHTML = mesAno(month);
ano.innerHTML = year;

