var search = document.querySelector(".button-search");

var popup = document.querySelector(".modal-search");

search.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
	}
	else {
		popup.classList.add("modal-show");
	}
});