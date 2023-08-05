const calendar = document.querySelector('#calendar');
const output = document.querySelector('#calendar-output');
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
let date = calendar.valueAsDate;

calendar.addEventListener('input', ()=>{
	date = calendar.valueAsDate;
	output.innerHTML = '';
	
	createCalendar();


	});

function createCalendar(){
	for(let i = -1; i < 8; i++){
		let localDate = new Date();
		localDate.setDate(date.getDate() + i);
		const day = document.createElement('p');
		day.textContent = WEEKDAYS[localDate.getUTCDay()];
		const daynum = document.createElement('p');
		daynum.textContent = localDate.getDate();
		const container = document.createElement('div');
		daynum.classList.add('calendar-num');
		container.appendChild(day);
		container.appendChild(daynum);
		output.appendChild(container);
	}
	output.childNodes[1].classList.add('current');
	output.childNodes[1].classList.add('marked');
	output.childNodes[5].classList.add('marked');
}
createCalendar();
