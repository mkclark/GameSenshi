import { createDocGetSet } from './utils'
import { getServerTimestamp } from 'firebaseInit'

import {
	fireStorePathSenshiSettingProfile,
	FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS,
	FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL,
	DATABASE_STATUS_ONLINE,
	DATABASE_STATUS_ONLINE_LAST,
} from 'constantValues'

const [, docSenshiProfileSet, docSenshiProfileOnSnapshot] = createDocGetSet(
	fireStorePathSenshiSettingProfile
)

const docSenshiProfileAvatarSet = url =>
	docSenshiProfileSet()({
		[FIRESTORE_USER_SETTINGS_GENERAL_USER_AVATAR]: url,
	})

const docSenshiProfileCarouselSet = url =>
	docSenshiProfileSet()({
		[FIRESTORE_SENSHI_SETTINGS_PROFILE_CAROUSEL]: url,
	})

const docSenshiProfileChannelSet = url =>
	docSenshiProfileSet()({
		[FIRESTORE_SENSHI_SETTINGS_PROFILE_CHANNELS]: url,
	})

const docdocSenshiProfileOnlineSet = online =>
	docSenshiProfileSet()({
		[DATABASE_STATUS_ONLINE]: online,
		[DATABASE_STATUS_ONLINE_LAST]: getServerTimestamp(),
	})

export {
	docSenshiProfileOnSnapshot,
	docSenshiProfileAvatarSet,
	docSenshiProfileCarouselSet,
	docSenshiProfileChannelSet,
	docdocSenshiProfileOnlineSet,
}
