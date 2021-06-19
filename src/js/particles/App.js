import WebGLView from './webgl/WebGLView';


export default class App {
	constructor() {

	}
	init(el) {
		this.initWebGL(el);
		this.addListeners();
		this.animate();
		this.resize();
	}
	initWebGL(el) {
		this.webgl = new WebGLView(this);
		this.webgl.renderer.domElement.classList.add('renderer')
		el.appendChild(this.webgl.renderer.domElement);
	}

	initGUI() {
		this.gui = new GUIView(this);
		this.gui.disable()
	}

	addListeners() {
		this.handlerAnimate = this.animate.bind(this);

		window.addEventListener('resize', this.resize.bind(this));
		window.addEventListener('keyup', this.keyup.bind(this));
	}
	next(path){
		this.webgl.next(path);
	}
	animate() {
		this.update();
		this.draw();
		this.raf = requestAnimationFrame(this.handlerAnimate);
	} 
	// ---------------------------------------------------------------------------------------------
	// PUBLIC
	// ---------------------------------------------------------------------------------------------

	update() {
		if (this.webgl) this.webgl.update();
	}
	draw() {
		if (this.webgl) this.webgl.draw();
	}

	// ---------------------------------------------------------------------------------------------
	// EVENT HANDLERS
	// ---------------------------------------------------------------------------------------------

	resize() {
		if (this.webgl) this.webgl.resize();
	}
	keyup(e) {
		if (e.keyCode == 71) {  }
	}
	click(e) {
		this.webgl.next();
	}
}
