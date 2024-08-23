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

function start(data){
	
	
	const tl = init()
	animate_bars()


	tl.from(".t1a", {duration:.3, x:-size.w}, "+=.5")
	tl.from(".t1b", {duration:.3, x:-size.w})
	tl.add("t1", `+=${READ.t1}`)

	tl.to(".t1", {duration:.3, x:50, opacity:0}, "t1")
	tl.from(".t2a", {duration:.3, x:-size.w, opacity:0})
	tl.from(".t2b", {duration:.3, x:-size.w, opacity:0})
	
	tl.add("t2", `+=${READ.t2}`)
	tl.to(".frame1", {duration:.3, x:50, opacity:0}, "t2")
	tl.to(".frame2", {duration:.3, opacity:1}, "t2")

	tl.from(".t3a", {duration:.3, x:-size.w, opacity:0})
	tl.from(".t3b", {duration:.3, x:-size.w, opacity:0})
	tl.from(".t3c", {duration:.3, x:-size.w, opacity:0})

	tl.add("t3", `+=${READ.t3}`)
	tl.to(".t3", {duration:.3, opacity:0}, "t3")

	tl.from(".t4", {duration:.3, opacity:0})
	tl.from(".cta", {duration:.3, opacity:0})

	tl.add(olg())


}

function animate_bars(){

	const bars = document.getElementById("bars")
	const TOTAL = 12
	const HEIGHT = 45
	const WIDTH_MAX = 276
	const WIDTH_MIN = 69
	const WIDTH_DIFF = WIDTH_MAX - WIDTH_MIN
	const WIDTH_GAP = WIDTH_DIFF/TOTAL

	
	for(let i=0;i<TOTAL;i++){
		const barItem = document.createElement("div")
		barItem.className=`bar bar_${i}`
		const height = HEIGHT/TOTAL
		const gap = i * WIDTH_GAP
		const width = WIDTH_MAX-gap
		const y = height*i
		const backgroundColor = `#${colors[i]}`
		
		TweenLite.set(barItem, {height, width,  y, backgroundColor})
		
		bars.appendChild(barItem)
	}

	const tl = new TimelineMax()

	tl.from('.bar', {
    width: 0,
    stagger: 0.06
});
	return tl



}



export {size, init, start}



