gsap.to("#imgs",{
    scrollTrigger:{
    Trigger:"#imgs",
    scroll:"#main",
    scrub:true,
    start:"top 2%",
    end:"top -15%"
},
rotation: 0
})
gsap.to("#imgs",{
    scrollTrigger:{
    Trigger:"#imgs",
    scroll:"#main",
    scrub:true,
    start:"top -310%",
    end:"top -345%"
},
scale:1
})
gsap.to("#imgs",{
    scrollTrigger:{
    Trigger:"#imgs",
    scroll:"#main",
    scrub:0,
    
    start:"top -340%",
    end:"top -340%"
},
opacity: 0
})


gsap.from("#bottle",{
    scrollTrigger:{
    Trigger:"#imgs",
    scroll:"#main",
    scrub:0,
    
    start:"top -340%",
    end:"top -340%"
},
opacity: 0
})