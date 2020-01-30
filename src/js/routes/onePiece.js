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
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'charcoal',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'caribbean-blue',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'radiant-pink',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
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
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'white',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'orange',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
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
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'navy',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
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
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'blue',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'black',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'wine-red',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
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
