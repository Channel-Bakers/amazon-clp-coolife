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
					name: 'silver',
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
				{
					name: 'silver-gray',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'orange',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			// dropdowns: [
			// 	{
			// 		title: `Slim Fit {{COLOR}} Jacket`,
			// 		id: 'business-1',
			// 		data: BUILDER_1_DATA,
			// 	},
			// ],
		};

		const BUILDER_1 = new Builder({
			...BUILDER_1_OPTIONS,
		});

		// One Piece #1
		const BUILDER_2_DATA = business2.default;
		const BUILDER_2_OPTIONS = {
			target: 'business-2',
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'sakura-pink',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'night-navy',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'titanium-gray',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			// dropdowns: [
			// 	{
			// 		title: `Slim Fit {{COLOR}} Jacket`,
			// 		id: 'business-2',
			// 		data: BUILDER_2_DATA,
			// 	},
			// ],
		};

		// const BUILDER_2 = new Builder({
		// 	...BUILDER_2_OPTIONS,
		// });

		// One Piece #3
		const BUILDER_3_DATA = business3.default;
		const BUILDER_3_OPTIONS = {
			target: 'business-3',
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'wine-red',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'teal-blue',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'gray',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'silver',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'purple',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			// dropdowns: [
			// 	{
			// 		title: `Slim Fit {{COLOR}} Jacket`,
			// 		id: 'business-3',
			// 		data: BUILDER_3_DATA,
			// 	},
			// ],
		};

		const BUILDER_3 = new Builder({
			...BUILDER_3_OPTIONS,
		});

		// One Piece #4
		const BUILDER_4_DATA = business4.default;
		const BUILDER_4_OPTIONS = {
			target: 'business-4',
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
					name: 'teal',
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
			// dropdowns: [
			// 	{
			// 		title: `Slim Fit {{COLOR}} Jacket`,
			// 		id: 'business-4',
			// 		data: BUILDER_4_DATA,
			// 	},
			// ],
		};

		const BUILDER_4 = new Builder({
			...BUILDER_4_OPTIONS,
		});
	},

	finalize() {
		
	}
};
