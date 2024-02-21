function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
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
loco();

function page1Animation(){
  Shery.mouseFollower();
    var tl = gsap.timeline()
    tl.from("nav",{
        opacity:0,
        duration:0.8,
    },"s")
    tl.from("#page1 h1",{
        opacity:0,
        duration:0.8,
        ease: "expo.inOut",

    },"s")
    tl.from("#page1 img",{
        opacity:0,
        duration:0.8,
        ease: "expo.inOut",

    },"s")
    tl.from("#page1 #text h2",{
        opacity:0,
        duration:0.8,
        ease: "expo.inOut",

    },"s")
    tl.from("#page1 #text h3",{
        opacity:0,
        duration:0.8,
        ease: "expo.inOut",

    },"s")
    

    var move = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0%",
        end:"top -100%",
        // markers:true,
        scrub:3,
     }
  })
  move.to("#page1 #move",{
     transform:"translate(-80%)",
  },"anim")
  move.to("#page1 #text h2 ",{
     x:"-140%"
  },"anim")
  move.to("#page1 #text h3 ",{
    x:"150%"
 },"anim")
  move.to("#page1 .img1",{
    y:"-75%"
  },"anim")
  move.to("#page1 .img2",{
    y:"-75%"
  },"anim")
  move.to("#page1 .img3",{
    y:"-75%"
  },"anim")
  move.to("#page1 .img4",{
    y:"-80%"
  },"anim")
}
page1Animation();

function page2Animation(){
//  var page2para = document.querySelector("#page2 #text");
// var page2Text = page2para.textContent;
// var page2Splitted = page2Text.split("");
// var clutter =""
// page2Splitted.forEach(function(elem){
// clutter += `<span>${elem}</span>`
// console.log(elem)
// })
// page2para.innerHTML = clutter;

  var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 31%",
        end:"top -100%",
        // markers:true,
     }
  })
  tl.from("#page2 h1",{
    opacity:0,
    y:"5%",
    ease: "expo.inOut",
  })
}
page2Animation();

function page3Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top 35%",
        end:"top -80%",
     }
  })
  tl.from("#page3 h1",{
    opacity:0,
    y:"5%",
    delay:.2,
    duration:0.3,
    ease: "expo.inOut",
  })
}
page3Animation()

function page4Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page4",
      scroller:"#main",
      start:"top 13%",
      end:"start -100%",
      scrub:2,
      pin:true
    }
  })
  tl.to("#page4 #overlay",{
    y:"-82%",
    ease: "slow(0.7,0.7,false)",
  })
}
page4Animation()


function page5Animation(){
   var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page5",
      scroller:"#main",
      // markers:true,
      start:"top 47%",
      end:"start -100%",

    }
  })
  tl.from("#page5 h2",{
    y:"5%",
    opacity:0,
    ease: "slow(0.7,0.7,false)",
  })
}
page5Animation()

