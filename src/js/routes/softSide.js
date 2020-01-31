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
			title: `Softshell Lightweight {{COLOR}} 3-Piece Set Suitcase Spinner`,
			caption:
				"Worldwide 2 year warranty. Three piece luggage in one set with 20 inch, 24 inch, & 28 inch. Upright, can be stored one into another. Better than polyester material, the luggage is made of 1680D oxford cloth, 210D nylon lining",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'blue/silver',
					hex: '#3b617e',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81r%2BjfGp--L._AC_SX425_.jpg',
					active: true,
				},
				{
					name: 'black/blue',
					hex: '#0f305e',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81H1NGCYtXL._AC_SX425_.jpg',
					active: false,
				},
				{
					name: 'black/red',
					hex: '#aa133d',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81gbgXv6R8L._SX522_.jpg',
					active: false,
				},
				{
					name: 'purple/silver',
					hex: '#4d2a52',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81h9gvxmRHL._AC_SX425_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Softshell Lightweight {{COLOR}} 3-Piece Set Suitcase Spinner`,
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
			title: `Expandable {{COLOR}} Softshell 3 Piece Set Suitcase TSA lock Spinner`,
			caption:
				"3 color Jacquard oxford cloth, making the color even richer and looks more three-dimensional. Much better and durable than polyester material. Tough corner protector is built to last.",
			image: {
				position: 'right',
			},
			colors: [
				{
					name: 'black',
					hex: '#312b32',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/8165qwHF2RL._AC_UX466_.jpg',
					active: true,
				},
				{
					name: 'navy',
					hex: '#304965',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81GR0VhbofL._AC_UX679_.jpg',
					active: false,
				},
				{
					name: 'brown',
					hex: '#523e39',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/8128r%2Bv0OvL._UX466_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} Softshell 3 Piece Set Suitcase TSA lock Spinner`,
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
			title: `Expandable {{COLOR}} Softshell Suitcase TSA Lock Spinner`,
			caption:
				"3 color Jacquard oxford cloth, making the color even richer and looks more three-dimensional. Much better and durable than polyester material. Tough corner protector is built to last.",
			image: {
				position: 'left',
			},
			colors: [
				{
					name: 'navy',
					hex: '#304965',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81o-uXyVaBL._SX425_.jpg',
					active: true,
				},
				{
					name: 'black',
					hex: '#312b32',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/71zknWbtJ3L._SX425_.jpg',
					active: false,
				},
				{
					name: 'brown',
					hex: '#523e39',
					image:
						'https://images-na.ssl-images-amazon.com/images/I/81-MrFNQGRL._SX425_.jpg',
					active: false,
				},
			],
			dropdowns: [
				{
					title: `Expandable {{COLOR}} Softshell Suitcase TSA Lock Spinner`,
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
