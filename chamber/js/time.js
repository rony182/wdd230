

let previusVisit= Number(window.localStorage.getItem('visits-ls'));

// let myStorage=window.localStorage;
// const lastDate=myStorage.getTime(),
//       today= new Date();


// const msInDay=1000*60*60*24;

// let difference=Math.round((today-lastDate)/msInDay);
document.getElementById('time-ago').textContent=previusVisit;