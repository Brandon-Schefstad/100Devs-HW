const contestants = document.querySelectorAll('#contestants')

const nikki = document.querySelector('#hidden')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(){
	if(click.target.classList.contains('#hidden' || 'winner')){
		console.log('done')
		nikki.classList.toggle('hidden')
	}else{
		alert('Wrong!');
	}
}
