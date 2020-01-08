import {
	ICONS_COMMON_ID,
	ICON_COMMON_PATH,
	ICONS_COMMON_TOOLTIP,
} from './ImagesTooltip'

import {
	FIRESTORE_SENSHI_GAMES_DOTA2,
	FIRESTORE_SENSHI_GAMES_PUBG,
	FIRESTORE_SENSHI_GAMES_LOL,
	FIRESTORE_SENSHI_GAMES_APEX,
	FIRESTORE_SENSHI_GAMES_FORTNITE,
} from 'constantValues'
import { createGetOptions } from 'utils'

const gameIconsPath = game => require(`assets/icons/games/${game}.ico`)

const options = [
	{
		[ICONS_COMMON_ID]: FIRESTORE_SENSHI_GAMES_DOTA2,
		[ICON_COMMON_PATH]: gameIconsPath('Dota2'),
		[ICONS_COMMON_TOOLTIP]: 'Dota 2',
	},
	{
		[ICONS_COMMON_ID]: FIRESTORE_SENSHI_GAMES_PUBG,
		[ICON_COMMON_PATH]: gameIconsPath('PUBG'),
		[ICONS_COMMON_TOOLTIP]: 'PUBG',
	},
	{
		[ICONS_COMMON_ID]: FIRESTORE_SENSHI_GAMES_LOL,
		[ICON_COMMON_PATH]: gameIconsPath('LOL'),
		[ICONS_COMMON_TOOLTIP]: 'LOL',
	},
	{
		[ICONS_COMMON_ID]: FIRESTORE_SENSHI_GAMES_APEX,
		[ICON_COMMON_PATH]: gameIconsPath('Apex'),
		[ICONS_COMMON_TOOLTIP]: 'Apex Legends',
	},
	{
		[ICONS_COMMON_ID]: FIRESTORE_SENSHI_GAMES_FORTNITE,
		[ICON_COMMON_PATH]: gameIconsPath('Fortnite'),
		[ICONS_COMMON_TOOLTIP]: 'Fortnite',
	},
]

const getImagesTooltip = createGetOptions(options, ICONS_COMMON_ID)

export { getImagesTooltip }
