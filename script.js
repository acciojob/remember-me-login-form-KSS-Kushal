//your JS code here. If required.
const userNameHTML = document.getElementById("username");
const passwordHTML = document.getElementById("password");
const checkHTML = document.getElementById("checkbox");
const existingHTML = document.getElementById("existing");
const handleSubmit = (e) => {
	e.preventDefault();
	if(checkHTML.checked){
		localStorage.setItem('username', userNameHTML.value);
		localStorage.setItem('password', passwordHTML.value);
	}else{
		localStorage.clear();
	}
	alert(`Logged in as ${userNameHTML.value}`);
	existingHTML.style.display = 'inline-block';
	userNameHTML.value = "";
	passwordHTML.value = "";
	checkHTML.checked = false;
}

existingHTML.addEventListener("click", ()=>{
	alert(`Logged in as ${localStorage.getItem('username')}`);
})
