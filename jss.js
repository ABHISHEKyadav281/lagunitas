function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
   
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}
init()
gsap.to("#imgs", {
    scrollTrigger: {
        trigger: "#imgs",
        scroller: "#main",
        scrub: true,
        // markers: true,
        start: "top 2%",
        end: "top -15%"
    },
    rotation: 0
})
gsap.to("#imgs", {
    scrollTrigger: {
        trigger: "#imgs",
        scroller: "#main",
        scrub: true,
        start: "top -310%",
        end: "top -345%"
    },
    scale: 1
})
gsap.to("#imgs", {
    scrollTrigger: {
        trigger: "#imgs",
        scroller: "#main",
        scrub: 0,

        start: "top -340%",
        end: "top -340%"
    },
    opacity: 0
})


gsap.from("#bottle", {
    scrollTrigger: {
        trigger: "#imgs",
        scroller: "#main",
        scrub: 0,

        start: "top -340%",
        end: "top -340%"
    },
    opacity: 0
})