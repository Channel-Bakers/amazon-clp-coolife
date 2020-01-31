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
			title: `Expandable {{COLOR}} Suitcase PC+ABS 3 Piece Set with TSA Lock Spinner`,
			caption:
				"ABS+PC material, durable and lighter hard shell, features textured finish to prevent against scratches. The beveled edge design on the upper part increases toughness for the luggage.",
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
			title: `{{COLOR}} Suitcase 2-Piece Set Carry On ABS+PC Spinner Trolley with Pocket Compartment`,
			caption:
				"The zipper of main compartment and front pocket compartment can be locked in one TSA locking pad, bring more convenience and safety.",
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
			title: `Expandable {{COLOR}} Suitcase PC+ABS 3-Piece Set with TSA Lock Spinner`,
			caption:
				"Perfect streamlined design, and adopts a variety of internationally latest patented technologies and two-wheel design, which is more smooth, quieter and more durable.",
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
			title: `Expandable {{COLOR}} 3-Piece Set PC+ABS Spinner Suitcase Built-In TSA lock`,
			caption:
				"The suitcase benefits hugely from its ABS+PC hard plastic shell. it goes through insanely strict quality control test standards, creating strong and sturdy pieces that can withstand any forms of rough handling.",
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
