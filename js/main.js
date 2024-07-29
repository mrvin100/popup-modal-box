/* Poppup show or hide when click submit button */

const submit = document.getElementById('submit'),
	  poppup = document.getElementById('poppup'),
	  cancel = document.getElementById('cancel')

if(submit){
	submit.addEventListener('click', () =>{
		poppup.classList.add('show')
		submit.classList.add('hide')
	})
}
if(cancel){
	cancel.addEventListener('click', () =>{
		poppup.classList.remove('show')
		submit.classList.remove('hide')
	})
}

