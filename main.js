gsap.registerPlugin(ScrollTrigger);
// const stripes = document.getElementsByClassName("stripe");
// setTimeout(() => {
// 	for (i = 0; i < stripes.length; i++) {
// 		stripes[i].classList.add("stripe-animation" + i);
// 	}
// 	document.querySelector(".loader").style.display = "none";
// }, 3000);
setTimeout(() => {
	gsap.to(".spinner", {
		opacity: 0,
		delay: 0.75,
		duration: 1,
	});
	gsap.to(".loader1", {
		y: "100vh",
		duration: 2.5,
		ease: "power4.in",
	});

	gsap.to(".loader2", {
		y: "-100vh",
		duration: 2.5,
		ease: "power4.in",
	});
}, 1000);

gsap.to(".scrolldown", {
	scrollTrigger: {
		trigger: "#about",
		start: "top center",
	},
	opacity: "0",
	duration: 0.5,
});

gsap.to(".about-skills-bg", {
	scrollTrigger: {
		trigger: ".about-skills",
		start: "top 90%",
		end: "top 90%",
		toggleActions: "play none none pause",
	},
	opacity: 1,
	duration: 0.5,
	ease: "power1.out",
});
gsap.from(".about-skills-ul>li", {
	scrollTrigger: {
		trigger: ".about-skills",
		start: "top 90%",
		end: "top 90%",
		toggleActions: "play none none pause",
	},
	opacity: 0,
	y: -30,
	delay: 0.5,
	duration: 1,
	stagger: 0.2,
});

gsap.to(".about-design-bg", {
	scrollTrigger: {
		trigger: ".about-design-bg",
		start: "top 90%",
		end: "top 90%",
		toggleActions: "play none none pause",
	},
	delay: 0.5,
	opacity: 1,
	duration: 0.5,
	ease: "power1.out",
});

gsap.from(".about-design-p", {
	scrollTrigger: {
		trigger: ".about-design-bg",
		start: "top 90%",
		end: "top 90%",
		toggleActions: "play none none pause",
	},
	opacity: 0,
	x: -100,
	delay: 1,
	duration: 1,
	stagger: 0.3,
});

gsap.to(".projects-title-bg", {
	scrollTrigger: {
		trigger: ".projects-title-bg",
		start: "top 90%",
		end: "top 90%",
		toggleActions: "play none none pause",
	},
	delay: 0.5,
	opacity: 1,
	duration: 1,
	ease: "power1.out",
});

let contactMainAnim = gsap.timeline({
	scrollTrigger: {
		trigger: ".contact-bg",
		start: "top 90%",
		end: "top 90%",
		toggleActions: "play none none pause",
	},
});

contactMainAnim
	.to(".contact-bg", {
		delay: 0.5,
		opacity: 1,
		duration: 0.5,
		ease: "power1.out",
	})
	.from(".contact-p", {
		opacity: 0,
		y: -30,
		duration: 1,
		stagger: 0.3,
		ease: "power1.out",
	})
	.to(".contact-underline", {
		width: "100%",
		duration: 0.4,
		ease: "sine",
	});

let contactMailAnim = document.querySelector(".contact-mail-animation");
let hoverContact = gsap.timeline();
hoverContact
	.to(contactMailAnim, {
		width: "105%",
		border: "1px solid #f2f2f2",
		duration: 0.75,
		ease: "power1.inOut",
	})
	.to(contactMailAnim, {
		height: "100%",
		duration: 0.75,
		ease: "power1.inOut",
	})
	.to(contactMailAnim, {
		border: "3px solid #f2f2f2",
		duration: 0.08,
		ease: "power1.inOut",
	})
	.to(contactMailAnim, {
		background: "rgba(196, 13, 0, 0.5)",
		duration: 0.25,
		ease: "power1.inOut",
	});
hoverContact.pause();
document
	.querySelector(".contact-mail")
	.addEventListener("mouseenter", () => hoverContact.play());

document
	.querySelector(".contact-mail")
	.addEventListener("mouseleave", () => hoverContact.reverse());

// gsap.to(".stripe:nth-child(1)", {
// 	scrollTrigger: {
// 		trigger: "#projects",
// 		start: "top center",
// 		end: "top center",
// 		toggleActions: "play none reverse pause",
// 		// markers: true,
// 	},
// 	height: "15vh",
// 	duration: 1,
// 	ease: "power1.inOut",
// });

// gsap.to(".stripe:nth-child(2)", {
// 	scrollTrigger: {
// 		trigger: "#projects",
// 		start: "top center",
// 		end: "top center",
// 		toggleActions: "play none reverse pause",
// 		// markers: true,
// 	},
// 	height: "15vh",
// 	duration: 1.5,
// 	ease: "power1.inOut",
// });
// gsap.to(".stripe:nth-child(3)", {
// 	scrollTrigger: {
// 		trigger: "#projects",
// 		start: "top center",
// 		end: "top center",
// 		toggleActions: "play none reverse pause",
// 		// markers: true,
// 	},
// 	height: "15vh",
// 	duration: 2,
// 	ease: "power1.inOut",
// });
// gsap.to(".stripe:nth-child(4)", {
// 	scrollTrigger: {
// 		trigger: "#projects",
// 		start: "top center",
// 		end: "top center",
// 		toggleActions: "play none reverse pause",
// 		// markers: true,
// 	},
// 	height: "15vh",
// 	duration: 1.6,
// 	ease: "power1.inOut",
// });

// gsap.to(".stripe:nth-child(5)", {
// 	scrollTrigger: {
// 		trigger: "#projects",
// 		start: "top center",
// 		end: "top center",
// 		toggleActions: "play none reverse pause",
// 		// markers: true,
// 	},
// 	height: "15vh",
// 	duration: 0.8,
// 	ease: "power1.inOut",
// });
