function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#iMain"),
      smooth: true,

      // for tablet smooth
      tablet: { smooth: true },

      // for mobile
      smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#iMain", {
      scrollTop(value) {
          return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      }
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();

function navAnimation() {
  let vnav = document.querySelector("nav")

  vnav.addEventListener("mouseenter", function () {

    let timeline = gsap.timeline()
    timeline.to("#inav-bottom", {
      height: "21vh"
    })
    timeline.to(".nav-list h5", {
      display: "block"
    })
    timeline.from(".nav-list h5 span", {   // this code is for to open nav list one by one
      y: 25,
      //duration:0.3,
      stagger: {
        amount: 0.6
      }
    })

  })
  vnav.addEventListener("mouseleave", function () {

    let timeline = gsap.timeline()

    timeline.to(".nav-list h5 span", {   // this code is for to remove nav list one by one
      y: 25,
      stagger: {
        amount: 0.2
      }
    })
    // this code is for to reverse nav bottom div into up position
    timeline.to(".nav-list h5", {
      display: "none",
      duration: 0.1
    })
    timeline.to("#inav-bottom", {
      height: "0",
      duration: 0.2
    })

  })
}
navAnimation();


//code for show image when enter in right-elem

var vRightElem = document.querySelectorAll(".right-elem");
vRightElem.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    //console.log(elem.childNodes)  to check nodes number for target
    //elem.childNodes[3].style.opacity=1 i can use gsap instead of this
    //console.log(elem.getBoundingClientRect())

    gsap.to(elem.childNodes[3], {
      opacity: 1,
      scale: 1
    });

  })
  elem.addEventListener("mouseleave", function () {
    //elem.childNodes[3].style.opacity=0
    gsap.to(elem.childNodes[3], {
      opacity: 0,
      scale: 0
    });
  })
    // elem is a div and div is used to make rectangular shapes,,, 
    // if we want to mesure shapes we need to write console.log(elem.getBoundingClientRect())
    // this console provide the all detail of my div width, height, etc
    elem.addEventListener("mousemove", function (dets) {
      //console.log(elem.getBoundingClientRect().y) this show what is the position of y x-asis in div also check x-asis
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x-30,
        y: dets.y - elem.getBoundingClientRect().y-110
    
  });

    });
  
  });
  let vplay= document.querySelector(".play-button");
  let video= document.querySelector("#ipage3 video")
  vplay.addEventListener("click", function(){
    video.play()
    gsap.to(video,{
      transform:"scaleX(1) scaleY(1)",
      opacity:1,
      //borderRadius:0,
      
    });
  });
  video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
      transform:"scaleX(0.7) scaleY(0)",
      opacity:0,
  })
})

//code for #ipage4 to run video when mouse enter into .section-right image

var vsections = document.querySelectorAll(".section-right");


vsections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      
      elem.childNodes[3].style.opacity = 1
      elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave", function () {
        elem.childNodes[3].style.opacity = 0
       elem.childNodes[3].load()
    })
})

//code to toggle the arrow when we click it


document.querySelectorAll(".uiux-arrow").forEach(function(arrow) {
  arrow.addEventListener("click", function() {
    var icon = arrow.querySelector("i");
    if (icon.classList.contains("ri-arrow-down-s-line")) {
      icon.classList.add("ri-arrow-down-s-line");
      icon.classList.remove("ri-arrow-up-s-line");
    } else {
      icon.classList.add("ri-arrow-up-s-line");
      icon.classList.remove("ri-arrow-down-s-line");
    }
  });
});

document.querySelectorAll(".product-arrow").forEach(function(arrow) {
  arrow.addEventListener("click", function() {
    var icon = arrow.querySelector("i");
    if (icon.classList.contains("ri-arrow-up-s-line")) {
      icon.classList.add("ri-arrow-down-s-line");
      icon.classList.remove("ri-arrow-up-s-line");
    } else {
      icon.classList.add("ri-arrow-up-s-line");
      icon.classList.remove("ri-arrow-down-s-line");
    }
  });
});

// elements move when you scrool down
//gsap.from("#ipage6-p2 h4",{
 // x:0,
  //duration:1,
  //scrollTrigger:{
   // trigger:"#ipage6-p2",
   // scroller:"body",
   // markers:true,
   // start:"top 80%",
   // end:"top 10%"
 // }
//})

gsap.from("#ipage6-p2 h4", {
  x: 0,
  duration: 1,
  scrollTrigger: {
      trigger: "#ipage6-p2",
      scroller: "#iMain",
      // markers:true,
      start: "top 85%",
      end: "top 10%",
      scrub: true
  }
})
// loading page animation means when we open website it is animated

function loadingAnimation() {

  var tl = gsap.timeline()
  tl.from("#ipage1", {
      opacity: 0,
      duration: 0.2,
      delay: 0.2
  })
  tl.from("#ipage1", {
      transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
      borderRadius: "150px",
      duration: 2,
      ease: "expo.out"
  })
  tl.from("nav", {
      opacity: 0,
      delay: -0.2
  })
  tl.from("#ipage1 h1, #ipage1 p, #ipage1 div", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
  })
}
loadingAnimation();






