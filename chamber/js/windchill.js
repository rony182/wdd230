const temp=parseFloat(document.getElementById('degrees').textContent)
const wind=parseFloat(document.getElementById('wind-speed').textContent)

let wc=35.74+(0.6215*temp)-(35.75*Math.pow(wind, 0.16))+(0.4275*temp*Math.pow(wind, 0.16))
wc=Math.round(wc)
if (temp <=50 && wind >= 3) {
   document.getElementById('wind-chill').textContent='Wind Chill is '+wc+'° F';
} else {
  document.getElementById('wind-chill').textContent='Not available'
}