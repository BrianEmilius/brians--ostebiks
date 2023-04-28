(function() {
	const FORM = document.querySelector(".siteFooter__contactForm")

	FORM.addEventListener("submit", submitHandler)

	function validate(element) {
		if (element.type === "submit"
				|| element.type === "button"
				|| element.type === "reset") {
					return
		}

		const FEEDBACK = element.parentElement.nextSibling.nextSibling
		FEEDBACK.innerText = ""

		if (element.required && !element.value) {
			FEEDBACK.innerText = "Dette felt må ikke være tomt."
			return
		}

		if (element.type === "email") {
			if (element.value.includes("@")
					&& element.value.split("@").length === 2) {
				if (element.value.indexOf("@") === 0
						|| element.value.indexOf("@") === element.value.length - 1) {
							FEEDBACK.innerText = "Skriv en gyldig email."
							return
						}
			} else {
				FEEDBACK.innerText = "Skriv en gyldig email."
				return
			}
		}
	} // validate slutter her

	function submitHandler(event) {
		event.preventDefault()

		Array.from(event.target)
			.forEach(element => validate(element))
	}

	const includeSymbol = (string, symbol) => string.includes(symbol)
	const tooManyAts = string => string.split("@").length > 1
	const hasIllegalAt = string => string.indexOf("@") === 0 || string.indexOf("@") === string.length - 1
})()