document.getElementById('btn').onclick = function() {
	let input = document.getElementById('todo__input').value;
	let list = document.getElementById('todo__list');
	let li = document.createElement('li');
	li.id = 'listItem';
	li.style.display = 'flex';
	if(input == "") {
		alert("Пожалуйста, введите задание!");
	}else {
		list.appendChild(li);
	}
	let checkbox = document.createElement('input');
	checkbox.id = 'todo__checkbox';
	checkbox.type = 'checkbox';
	li.appendChild(checkbox);
	let text = document.createElement('label');
	text.id = 'todo__txt';
	text.innerText = input;
	li.appendChild(text);
	let dataField = document.getElementById('todo__date');
	let data = document.createElement('label');
	data.id = 'date';
	let date = new Date(dataField.value);
	data.innerHTML = date.getDate()+'.'+date.getMonth()+'.'+date.getFullYear();
	li.appendChild(data);
	let deleteBtn = document.createElement('button');
	deleteBtn.id = 'deletebtn';
	deleteBtn.innerHTML="<i class='fas fa-trash-alt'></i>";
	deleteBtn.onclick = function() {
	let li = this.parentNode;
	let ul = li.parentNode;
	ul.removeChild(li);
	}
	li.appendChild(deleteBtn);
}

let input = document.getElementById('todo__input');
let add = document.getElementById('btn');
input.addEventListener("keyup", function(event) {
	event.preventDefault();
	if(event.keyCode === 13){
		add.click();
	}
});

let deleteAll = document.getElementById('btn1');
deleteAll.onclick = function() {
	let task = document.getElementById('todo__list');
	while (task.childElementCount) {
		task.removeChild(task.firstChild);
	}
}
