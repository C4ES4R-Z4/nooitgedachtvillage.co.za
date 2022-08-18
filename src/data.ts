interface option {
	name: string;
	path: string;
	price: string;
	desc: string;
	brochure: string;
	images: string[];
}

export const options: option[] = [
	{
		name: "VILLAGE CLOSE",
		path: "/village-close",
		price: "4.3m",
		desc: `On the largest remaining full title stands at Nooitgedacht Village, purchasers can choose from a range of floor plans
        between 200m2 and 300m2. The architect can make changes to the floor plans to suit your needs, subject to the rules
        of the estate.`,
		brochure: "/village.pdf",
		images: [
			"/village/one.jpg",
			"/village/three.jpg",
			"/village/four.jpg",
			"/village/five.jpg",
			"/village/six.jpg",
			"/village/seven.jpg",
			"/village/eight.jpg",
			"/village/nine.jpg",
			"/village/ten.jpg",
			"/village/eleven.jpg",
		],
	},
	{
		name: "SIMONSBERG MANOR",
		path: "/simonsberg-manor",
		price: "4.2m",
		desc: `Stands with views towards Simonsberg mountain. The architect can make some changes to the floor plans to suit your needs, subject to the
        rules of the estate.`,
		brochure: "/simonsberg.pdf",
		images: [
			"/simonsberg/one.jpg",
			"/simonsberg/three.jpg",
			"/simonsberg/four.jpg",
			"/simonsberg/five.jpg",
			"/simonsberg/six.jpg",
			"/simonsberg/seven.jpg",
			"/simonsberg/eight.jpg",
			"/simonsberg/nine.jpg",
		],
	},
	{
		name: "THE TERRACES",
		path: "/terraces",
		price: "3.2m",
		desc: `The Terraces bring an authentic Etruscan village to life. A unique village experience that is already 
		established and thriving. 2 And 3 bedroom units are available, all with double garages and small,
         neat gardens.`,
		brochure: "/terraces.pdf",
		images: [
			"/terraces/one.jpg",
			"/terraces/three.jpg",
			"/terraces/four.jpg",
			"/terraces/five.jpg",
			"/terraces/six.jpg",
			"/terraces/seven.jpg",
			"/terraces/eight.jpg",
			"/terraces/nine.jpg",
			"/terraces/ten.jpg",
			"/terraces/eleven.jpg",
		],
	},
];
