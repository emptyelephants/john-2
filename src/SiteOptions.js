const assetUrl = '/imageshq/';

const SiteOptions = {
	yourName: 'John De Vito',
	bioInfo: {
		bioBlurb: `
      we need to fix this to work as HTML
    `,
		bioHero: `/imageshq/literally_john.png`,
		bioHero2: `/imageshq/botanicanna_bts_0723_9.jpg`,
		bioSidePic: `${assetUrl}fake-plant.jpg`,
	},
	gridInfo: [
		{
			name: 'Fallen Grape',
			thumbnail: `${assetUrl}/FALLEN_GRAPE/fg_2.jpg`,
			category: 'commercial',
		},
		{
			name: 'Femme Folle',
			thumbnail: `${assetUrl}/FEMME_FOLLE/femme_folle_1.jpg`,
			category: 'narrative',
		},
		{
			name: 'Glass Half Full',
			thumbnail: `${assetUrl}/HALF_FULL/half_full_1.JPG`,
			category: 'narrative',
		},
		{
			name: 'Jae and the Strangefruit',
			thumbnail: `${assetUrl}/JATSF/jatsf_4.jpg`,
			category: 'narrative',
		},
		{
			name: 'Kos',
			thumbnail: `${assetUrl}/KOS/kos_10.jpg`,
			category: 'commercial',
		},
		{
			name: 'Legacy Box',
			thumbnail: `${assetUrl}/LEGACYBOX/lb_010.jpg`,
			category: 'commercial',
		},
		{
			name: 'MakerX',
			thumbnail: `${assetUrl}/MAKERX/makerx_10.jpg`,
			category: 'commercial',
		},
		{
			name: 'Summer 7',
			thumbnail: `${assetUrl}/S7/s7_10.jpg`,
			category: 'narrative',
		},
		{
			name: 'Summer 8',
			thumbnail: `${assetUrl}/S8/s8_1.jpg`,
			category: 'narrative',
		},
		{
			name: 'Skin',
			thumbnail: `${assetUrl}/SKIN/skin_1.JPG`,
			category: 'narrative',
		},
		{
			name: 'Yellow Slip',
			thumbnail: `${assetUrl}/YELLOW_SLIP/yellow_slip_1.JPG`,
			category: 'narrative',
		},
	],
	individualProjectInfo: {
		'Fallen Grape': {
			name: 'Fallen Grape',
			projectImages: [
				`${assetUrl}/FALLEN_GRAPE/fg_1.jpg`,
				`${assetUrl}/FALLEN_GRAPE/fg_2.jpg`,
				`${assetUrl}/FALLEN_GRAPE/fg_3.jpg`,
				`${assetUrl}/FALLEN_GRAPE/fg_4.png`,
			],
			role: 'Director of Photography, Co-Project Manager',
			videoEmbed: ``,
		},
		'Femme Folle': {
			name: 'Femme Folle',
			projectImages: [
				`${assetUrl}/FEMME_FOLLE/femme_folle_1.jpg`,
				`${assetUrl}/FEMME_FOLLE/femme_folle_2.jpg`,
				`${assetUrl}/FEMME_FOLLE/femme_folle_3.jpg`,
				`${assetUrl}/FEMME_FOLLE/femme_folle_4.jpg`,
				`${assetUrl}/FEMME_FOLLE/femme_folle_5.jpg`,
				`${assetUrl}/FEMME_FOLLE/femme_folle_6.jpg`,
				`${assetUrl}/FEMME_FOLLE/femme_folle_7.jpg`,
				`${assetUrl}/FEMME_FOLLE/femme_folle_8.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography, Colorist',
			desc: 'A young woman grappling with her sexuality finds herself in a toxic relationship that challenges her personal boundaries and mental fortitude.',
		},
		'Glass Half Full': {
			name: 'Glass Half Full',
			projectImages: [
				`${assetUrl}/HALF_FULL/half_full_1.jpg`,
				`${assetUrl}/HALF_FULL/half_full_2.jpg`,
				`${assetUrl}/HALF_FULL/half_full_3.jpg`,
				`${assetUrl}/HALF_FULL/half_full_4.jpg`,
				`${assetUrl}/HALF_FULL/half_full_5.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography, Co-Producer',
			desc: 'A dry, dark humor about an Asian-American family who are challenged to relate to their traditional American inlaws.',
		},
		'Jae and the Strangefruit': {
			name: 'Jae and the Strangefruit',
			projectImages: [
				`${assetUrl}/JATSF/jatsf_3.PNG`,
				`${assetUrl}/JATSF/jatsf_4.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography',
			desc: 'A young sex worker trying to make ends meet gets involved with a malevolent cult. ',
		},
		Kos: {
			name: 'KOS',
			projectImages: [
				`${assetUrl}/KOS/kos_10.jpg`,
				`${assetUrl}/KOS/kos_20.jpg`,
				`${assetUrl}/KOS/kos_30.jpg`,
				`${assetUrl}/KOS/kos_40.jpg`,
				`${assetUrl}/KOS/kos_50.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography',
		},
		'Legacy Box': {
			name: 'Legacy Box',
			projectImages: [
				`${assetUrl}/LEGACYBOX/lb_010.jpg`,
				`${assetUrl}/LEGACYBOX/lb_020.jpg`,
				`${assetUrl}/LEGACYBOX/lb_30.jpg`,
				`${assetUrl}/LEGACYBOX/lb_40.jpg`,
				`${assetUrl}/LEGACYBOX/lb_50.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography',
		},
		MakerX: {
			name: 'MakerX',
			projectImages: [
				`${assetUrl}/MAKERX/makerx_10.jpg`,
				`${assetUrl}/MAKERX/makerx_20.jpg`,
				`${assetUrl}/MAKERX/makerx_30.jpg`,
				`${assetUrl}/MAKERX/makerx_40.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography',
		},
		'Summer 7': {
			name: 'Summer 7',
			projectImages: [
				`${assetUrl}/S7/s7_10.jpg`,
				`${assetUrl}/S7/s7_20.jpg`,
				`${assetUrl}/S7/s7_30.jpg`,
				`${assetUrl}/S7/s7_40.jpg`,
				`${assetUrl}/S7/s7_50.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography',
			desc: 'In a world ravaged by nuclear war, a group of survivors are morally divided over the discovery of a wounded soldier.',
		},
		'Summer 8': {
			name: 'Summer 8',
			projectImages: [
				`${assetUrl}/S8/s8_1.jpg`,
				`${assetUrl}/S8/s8_2.jpg`,
				`${assetUrl}/S8/s8_3.jpg`,
				`${assetUrl}/S8/s8_4.jpg`,
				`${assetUrl}/S8/s8_5.jpg`,
				`${assetUrl}/S8/s8_6.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography',
			desc: 'The tantalizing sequel of Summer 7, a quarreling duo find themselves imprisoned by an unknown group of hostile scavengers.',
		},
		Skin: {
			name: 'Skin',
			projectImages: [
				`${assetUrl}/SKIN/skin_1.JPG`,
				`${assetUrl}/SKIN/skin_2.JPG`,
				`${assetUrl}/SKIN/skin_3.JPG`,
				`${assetUrl}/SKIN/skin_4.JPG`,
				`${assetUrl}/SKIN/skin_5.JPG`,
				`${assetUrl}/SKIN/skin_6.JPG`,
			],
			videoEmbed: ``,
			role: 'Director of Photography, Co-Editor, Colorist',
			desc: 'A county detective investigating a series of disappearances is intrigued by an old man who claims a supernatural entity is to blame.',
		},
		'Yellow Slip': {
			name: 'Yellow Slip',
			projectImages: [
				`${assetUrl}/YELLOW_SLIP/yellow_slip_1.jpg`,
				`${assetUrl}/YELLOW_SLIP/yellow_slip_2.jpg`,
				`${assetUrl}/YELLOW_SLIP/yellow_slip_3.jpg`,
				`${assetUrl}/YELLOW_SLIP/yellow_slip_4.jpg`,
				`${assetUrl}/YELLOW_SLIP/yellow_slip_5.jpg`,
			],
			videoEmbed: ``,
			role: 'Director of Photography, Editor, Colorist',
			desc: 'A Mexican woman’s world is turned upside down when her undocumented grandmother is apprehended by local authorities.',
		},
	},
};

export default SiteOptions;
