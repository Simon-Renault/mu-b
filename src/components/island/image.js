import anime from 'animejs'

export default class Image {
	constructor(el) {
		this.DOM = {};
		this.DOM.el = el;
		this.CONFIG = {
			animation: {
				image: {
					duration: this.DOM.el.dataset.animationImageDuration || 1000,
					delay: this.DOM.el.dataset.animationImageDelay || 0,
					easing: this.DOM.el.dataset.animationImageEasing || 'easeOutQuad',
					elasticity: this.DOM.el.dataset.imageElasticity || 400,
					scaleX: this.DOM.el.dataset.imageScalex || 1.2,
					scaleY: this.DOM.el.dataset.imageScaley || 1.2,
					translateX: this.DOM.el.dataset.imageTranslatex || 0,
					translateY: this.DOM.el.dataset.imageTranslatey || 0,
					rotate: this.DOM.el.dataset.imageRotate || 0
				}
			}
		};
		this.initEvents();
	}
	initEvents() {
		this.mouseenterFn = () => {
			this.mouseTimeout = setTimeout(() => {
				this.isActive = true;
				this.animate();
			}, 75);
		}
		this.mouseleaveFn = () => {
			clearTimeout(this.mouseTimeout);
			if( this.isActive ) {
				this.isActive = false;
				this.animate();
			}
		}
	}
	hoverIn(){
		this.mouseenterFn()
	}
	hoverOut(){
		this.mouseleaveFn()
	}
	getAnimeObj(targetStr,el) {
		const target = el;
		let animeOpts = {
			targets: target,
			duration: this.CONFIG.animation[targetStr].duration,
			delay: this.CONFIG.animation[targetStr].delay,
			easing: this.CONFIG.animation[targetStr].easing,
			elasticity: this.CONFIG.animation[targetStr].elasticity,	
			scaleX: this.isActive ? this.CONFIG.animation[targetStr].scaleX : 1,
			scaleY: this.isActive ? this.CONFIG.animation[targetStr].scaleY : 1,
			translateX: this.isActive ? this.CONFIG.animation[targetStr].translateX : 0,
			translateY: this.isActive ? this.CONFIG.animation[targetStr].translateY : 0,
			rotate: this.isActive ? this.CONFIG.animation[targetStr].rotate : 0
		}
		anime.remove(target);
		return animeOpts;
	}
	animate() {
		anime(this.getAnimeObj('image',this.DOM.el));
	}
}




