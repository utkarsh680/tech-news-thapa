

function reavealToSpan(){
    document.querySelectorAll('.reveal')
    .forEach(function(elem) {
        var spanParent =  document.createElement('span');
        var spanChild = document.createElement('span');
        spanParent.classList.add('parent');
        spanChild.classList.add('child');
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);

        elem.innerHTML = '';
        elem.appendChild(spanParent);
    });
}

function valueSetters(){
    gsap.set('#nav a', {y: 100, opacity: 0});
    gsap.set('#home .parent .child', {y: "100%"});
    gsap.set('#home .row img',{scale:0});
}



function loaderAnimation(){
    var tl = gsap.timeline();
tl  

    .from("#loader .child span", {
        x: -100,
        duration: 1.4, 
        delay: .2,
        stagger: .2,
        ease: 'Power3.easeOut',
    })  
    .to('#loader .parent .child', {
        y: "-100%",
        duration: 1,
        ease: 'Circ.easeInOut',
    })
    .to('#loader', {
        height: 0,
        duration: 1,
        ease: 'Circ.easeInOut',
    })
    .to('#green', {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -.8,
        ease: 'Circ.easeInOut',
    })
    .to('#green', {
        height: 0,
        top: 0,
        duration: 1,
        delay: -.5,
        ease: 'Circ.easeInOut',
        oncompleate: function(){
            AnimateHomePage();
        }
    })

}

function AnimateHomePage(){
    var tl = gsap.timeline();

    tl.to('#nav a', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: .07,
        ease: Expo.easeInOut,
    })
  
    tl.to('#home .parent .child', {
        y: 0,
        stagger: .1,
        duration: .5,
        ease: Expo.easeInOut,
    })
    tl.to('#home .row img', {
        scale: 1,
        duration: .5,
        ease: Expo.easeInOut,
    })
    tl.from('.imgright .imgcontainer:nth-child(1) ', {
        y:-300,
        duration: .3,
        Stagger: .5,
        delay:-.7,
        ease: Expo.easeInOut,
        
    })
    tl.to('.imgright .imgcontainer:nth-child(1) ', {
        rotation:-20,
        duration: .3,
        Stagger: .5,
        ease: Expo.easeInOut,
        opacity: 1,
        delay: -1,
        
       
    })
    tl.from('.imgright .imgcontainer:nth-child(2) ', {
        y:-300,
        duration: .3,
        Stagger: .5,
        delay: -.5,
        ease: Expo.easeInOut,
       
    })
    tl.to('.imgright .imgcontainer:nth-child(2) ', {
        rotation:-15,
        duration: .3,
        Stagger: .5,
        ease: Expo.easeInOut,
        opacity: 1,
        delay: -1,
    })
    tl.from('.imgright .imgcontainer:nth-child(3) ', {
        y:-300,
        duration: .3,
        Stagger: .5,
        delay: -.3,
        ease: Expo.easeInOut,
    })
    tl.to('.imgright .imgcontainer:nth-child(3) ', {
        rotation:-5,
        duration: .3,
        Stagger: .5,
        ease: Expo.easeInOut,
        opacity: 1,
        delay: -1,
    })

}

function logoInitialize(){    
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardHoverEffect(){
    document.querySelectorAll('.container')
    .forEach(function(container){
        var showingImage;
        container.addEventListener('mousemove', function(dots){
        document.querySelector("#cursor").children[dots.target.dataset.index].style.opacity = 1;
        showingImage = dots.target;
        document.querySelector("#cursor").children[dots.target.dataset.index].style.transform = `translate(${dots.clientX}px, ${dots.clientY}px)`;
        showingImage.style.filter = "grayscale()"; 

        document.querySelector("#work").style.backgroundColor = "#" + dots.target.dataset.color;
        })
        container.addEventListener('mouseleave', function(dots){

            document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
            showingImage.style.filter = "grayscale(0)";
            document.querySelector("#work").style.backgroundColor = "#f2f2f2";

        }
        )
    })

  
}

reavealToSpan();
valueSetters();
loaderAnimation();
logoInitialize();
cardHoverEffect();

