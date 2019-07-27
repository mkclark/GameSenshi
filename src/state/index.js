import { Subscribe, Provider } from 'unstated'
import { STATE, RESET_STATE } from 'state/constants'
import { StateContainer } from 'state/StateContainer'
import CardContainer from 'state/CardContainer'
import {
	UserContainer,
	STORE_USER_STATE_IS_SIGNING_IN,
} from 'state/UserContainer'

import {
	storeAlert,
	storeAlertShow,
	storeAlertToggle,
	storeAlertSetState,
	storeAlertResetState,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	STORE_ALERT_STATE_ICON,
} from 'state/Alert'

import {
	storeAuthModal,
	storeAuthModalShow,
	storeAuthModalClose,
	storeAuthModalToggle,
	storeAuthModalGetItem,
	storeAuthModalSetItem,
	storeAuthModalInitialize,
	storeAuthModalRemoveItem,
	storeAuthModalOnAuthStateChange,
	storeAuthModalProcessRedirectResult,
	storeAuthModalOnContinue,
	storeAuthModalSetState,
	storeAuthModalResetState,
	STORE_AUTH_MODAL_STATE_BODY,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_IS_OPEN,
	STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK,
} from 'state/AuthModal'

import {
	storeSignIn,
	storeSignInShow,
	storeSignInClose,
	storeSignInToggle,
	storeSignInSetState,
	storeSignInResetState,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
} from 'state/SignIn'

import {
	storeProgress,
	storeProgressShow,
	storeProgressClose,
	storeProgressSetState,
	storeProgressResetState,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_IS_OPEN,
} from 'state/Progress'

import {
	storeRoute,
	storeRouteSetIsSignedIn,
	storeRouteSetState,
	storeRouteResetState,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
} from 'state/Route'

const cardStore = new CardContainer()
const userStore = new UserContainer()

export {
	STATE,
	RESET_STATE,
	Provider,
	Subscribe,
	StateContainer,
	cardStore,
	userStore,
	STORE_USER_STATE_IS_SIGNING_IN,
	storeAlert,
	storeAlertShow,
	storeAlertToggle,
	storeAlertSetState,
	storeAlertResetState,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	STORE_ALERT_STATE_ICON,
	storeProgress,
	storeProgressShow,
	storeProgressClose,
	storeProgressSetState,
	storeProgressResetState,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_IS_OPEN,
	storeSignIn,
	storeSignInShow,
	storeSignInClose,
	storeSignInToggle,
	storeSignInSetState,
	storeSignInResetState,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
	storeAuthModal,
	storeAuthModalShow,
	storeAuthModalClose,
	storeAuthModalToggle,
	storeAuthModalGetItem,
	storeAuthModalSetItem,
	storeAuthModalInitialize,
	storeAuthModalRemoveItem,
	storeAuthModalOnAuthStateChange,
	storeAuthModalProcessRedirectResult,
	storeAuthModalOnContinue,
	storeAuthModalSetState,
	storeAuthModalResetState,
	STORE_AUTH_MODAL_STATE_BODY,
	STORE_AUTH_MODAL_STATE_TITLE,
	STORE_AUTH_MODAL_STATE_LOADER,
	STORE_AUTH_MODAL_STATE_IS_OPEN,
	STORE_AUTH_MODAL_STATE_CONTINUED_CALLBACK,
	storeRoute,
	storeRouteSetIsSignedIn,
	storeRouteSetState,
	storeRouteResetState,
	STORE_ROUTE_STATE_IS_SIGNED_IN,
}
