(function(){
	const BUTTON = document.querySelector(".burgerMenuButton")
	const MENU = document.querySelector(".primaryNavigation")

	BUTTON.addEventListener("click", clickHandler)

	function clickHandler() {
		MENU.classList.toggle("primaryNavigation--show")

		if (MENU.ariaHidden == "false") {
			MENU.setAttribute("aria-hidden", true)
		} else {
			MENU.setAttribute("aria-hidden", false)
		}
	}
})()
