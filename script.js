gsap.from(".hero-details h1,.hero-details h2", {
    opacity: 0,
    duration: 2,
    stagger: 1
})
gsap.from("nav ul li", {
    duration: 1,
    stagger: .2,
    y: -200,
    opacity: 0
})
gsap.from(" .hero-details button ", {
    opacity: 0,
    y: 10,
    duration: 1,
    stagger: .6

})
gsap.from(".About-left img ", {
    scrollTrigger: {
        trigger: ".About-left img ",
        scroller: "body",
        start: "top 20%",
        end:"top 0",
        scrub:0.5

    },
    y: 20,
    opacity: 0,
    duration: 2,
})
gsap.from(".about-right h1 ", {
    scrollTrigger: {
        trigger: ".About-left img ",
        scroller: "body",
        start: "top 20%",
        end:"top 50%",
        scrub:1
    },
    x: 100,
    opacity: 0,
    duration: 2,

})
gsap.from(".hero-Img",{
    x:100,
    duration:1,
    opacity:0
})
gsap.from(".about-right P ", {
    scrollTrigger: {
        trigger: ".About-left img ",
        scroller: "body",
        start: "top 20%",
        end:"top 50%",
        scrub:2
    },
    x: 100,
    opacity: 0,
    duration: 4,

})
gsap.from(" .about-right button ", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".About-left img ",
        scroller: "body",
        start: "top 20%",
        end:"top 50%",
        scrub:2
    },
    y: 10,
    duration: 1,
    stagger: .6,
    

})
let main = document.querySelector("#about");
let cursor = document.querySelector(".particals");


main.addEventListener("mousemove", function (ME) {
    {
        gsap.to(cursor, {
            x: ME.x,
            y: ME.y,
            transition:"0s",
            
        })
    }
})
gsap.from(" .projects-box ", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".projects-box ",
        scroller: "body",
        start: "top 60%",
        end:"bottom 80%",
        scrub:.5

    },
    y: 10,
    duration: 1,
    stagger: .6,
    

})