function page6Animation(){
  var one = document.querySelector("#page6 #one-1")
  var one2 = document.querySelector("#page6 #one-2")
  one.addEventListener("click",function(){
    gsap.to("#one-1 img",{
      rotate:"45deg"
    })
    gsap.to("#page6 #one #one-2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  one.addEventListener("dblclick",function(){
    gsap.to("#one-1 img",{
      rotate:"0deg"
    })
    gsap.to("#page6 #one #one-2",{
      display:"none",
      y:"-5%",
      duration:0.9,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
  })
  var two = document.querySelector("#page6 #two-1")
  var two2 = document.querySelector("#page6 #two-2")
  two.addEventListener("click",function(){
    gsap.to("#two-1 img",{
      rotate:"45deg"
    })
    gsap.to("#page6 #two #two-2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  two.addEventListener("dblclick",function(){
    gsap.to("#two-1 img",{
      rotate:"0deg"
    })
    gsap.to("#page6 #two #two-2",{
      display:"none",
      y:"-5%",
      duration:0.9,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
  })
  var three= document.querySelector("#page6 #three-1")
  var three2 = document.querySelector("#page6 #three-2")
  three.addEventListener("click",function(){
    gsap.to("#three-1 img",{
      rotate:"45deg"
    })
    gsap.to("#page6 #three #three-2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  three.addEventListener("dblclick",function(){
    gsap.to("#three-1 img",{
      rotate:"0deg"
    })
    gsap.to("#page6 #three #three-2",{
      display:"none",
      y:"-5%",
      duration:0.9,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
  })
}
page6Animation()

function page7Animation(){
  var one = document.querySelector("#page7 #one1")
  var one2 = document.querySelector("#page7 #one2")
  one.addEventListener("click",function(){
    
    gsap.to("#one1 #icon",{
      rotate:"45deg"
    })
    gsap.to("#page7 #one #one2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  one.addEventListener("dblclick",function(){
    gsap.to("#one1 #icon",{
      rotate:"0deg"
    })
    gsap.to("#page7 #one #one2",{
      display:"none",
      y:"-5%",
      duration:0.8,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
})
  var two = document.querySelector("#page7 #two1")
  var two2 = document.querySelector("#page7 #two2")
  two.addEventListener("click",function(){
    
    gsap.to("#two1 #icon",{
      rotate:"45deg"
    })
    gsap.to("#page7 #two #two2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  two.addEventListener("dblclick",function(){
    gsap.to("#two1 #icon",{
      rotate:"0deg"
    })
    gsap.to("#page7 #two #two2",{
      display:"none",
      y:"-5%",
      duration:0.8,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
  })
  var three = document.querySelector("#page7 #three1")
  var three2 = document.querySelector("#page7 #three2")
  three.addEventListener("click",function(){
    
    gsap.to("#three1 #icon",{
      rotate:"45deg"
    })
    gsap.to("#page7 #three #three2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  three.addEventListener("dblclick",function(){
    gsap.to("#three1 #icon",{
      rotate:"0deg"
    })
    gsap.to("#page7 #three #three2",{
      display:"none",
      y:"-5%",
      duration:0.8,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
  })
  var four = document.querySelector("#page7 #four1")
  var four2 = document.querySelector("#page7 #four2")
  four.addEventListener("click",function(){
    
    gsap.to("#four1 #icon",{
      rotate:"45deg"
    })
    gsap.to("#page7 #four #four2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  four.addEventListener("dblclick",function(){
    gsap.to("#four1 #icon",{
      rotate:"0deg"
    })
    gsap.to("#page7 #four #four2",{
      display:"none",
      y:"-5%",
      duration:0.8,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
  })

  var five = document.querySelector("#page7 #five1")
  var five2 = document.querySelector("#page7 #five2")
  five.addEventListener("click",function(){
    
    gsap.to("#five1 #icon",{
      rotate:"45deg"
    })
    gsap.to("#page7 fiver #five2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  five.addEventListener("dblclick",function(){
    gsap.to("#four1 #icon",{
      rotate:"0deg"
    })
    gsap.to("#page7 #five #five2",{
      display:"none",
      y:"-5%",
      duration:0.8,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
  })

  var six = document.querySelector("#page7 #six1")
  var six2 = document.querySelector("#page7 #six2")
  six.addEventListener("click",function(){
    
    gsap.to("#six1 #icon",{
      rotate:"45deg"
    })
    gsap.to("#page7 #six #six2",{
      display:"block",
      y:"-5%",
      duration:0.3,
      opacity:1,
      ease: "slow(0.7,0.7,false)",
    })
  })
  six.addEventListener("dblclick",function(){
    gsap.to("#six1 #icon",{
      rotate:"0deg"
    })
    gsap.to("#page7 #six #six2",{
      display:"none",
      y:"-5%",
      duration:0.8,
      delay:0.1,
      opacity:0,
      ease: "slow(0.7,0.7,false)",
    })
  })
 
}
page7Animation()

function page9Animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page9",
      scroller:"#main",
      // markers:true,
      start:"top 28%",
      end:"start -100%",

    }
  })
  tl.from("#page9 img",{
    y:"5%",
    opacity:0,
    ease: "slow(0.7,0.7,false)",
  })
  tl.from("#page9 button",{
    y:"5%",
    opacity:0,
    delay:0.7
  })
  tl.from("#page9 h3",{
    y:"5%",
    opacity:0,
    delay:0.6
  })
}
page9Animation()

function page11Animation(){
  Shery.imageEffect(".images2", {
    style: 5,
    gooey:true,
    // debug:true,
   config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.5512851776874945},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})
}

page11Animation()

function page8Animation(){

    Shery.imageEffect(".images", {
      style: 6,
      gooey:true,
      // debug:true, 
      

      config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.3513691850874299},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  })
      }
page8Animation()
