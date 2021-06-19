import anime from 'animejs'

export default class Deco {
	constructor(el,props) {
		this.DOM = {};
		this.DOM.el = el;
		this.CONFIG = {
			animation: {
				deco: {
					duration: this.DOM.el.dataset.animationDecoDuration || 700,
					delay: this.DOM.el.dataset.animationDecoDelay || 0,
					easing: this.DOM.el.dataset.animationDecoEasing || 'easeOutQuad',
					elasticity: this.DOM.el.dataset.decoElasticity || 400,
					scaleX: this.DOM.el.dataset.decoScalex || 1.3,
					scaleY: this.DOM.el.dataset.decoScaley || 1.3,
					translateX: this.DOM.el.dataset.decoTranslatex || 0,
					translateY: this.DOM.el.dataset.decoTranslatey || 0,
					rotate: this.DOM.el.dataset.decoRotate || 0
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
		anime(this.getAnimeObj('deco',this.DOM.el));
	}
}




