const toggle = document.querySelector(".dark-mode-toggle")
const main = document.querySelector("main")
toggle.addEventListener("click", () => {
    main.classList.toggle("toggle")
    document.body.classList.toggle("toggle")
})

const timeline = gsap.timeline({ default: { duration: 1 } })

timeline.from("main", { y: "-200vh" })
    .from(".followers-card", { opacity: 0, y: "200px", stagger: .2, ease: "power3.in" })
    .from(".overview-heading", { opacity: 0,y:"-10px", ease: "power3.in" })
    .from(".overview-card", { opacity: 0, y: "-100px", stagger: .1, ease: "power2.in" })
    .from(".attribution", { opacity: 0, y: "-10px", ease: "power2.in" })
    