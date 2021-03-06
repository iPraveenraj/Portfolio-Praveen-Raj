const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Troubleshooting",
				weight: 11
			}, {
				text: "css3",
				weight: 9
			}, {
				text: "Debugging",
				weight: 13
			}, {
				text: "html5",
				weight: 9
			}, {
				text: "programming",
				weight: 8
			}, {
				text: "python",
				weight: 10
			}, {
				text: "C++",
				weight: 9
			}, {
				text: "Problem solving",
				weight: 9.8
			}, {
				text: "Easily adoptable",
				weight: 10
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2400; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am training to become a Full-Stack Web Developer.", "love everything about code.", "am currently learning JAVASCRIPT.", "solve problems😀."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
