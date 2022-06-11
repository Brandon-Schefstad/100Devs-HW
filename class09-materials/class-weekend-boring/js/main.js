document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day == "Sunday" || day == "Saturday"){
    alert("Weekend!")
}    else if (day == "Thursday" || day == "Tuesday"){
    alert("Boring!")
}   else{
    alert("Exciting!")
}
}
