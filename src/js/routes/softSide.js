'use strict';

import Builder from '../util/Builder';
import * as softside1 from './../../../data/asins/1-30-2020/softside/softside1.json';
import * as softside2 from './../../../data/asins/1-30-2020/softside/softside2.json';
import * as softside3 from './../../../data/asins/1-30-2020/softside/softside3.json';

export default {
	init() {
		// One Piece #1
		const BUILDER_1_DATA = softside1.default;
		const BUILDER_1_OPTIONS = {
			target: 'softside-1',
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'blue/silver',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'black/blue',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'black/red',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'purple/silver',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
					id: 'softside-1',
					data: BUILDER_1_DATA,
				},
			],
		};

		const BUILDER_1 = new Builder({
			...BUILDER_1_OPTIONS,
		});

		// One Piece #1
		const BUILDER_2_DATA = softside2.default;
		const BUILDER_2_OPTIONS = {
			target: 'softside-2',
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'black',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'navy',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'brown',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'lake-blue',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
					id: 'softside-2',
					data: BUILDER_2_DATA,
				},
			],
		};

		const BUILDER_2 = new Builder({
			...BUILDER_2_OPTIONS,
		});

		// One Piece #3
		const BUILDER_3_DATA = softside3.default;
		const BUILDER_3_OPTIONS = {
			target: 'softside-3',
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
				{
					name: 'black',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'brown',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Slim Fit {{COLOR}} Jacket`,
					id: 'softside-3',
					data: BUILDER_3_DATA,
				},
			],
		};

		const BUILDER_3 = new Builder({
			...BUILDER_3_OPTIONS,
		});
	},

	finalize() {
		
	}
};
