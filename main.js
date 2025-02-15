
let soz = [
	'laziza',
	'madina',
	'zokirshoh',
	'umar',
	'saidazim',
	'begzod',
	'abdulmajid',
]

let randomSoz = soz[Math.floor(Math.random() * soz.length)];
const button = document.querySelector('button')
button.addEventListener('click', (event) => {
	event.preventDefault()

	const inputValue = document.getElementById('input')
	const message = document.getElementById('message')

	message.style.marginTop = '20px';
	if (inputValue.value === randomSoz) {
		message.innerText = "Tabriklaymiz! Siz g'olib bo'ldingiz."
		document.body.style.backgroundColor = 'green'
		document.body.style.color = 'white'
	} else {
		message.innerText = "Xato so'z kiritdingiz! Qaytadan urunib ko'ring."
		document.body.style.backgroundColor = 'red'
		document.body.style.color = 'white'

		setTimeout(() => {
			message.textContent = ''
			document.body.style.backgroundColor = 'white'
		}, 2000);
	}
	
	inputValue.value = '';
})



