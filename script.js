var crsr = document.querySelector("#curser");
var blur = document.querySelector("#curser-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav",{
backgroundColor: "black",
duration:0.5,
height:"100px",

scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:0.5
},
})

gsap.to("#main",{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -60%",
        scrub:1

    }
})

/* EFFECT ON ABOUT section */
gsap.from("#about,#aboutIn",{
  y:60,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    // ye markers bss show karta hai tumhare web mai ka se ka tak apply hora ye bss
    // markers:true,
    start:"top 90%",
    end:"top 88%",
    scrub:1
  }

})
gsap.from("#page4 h2",{
  y:60,
  scrollTrigger:{
    trigger:"#page4 h2",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 68%",
    scrub:3 
  }
})

gsap.from("#container",{
  y:60,
  opacity:0,
  duration:2,
  stagger:1,
  scrollTrigger:{
    trigger:".pic",
    scroller:"body",
    // ye markers bss show karta hai tumhare web mai ka se ka tak apply hora ye bss
    // markers:true,
    start:"top 90%",
    end:"top 88%",
    scrub:1
  }
})

gsap.from("#page3",{
  x:50,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    start:"top 50%",
    // markers:true,
    end:"top 48%",
    scrub:1
    
  }

})




var navH4= document.querySelectorAll("#nav h4");
navH4.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
  crsr.style.scale=3
  crsr.style.border="0.1px solid #fff"
  crsr.style.backgroundColor="transparent"
})

elem.addEventListener("mouseleave",function(){
  crsr.style.scale=1
  crsr.style.backgroundColor="#95c11e"
})
})