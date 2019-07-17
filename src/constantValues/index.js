// TODO this should turn into npm library so that backend can use the same code
// constants is a nodejs module, so the folder is named constantValues instead

import {
	CODE,
	DATA,
	YEARS,
	STATUS,
	MESSAGE,
	ENDPOINT,
	MONTH_NAMES,
	MONTH_ABVS_SELECT,
	IS_VALID,
	EXTRA_HEIGHT,
	SUBMIT_ERRORS,
} from 'constantValues/CommonConstants'

import {
	ALERT_BODY,
	ALERT_COLOR,
	ALERT_OPEN,
	ALERT_ICON,
} from 'constantValues/AlertConstants'

import {
	SIGN_UP,
	SIGN_UP_GQL_INPUT,
	SIGN_UP_EMAIL,
	SIGN_UP_EMAIL_EXTRA_HEIGHT,
	SIGN_UP_PASSWORD,
	SIGN_UP_PASSWORD_EXTRA_HEIGHT,
	SIGN_UP_USERNAME,
	SIGN_UP_USERNAME_EXTRA_HEIGHT,
} from 'constantValues/SignUpConstants'

import {
	ENV,
	ENV_REACT_APP_API_KEY,
	ENV_REACT_APP_AUTH_DOMAIN,
	ENV_REACT_APP_DATABASE_URL,
	ENV_REACT_APP_PROJECT_ID,
	ENV_REACT_APP_STORAGE_BUCKET,
	ENV_REACT_APP_MESSAGING_SENDER_ID,
	ENV_REACT_APP_APP_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_URL,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
} from 'constantValues/EnvKeyConstants'

import {
	AUTH_MODAL,
	AUTH_MODAL_BODY,
	AUTH_MODAL_OPEN,
	AUTH_MODAL_TITLE,
	AUTH_MODAL_LOADER,
	AUTH_MODAL_CALLBACK,
} from 'constantValues/AuthModalConstants'

import {
	USER,
	USER_UID,
	USER_EMAIL,
	USER_GENDER,
	USER_COUNTRY,
	USER_LANGUAGES,
	USER_PHOTO_URL,
	USER_SIGNED_IN,
	USER_BIRTH_DATE,
	USER_DISPLAY_NAME,
	USER_PHONE_NUMBER,
	USER_PROVIDER_DATA,
	USER_EMAIL_IS_VERIFIED,
} from 'constantValues/UserConstants'

import {
	SIGN_IN_EMAIL,
	SIGN_IN_OPEN,
	SIGN_IN_CALLBACK,
} from 'constantValues/SignInConstants'

import {
	CARD_CVC,
	CARD_TYPE,
	CARD_CARDS,
	CARD_NUMBER,
	CARD_IS_OPEN,
	CARD_IS_DEFAULT,
	CARD_EXPIRY_YEAR,
	CARD_HOLDER_NAME,
	CARD_EXPIRY_MONTH,
	CARD_LAST_4_DIGITS,
} from 'constantValues/CardConstants'

import {
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
} from 'constantValues/InternalErrorConstants'

import {
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
} from 'constantValues/UnexpectedErrorConstants'

import {
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PAGE,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_PARAM,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_BILLING,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
} from 'constantValues/RouteConstants'

import { FIREBASE_STORAGE_USER_AVATAR } from 'constantValues/FirebaseConstants'

export {
	CODE,
	DATA,
	YEARS,
	STATUS,
	MESSAGE,
	ENDPOINT,
	MONTH_NAMES,
	MONTH_ABVS_SELECT,
	IS_VALID,
	EXTRA_HEIGHT,
	SUBMIT_ERRORS,
	ALERT_BODY,
	ALERT_COLOR,
	ALERT_OPEN,
	ALERT_ICON,
	SIGN_UP,
	SIGN_UP_GQL_INPUT,
	SIGN_UP_EMAIL,
	SIGN_UP_EMAIL_EXTRA_HEIGHT,
	SIGN_UP_PASSWORD,
	SIGN_UP_PASSWORD_EXTRA_HEIGHT,
	SIGN_UP_USERNAME,
	SIGN_UP_USERNAME_EXTRA_HEIGHT,
	ENV,
	ENV_REACT_APP_API_KEY,
	ENV_REACT_APP_AUTH_DOMAIN,
	ENV_REACT_APP_DATABASE_URL,
	ENV_REACT_APP_PROJECT_ID,
	ENV_REACT_APP_STORAGE_BUCKET,
	ENV_REACT_APP_MESSAGING_SENDER_ID,
	ENV_REACT_APP_APP_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_URL,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
	AUTH_MODAL,
	AUTH_MODAL_BODY,
	AUTH_MODAL_OPEN,
	AUTH_MODAL_TITLE,
	AUTH_MODAL_LOADER,
	AUTH_MODAL_CALLBACK,
	USER,
	USER_UID,
	USER_EMAIL,
	USER_GENDER,
	USER_COUNTRY,
	USER_LANGUAGES,
	USER_PHOTO_URL,
	USER_SIGNED_IN,
	USER_BIRTH_DATE,
	USER_DISPLAY_NAME,
	USER_PHONE_NUMBER,
	USER_PROVIDER_DATA,
	USER_EMAIL_IS_VERIFIED,
	SIGN_IN_EMAIL,
	SIGN_IN_OPEN,
	SIGN_IN_CALLBACK,
	CARD_CVC,
	CARD_TYPE,
	CARD_CARDS,
	CARD_NUMBER,
	CARD_IS_OPEN,
	CARD_IS_DEFAULT,
	CARD_EXPIRY_YEAR,
	CARD_HOLDER_NAME,
	CARD_EXPIRY_MONTH,
	CARD_LAST_4_DIGITS,
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PAGE,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_PARAM,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_SETTINGS_BILLING,
	ROUTE_PAGE_SETTINGS_ACCOUNT,
	ROUTE_PAGE_SETTINGS_NOTIFICATION,
	ROUTE_PAGE_PASSWORD_RESET,
	FIREBASE_STORAGE_USER_AVATAR,
}
