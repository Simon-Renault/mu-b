const PI = Math.PI;
const HALF_PI = Math.PI / 2;
const TWO_PI = Math.PI * 2;
const QUARTER_PI = Math.PI / 4;
const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

const clamp = (num, min, max) => {
	if (max < min) {
		const tmax = min;
		min = max;
		max = tmax;
	}

	if (num < min) return min;
	else if (num > max) return max;

	return num;
};

const lerp = (min, max, amount) => {
	return min + amount * (max - min);
};

const map = (num, min1, max1, min2, max2, round = false, constrainMin = true, constrainMax = true) => {
	if (constrainMin && num < min1) return min2;
	if (constrainMax && num > max1) return max2;

	const num1 = (num - min1) / (max1 - min1);
	const num2 = (num1 * (max2 - min2)) + min2;
	if (round) return Math.round(num2);
	return num2;
};

const mod = (n, m) => {
	return ((n % m) + m) % m;
};

const random = (min, max) => {
	if (Object.prototype.toString.call(min) === '[object Array]') return min[~~(Math.random() * min.length)];

	if (typeof max !== 'number') {
		max = min || 1;
		min = 0;
	}

	return min + Math.random() * (max - min);
};





const imageCrawler = (el,selector,fn) => {
	const imgs = [...el.querySelectorAll(selector)]
	return imgs.forEach( img => fn(img))
}


const extractInfos = (img) => {
	const data = img.dataset
	const placeholder_src = placeholder_src != 'none' &&placeholder_src != undefined ? img.dataset.placeholder : ''
	return {
		src : data.src,
		placeholder_src,
		alt : data.alt,
		desc : data.desc,
		type : data.type
	}
}
const imageExtractor = (el,selector) => imageCrawler(el,selector,extractInfos)


export { PI, HALF_PI, QUARTER_PI, TWO_PI, DEG_TO_RAD, RAD_TO_DEG, clamp, lerp, map, mod, random, imageCrawler,extractInfos, imageExtractor};
