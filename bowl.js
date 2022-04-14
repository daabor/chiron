const tl = gsap.timeline({defaults: {duration:0.75,  ease: Elastic. easeOut.config( 0.7, 0.78)}})

tl.fromTo(".hero-people", {y:-600, opacity:0}, {y:0, opacity: 1})
tl.fromTo(".text-line", {y:-600, opacity:0}, {y:0, opacity: 1}, '<')


tl.fromTo(".main_bowl", {rotate:180, y:500, opacity:0}, {rotate:0, y:0, opacity: 1, ease: Back. easeOut.config(1.7)}, '<10%')
tl.from("path[id^='raddish']", { y:-1000, opacity:0}, '<70%')
tl.from("path[id^='beet']", { y:-900, opacity:0}, '<')
tl.from("path[id^='lettuce']", { y:-800, opacity:0}, '<')
tl.from("path[id^='spinach']", { y:-900, opacity:0}, '<')
tl.from("path[id^='potato']", { y:-800, opacity:0}, '<')

const bowl_hover = document.querySelector(".main_bowl");

bowl_hover.addEventListener("mouseover", () => {
    // add animation on hover
})


