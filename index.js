
function addItme() {
    var listElement = document.getElementById('list');
    var textItem = document.getElementById('newItem').value;

    var liElement = document.createElement('li');
    liElement.innerText = textItem;
    liElement.classList.add('new');
    liElement.addEventListener("click", function() {
        liElement.classList.add('done');
    });

    listElement.appendChild(liElement);
}