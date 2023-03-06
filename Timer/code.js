setInterval(countdown, 1000);


const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");




const newYears = '31 Dec 2023';

function countdown()
{
	const newYearsDate  = new Date(newYears);
	const currentDate = new Date();
	
	const totalSeconds = (newYearsDate - currentDate)/1000;
	
	
	const seconds = Math.floor(totalSeconds%60);
	const minutes = Math.floor(totalSeconds/60)%60;
	const hours = Math.floor(minutes/60)%24;
	const days = Math.floor(totalSeconds/3600/24);
	
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minutesEl.innerHTML = minutes;
	secondsEl.innerHTML = seconds;
	
	
	console.log(days, hours, minutes, seconds);
	
	
}






