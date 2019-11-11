import {
	resObj,
	signUpResObj,
	simplerResponseHandling,
	simplerErrorMessage,
	API_STATUS,
	API_CODE,
	API_MESSAGE,
	API_DATA,
} from './objects'
import { stopUndefined, duplicatedIds } from './codeToolings'

import {
	signUpEmailValidation,
	signUpPasswordValidation,
	checkBoxValidation,
	signUpUsernameValidation,
	signInEmailValidation,
	signInPasswordValidation,
	emailPopoverMessages,
	usernamePopoverMessages,
	passwordPopoverMessages,
	cardNumberValidation,
	cardNameValidation,
	cardCvcValidation,
	cardExpiryValidation,
	usernameLength,
} from './validation'

export {
	resObj,
	simplerResponseHandling,
	simplerErrorMessage,
	API_STATUS,
	API_CODE,
	API_MESSAGE,
	API_DATA,
	signUpResObj,
	stopUndefined,
	duplicatedIds,
	signUpEmailValidation,
	signUpPasswordValidation,
	checkBoxValidation,
	signUpUsernameValidation,
	signInEmailValidation,
	signInPasswordValidation,
	emailPopoverMessages,
	usernamePopoverMessages,
	passwordPopoverMessages,
	cardNumberValidation,
	cardNameValidation,
	cardCvcValidation,
	cardExpiryValidation,
	usernameLength,
}
