let daynames = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];
let months =[
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();

let hour = d.getHours();
let minutes =d.getMinutes();
let seconds = d.getSeconds();



let fulldate = dayName + ', ' + monthName + ' ' +d.getDate() + ', ' + year + ', ' + hour + ':' + minutes + ':' + seconds;


document.getElementById('currentdate').textContent = fulldate;



try {
	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minutes: 'numeric',
		seconds: 'numeric'
	};
	document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
} catch (e) {
	alert('Error With code or your browser does not support Locale');
}