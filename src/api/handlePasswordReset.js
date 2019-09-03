import { auth } from 'firebaseInit'
import { UNEXPECTED_ERROR_CODE_3 } from 'constantValues'
import { simplerResponseHandling } from 'utils'

const handlePasswordReset = email => {
	return auth()
		.sendPasswordResetEmail(email)
		.then(() => {
			// Email sent success, return undefined
		})
		.catch(err => {
			return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_3, err)
		})
}

export default handlePasswordReset
