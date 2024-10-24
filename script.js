const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var main = document.querySelector("#main")
var dot = document.querySelector(".dot")
function dotChaptaKro(){
    var xscale = 1;
    var yscale = 1;
    var prevX = 0;
    var prevY = 0;
   var timeout=0;
    document.querySelector(".page1").addEventListener("mousemove",function(dets){
        
        xscale = gsap.utils.clamp(0.8,1.2,dets.clientX-prevX);
        yscale = gsap.utils.clamp(0.8,1.2,dets.clientY-prevY);
        prevX = dets.clientX;
        prevY = dets.clientY;
        cursor(xscale,yscale)
       
    })
}
function cursor(xscale,yscale){
    document.querySelector(".page1").addEventListener("mousemove",function(dets){
        dot.style.display="block"
        dot.style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
       
    })

    document.querySelector(".page1").addEventListener("mouseout",function(dets){
        dot.style.display="none"
    })
   
}
cursor()
dotChaptaKro()
document.querySelectorAll(".titles").forEach(function(elem){
    var rotat = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove",function(dets){
        diffrot=dets.clientX - rotat;
        rotat=dets.clientX

        var img = elem.querySelector("img");


        var rect = img.getBoundingClientRect();

        // Calculate the position of the cursor relative to the center of the image
        var diffX = dets.clientX - (rect.left + rect.width / 2);
        var diffY = dets.clientY - (rect.top + rect.height / 2);

        // Adjust the position of the cursor to be relative to the center of the image
        gsap.to(img,{
            opacity:1,
            display:"block",
            ease:Power1,
            rotate:gsap.utils.clamp(-20,20,diffrot),
            top: "+=" + diffY, // Move vertically by adding the difference to the current top position
            left: "+=" + diffX  // Move horizontally by adding the difference to the current left position
        });
    });
    elem.addEventListener("mouseleave",function(){
        var imge = elem.querySelector("img");
        gsap.to(imge,{
            opacity:0,
            display:"none",
            ease:Power3,
           
        });
    })
});





