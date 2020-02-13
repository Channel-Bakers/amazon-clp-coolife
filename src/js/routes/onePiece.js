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
			title: `The Paddle On Suitcase with TSA-Lock -- {{COLOR}}`,
			caption:
				'Featuring several interior mesh pockets and a zippered divider, you can keep your items clean and organized on any trip.',
			sizing: 'INCHES H x W x D: S (21 x 15 x 8.5),  M (24.5 x 17 x 10), L (29 x 20.5 x 11)',
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
			title: `The Airwave Suitcase with TSA-Lock -- {{COLOR}}`,
			caption:
				'Land in style and be ready to explore with all of your items in a spacious main compartment and neatly organized zippered pockets.',
			sizing: 'INCHES H x W x D:  S (22.4 x 15.4 x 8.7),  M (26.4 x 17.3 x 9.8), L (30.3 x 20.5 x 11)',
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
			title: `The Swift Suitcase with TSA-Lock -- {{COLOR}}`,
			caption:
				'Getaway swiftly with this travel companion that features a wide-mesh interior pocket and zippered cloth divider.',
			sizing: 'INCHES H x W x D:  S (22 x 15 x 9),  M (27 x 15 x 11), L (30.5 x 19.5 x 12-14)',
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
			title: `The Luxury Aluminum Suitcase with TSA-Lock -- {{COLOR}}`,
			caption:
				'Designed with extremely lightweight and impact-resistant Germany Bayer Polycarbonate, The Luxury can withstand rough handling and still maintain its glistening sleek shell.',
			sizing: 'INCHES H x W x D:  S (22.5x 15 x 9),  M (26.5 x 17.9 x 10.6), L (31 x 20.5 x 11.4)',
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
