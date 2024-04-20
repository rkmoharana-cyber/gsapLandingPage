var timeline = gsap.timeline()

timeline.from("#main h3", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
    stagger: 0.3
})
timeline.from("#main h1", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4
})
timeline.from("#main img", {
    x:100,
    rotate:45,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})
timeline.from(".main footer h3", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.8,
  });
  
  timeline.from(".main footer p", {
    x: -500,
    opacity: 0,
    duration: 0.8,
    stagger: 0.8,
  });