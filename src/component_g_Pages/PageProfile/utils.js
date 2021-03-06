import { useState, useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'component_f_MultiOrganisms'
import { docSenshiProfileOnSnapshot } from 'fireStored'
import {
	UNEXPECTED_ERROR_CODE_16,
	UNEXPECTED_ERROR_CODE_17,
} from 'constantValues'
import { storeModalSimpleError } from 'state'

const {
	PAGE_ERROR_CODE_NOT_FOUND,
	PAGE_ERROR_CODE_NOT_A_SENSHI,
} = stopUndefined(Exports)

const useSenshiProfileData = (uid, currentUserUid) => {
	const [loading, setLoading] = useState(true)
	const [exist, setExist] = useState(true)
	const [data, setData] = useState(null)
	const [errorCode, setErrorCode] = useState(null)
	const observer = useRef(() => {})

	useEffect(() => {
		const attachListener = async () => {
			observer.current = docSenshiProfileOnSnapshot(uid || currentUserUid)(
				async docSnapshot => {
					try {
						const data = await docSnapshot.data()
						if (data) {
							setData(data)
							setLoading(false)
							setExist(true)
						} else {
							setExist(false)
							setLoading(false)
							if (uid) {
								setErrorCode(PAGE_ERROR_CODE_NOT_FOUND)
							} else if (currentUserUid) {
								setErrorCode(PAGE_ERROR_CODE_NOT_A_SENSHI)
							}
							return
						}
					} catch (err) {
						setExist(false)
						setErrorCode(null)
						storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_17)
					}
				},
				err => {
					setExist(false)
					setErrorCode(null)
					storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_16)
				}
			)
		}
		attachListener()
		return observer.current
	}, [uid, currentUserUid])

	return [loading, exist, data, errorCode]
}

export { useSenshiProfileData }
