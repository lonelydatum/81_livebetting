import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});




const {w, h} = size


const READ = {
	t1: 1.3,
	t2: 1.7,
	t3: 2.1,

}


function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}


let data_ = {}
const ease = "power2.out"

const colors = [
	"d4f035", 
	"c4ed37", 
	"b3ea38", 
	"a3e73a", 
	"93e43b", 
	"82e13d", 
	"72de3e", 
	"62da40", 
	"52d741",
	"41d443",
	"31d144",
	"21ce46",
	"10cb47",
	"00c849"
	]

const TOTAL = 12

function start(barOptions){
	
	
	const tl = init()
	animate_bars(barOptions)
	TweenLite.to(".hero img", {duration:3, scale:1.08, ease:"back.out"})

	// return
	
	tl.from('.t1', { duration:.3, x:-size.w, opacity:0, stagger: .1 }, "+=.5");	
	tl.to(".t1", {duration:.3, x:50, opacity:0}, `+=${READ.t1}`)
	

	tl.from('.t2', { duration:.3, x:-size.w, opacity:0, stagger: .1 });		
	tl.to(".frame1", {duration:.3, x:50, opacity:0}, `+=${READ.t2}`)
	tl.to(".frame2", {duration:.3, opacity:1}, "t2")

	tl.from('.t3', { duration:.3, x:-size.w, opacity:0, stagger: .12 });
	
	tl.to(".t3", {duration:.3, opacity:0}, `+=${READ.t3}`)

	tl.from(".t4", {duration:.3, opacity:0})
	tl.from([".cta", ".legalBtn"], {duration:.3, opacity:0})

	tl.add(olg())


}


function animate_bars(barOptions){



const {
	TOTAL,
	WIDTH,
	HEIGHT,
	GAP,
} = barOptions  


	const bars = document.getElementById("bars")
	
	

	
	for(let i=0;i<TOTAL;i++){
		const barItem = document.createElement("div")
		
		
		TweenLite.set(barItem, {
			className: `bar bar_${i}`,
			height:HEIGHT, 
			width:WIDTH-(i * GAP),  
			y:HEIGHT*i, 
			backgroundColor:`#${colors[i]}`
		})
		
		bars.appendChild(barItem)
	}

	const tl = new TimelineMax()

	tl.from('.bar', {
		width: 0,
		stagger: 0.06
	});
	return tl



}

export {size, init, start, colors}



