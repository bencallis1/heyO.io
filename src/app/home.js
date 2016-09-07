import TweenMax from "../vendor/gs/TweenMax.min";



export function openOverlay() {
	let fadeSpeed = .75;

	return TweenMax.fromTo($("#preloader-green-rect"), 1.35 * fadeSpeed, {
		attr: {
			points: "0,0 100,0 75,100 0,100 "
		}
	})


}
