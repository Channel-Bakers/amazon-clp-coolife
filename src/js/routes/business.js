'use strict';

import Builder from '../util/Builder';
import * as business1 from './../../../data/asins/1-30-2020/business/business1.json';
import * as business2 from './../../../data/asins/1-30-2020/business/business2.json';
import * as business3 from './../../../data/asins/1-30-2020/business/business3.json';
import * as business4 from './../../../data/asins/1-30-2020/business/business4.json';

export default {
	init() {
		// One Piece #1
		const BUILDER_1_DATA = business1.default;
		const BUILDER_1_OPTIONS = {
			target: 'business-1',
			title: `The Swift 3-Piece Hardshell Set -- {{COLOR}}`,
			caption:
				'Go from city to city with an ergonomic and stylish luggage set. This set of three with organized interior pockets allows you to bring everything you need to be prepared on your trip.',
			sizing: 'INCHES H x W x D:  S (22 x 15 x 9),  M (27 x 17 x 11), L (30.5 x 19.5 x 12-14)',
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'navy',
					hex: '#1e1f43',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81wxy-90npL._SX425_.jpg',
					active: true,
				},
				{
					name: 'silver',
					hex: '#bebfc1',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71OeS5Zo12L._AC_SX425_.jpg',
					active: false,
				},
				{
					name: 'wine-red',
					hex: '#853139',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71uSzX1t9mL._SX522_.jpg',
					active: false,
				},
				{
					name: 'silver-gray',
					hex: '#4e484a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81HgjCuxInL._SX425_.jpg',
					active: false,
				},
				{
					name: 'orange',
					hex: '#ea5333',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81z982DEbSL._AC_SX522_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} Suitcase PC+ABS 3 Piece Set with TSA Lock Spinner`,
					id: 'business-1',
					data: BUILDER_1_DATA,
				},
			],
		};

		const BUILDER_1 = new Builder({
			...BUILDER_1_OPTIONS,
		});

		// One Piece #1
		const BUILDER_2_DATA = business2.default;
		const BUILDER_2_OPTIONS = {
			target: 'business-2',
			title: `The Digital Nomad 2-Piece Hardshell Set -- {{COLOR}}`,
			caption:
				'Breeze through security with an easy access, protective compartment for your 15” laptop and pockets for your essentials like pens, notebooks, and phones. Pick from 3 trendy colors in matte designs for a style that suits you.',
			sizing: 'INCHES H x W x D:  S (21 x 14 x 9.5),  L (28.6 x 20 x 11.9-13.8)',
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'sakura-pink',
					hex: '#f3c8bd',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/61N3qQYqjML._AC_SX425_.jpg',
					active: true,
				},
				{
					name: 'night-navy',
					hex: '#959fae',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/61B5VWb6UJL._SX425_.jpg',
					active: false,
				},
				{
					name: 'titanium-gray',
					hex: '#9c9c9a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71ykV1afpzL._SX425_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `{{COLOR}} Suitcase 2-Piece Set Carry On ABS+PC Spinner Trolley with Pocket Compartment`,
					id: 'business-2',
					data: BUILDER_2_DATA,
				},
			],
		};

		const BUILDER_2 = new Builder({
			...BUILDER_2_OPTIONS,
		});

		// One Piece #3
		const BUILDER_3_DATA = business3.default;
		const BUILDER_3_OPTIONS = {
			target: 'business-3',
			title: `The Side Street 3-Piece Hardshell Set -- {{COLOR}}`,
			caption:
				'Stay on course to make an impression with a stylish diagonal striped hardshell design. Internal straps secure your clothes and an interior divider helps you stay organized.',
			sizing: 'INCHES H x W x D:  S (22 x 15.2 x 8.9),  M (26.1 x 17.8 x 9.9), L (29.9 x 20.1 x 11.8-13)',
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'gray',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/714do%2BC%2BQNL._SX425_.jpg',
					active: true,
				},
				{
					name: 'wine-red',
					hex: '#853139',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71gd5SIOFQL._AC_SX425_.jpg',
					active: false,
				},
				{
					name: 'teal-blue',
					hex: '#25323a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71hBzO2FSAL._AC_SX425_.jpg',
					active: false,
				},
				{
					name: 'silver',
					hex: '#8a8a90',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71tZKtFxlSL._SX425_.jpg',
					active: false,
				},
				{
					name: 'purple',
					hex: '#382337',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71W8TmlQtSL._AC_SX425_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
					id: 'business-3',
					data: BUILDER_3_DATA,
				},
			],
		};

		const BUILDER_3 = new Builder({
			...BUILDER_3_OPTIONS,
		});

		// One Piece #4
		const BUILDER_4_DATA = business4.default;
		const BUILDER_4_OPTIONS = {
			target: 'business-4',
			title: `The Paddle On 3-Piece Hardshell Set -- {{COLOR}}`,
			caption:
				'Make traveling for work a smooth-sailing experience using a modern luggage set that features a zippered divider and several mesh pockets to stay organized.',
			sizing: 'INCHES H x W x D:  S (21 x 15 x 8.5),  M (24.5 x 17 x 10), L (29 x 20.5 x 11)',
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'charcoal',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81pkiPsV2hL._AC_UX466_.jpg',
					active: true,
				},
				{
					name: 'teal',
					hex: '#455056',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71r70%2BEA2AL._UX466_.jpg',
					active: false,
				},
				{
					name: 'caribbean-blue',
					hex: '#004870',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71tZanmKYrL._AC_UX466_.jpg',
					active: false,
				},
				{
					name: 'radiant-pink',
					hex: '#5a0028',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71OnwVflfnL._AC_UX466_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} 3-Piece Set PC+ABS Spinner Suitcase Built-In TSA lock`,
					id: 'business-4',
					data: BUILDER_4_DATA,
				},
			],
		};

		const BUILDER_4 = new Builder({
			...BUILDER_4_OPTIONS,
		});
	},

	finalize() {
		
	}
};
