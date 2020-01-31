'use strict';

import Builder from '../util/Builder';
import * as onePiece1 from './../../../data/asins/1-30-2020/onePiece/onePiece1.json';
import * as onePiece3 from './../../../data/asins/1-30-2020/onePiece/onePiece3.json';
import * as onePiece2 from './../../../data/asins/1-30-2020/onePiece/onePiece2.json';
import * as onePiece4 from './../../../data/asins/1-30-2020/onePiece/onePiece4.json';

export default {
	init() {
		// One Piece #1
		const BUILDER_1_DATA = onePiece1.default;
		const BUILDER_1_OPTIONS = {
			target: 'onePiece-1',
			title: `Expandable {{COLOR}} Suitcase with PC+ABS Spinner and Built-in TSA Lock`,
			caption:
				"Quiet airplane spinner wheels and an adjustable 3-level 100%pure aluminum telescoping handle allow you to quickly maneuver in tight spaces and it’s sturdier than most of the telescoping handle on the market.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'charcoal',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71wO9iD0B2L._UX679_.jpg',
					active: true,
				},
				{
					name: 'caribbean-blue',
					hex: '#335b7b',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71bJTym7h5L._AC_UX679_.jpg',
					active: false,
				},
				{
					name: 'radiant-pink',
					hex: '#91435d',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71Krw3bPNmL._AC_UX679_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} Suitcase with PC+ABS Spinner and Built-in TSA Lock`,
					id: 'onePiece-1',
					data: BUILDER_1_DATA,
				},
			],
		};

		const BUILDER_1 = new Builder({
			...BUILDER_1_OPTIONS,
		});

		// One Piece #1
		const BUILDER_2_DATA = onePiece2.default;
		const BUILDER_2_OPTIONS = {
			target: 'onePiece-2',
			title: `Expandable {{COLOR}} Suitcase with PC+ABS Spinner`,
			caption:
				"The suitcase benefits hugely from its ABS+PC hard plastic shell. it goes through insanely strict quality control test standards, creating strong and sturdy pieces that can withstand any forms of rough handling.Please note this luggage is sold separately, but If you intend to buy two or three suitcases, the small suitcase can be stored inside the bigger one.",
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'white',
					hex: '#f3f0ef',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71OsqB9Ei1L._AC_SX522_.jpg',
					active: true,
				},
				{
					name: 'orange',
					hex: '#f27d0e',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71NsP6MG5PL._AC_SX522_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} Suitcase with PC+ABS Spinner`,
					id: 'onePiece-2',
					data: BUILDER_2_DATA,
				},
			],
		};

		const BUILDER_2 = new Builder({
			...BUILDER_2_OPTIONS,
		});

		// One Piece #3
		const BUILDER_3_DATA = onePiece3.default;
		const BUILDER_3_OPTIONS = {
			target: 'onePiece-3',
			title: `Expandable {{COLOR}} Suitcase with PC+ABS Spinner and TSA Lock`,
			caption:
				"Sturdy ergonomic aluminum telescoping handle system provides fluent and smooth experience. The unique shaped multi-directional silent wheels will not make any noise when being rotated and it’s more durable in structure.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'navy',
					hex: '#334262',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71vmgpVw5kL._AC_SX522_.jpg',
					active: true,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} Suitcase with PC+ABS Spinner and TSA Lock`,
					id: 'onePiece-3',
					data: BUILDER_3_DATA,
				},
			],
		};

		const BUILDER_3 = new Builder({
			...BUILDER_3_OPTIONS,
		});

		// One Piece #4
		const BUILDER_4_DATA = onePiece4.default;
		const BUILDER_4_OPTIONS = {
			target: 'onePiece-4',
			title: `Aluminium Frame {{COLOR}} Suitcase with TSA Lock 100% PC`,
			caption:
				"Combined with luxury aluminum frame and 100% Germany Bayer PC material, features brushed finishing and grinding process, providing long-lasting usage and shining appearance, It also eliminates the trouble of the protective film can’t be peeled off thoroughly.",
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'blue',
					hex: '#283758',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71zgI5w6MdL._AC_SX425_.jpg',
					active: true,
				},
				{
					name: 'black',
					hex: '#333333',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71F7nW0YPSL._AC_SX425_.jpg',
					active: false,
				},
				{
					name: 'wine-red',
					hex: '#541722',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71nEYr4WDbL._SX425_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Aluminium Frame {{COLOR}} Suitcase with TSA Lock 100% PC`,
					id: 'onePiece-4',
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
