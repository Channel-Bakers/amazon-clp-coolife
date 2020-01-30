'use strict';

import Builder from '../util/Builder';
import * as luggageSet1 from '../data/asins/luggageSet/luggageSet1.json';
import * as luggageSet2 from '../data/asins/luggageSet/luggageSet2.json';
import * as luggageSet3 from '../data/asins/luggageSet/luggageSet3.json';
import * as luggageSet4 from '../data/asins/luggageSet/luggageSet4.json';

export default {
	init() {
		// One Piece #1
		const BUILDER_1_DATA = luggageSet1.default;
		const BUILDER_1_OPTIONS = {
			target: 'luggageSet-1',
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
					name: 'purple',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'navy',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				// {
				// 	name: 'dark-green',
				// 	hex: '#1c1c26',
				// 	image:
				// 		'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
				// 	active: false,
				// },
				{
					name: 'black',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
			],
			// dropdowns: [
			// 	{
			// 		title: `Slim Fit {{COLOR}} Jacket`,
			// 		id: 'luggageSet-1',
			// 		data: BUILDER_1_DATA,
			// 	},
			// ],
		};

		const BUILDER_1 = new Builder({
			...BUILDER_1_OPTIONS,
		});

		// One Piece #1
		const BUILDER_2_DATA = luggageSet2.default;
		const BUILDER_2_OPTIONS = {
			target: 'luggageSet-2',
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'grey',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
				{
					name: 'purple',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				// {
				// 	name: 'lake-blue',
				// 	hex: '#1c1c26',
				// 	image:
				// 		'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
				// 	active: false,
				// },
			],
			// dropdowns: [
			// 	{
			// 		title: `Slim Fit {{COLOR}} Jacket`,
			// 		id: 'luggageSet-2',
			// 		data: BUILDER_2_DATA,
			// 	},
			// ],
		};

		const BUILDER_2 = new Builder({
			...BUILDER_2_OPTIONS,
		});

		// One Piece #3
		const BUILDER_3_DATA = luggageSet3.default;
		const BUILDER_3_OPTIONS = {
			target: 'luggageSet-3',
			title: `Slim Fit {{COLOR}} Jacket`,
			caption:
				"This modern jacket fabric can dress up a more relaxed outfit pairing it with jeans or cotton pants, or add sophistication to your outfit by pairing it with dress pants.",
			image: {
				position: 'left',
			},
			colors: [
				// {
				// 	name: 'wine-red',
				// 	hex: '#70707a',
				// 	image:
				// 		'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
				// 	active: false,
				// },
				{
					name: 'green',
					hex: '#3a3742',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				{
					name: 'white',
					hex: '#1c1c26',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: true,
				},
			],
			// dropdowns: [
			// 	{
			// 		title: `Slim Fit {{COLOR}} Jacket`,
			// 		id: 'luggageSet-3',
			// 		data: BUILDER_3_DATA,
			// 	},
			// ],
		};

		const BUILDER_3 = new Builder({
			...BUILDER_3_OPTIONS,
		});

		// One Piece #4
		const BUILDER_4_DATA = luggageSet4.default;
		const BUILDER_4_OPTIONS = {
			target: 'luggageSet-4',
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
					name: 'black',
					hex: '#70707a',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
					active: false,
				},
				// {
				// 	name: 'mustard-yellow',
				// 	hex: '#3a3742',
				// 	image:
				// 		'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
				// 	active: false,
				// },
				// {
				// 	name: 'dark-green',
				// 	hex: '#1c1c26',
				// 	image:
				// 		'https://images-na.ssl-images-amazon.com/images/I/91euZPBCWbL._AC_UY741_.jpg',
				// 	active: false,
				// },
			],
			// dropdowns: [
			// 	{
			// 		title: `Slim Fit {{COLOR}} Jacket`,
			// 		id: 'luggageSet-4',
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
