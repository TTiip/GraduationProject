interface Result {
	sucesss: boolean
	errMsg?: string
	resData: any
}

const getResponseData = (data: any, errMsg?: string): Result => {
	if (errMsg) {
		return {
			sucesss: false,
			errMsg,
			resData: data
		}
	}
	return {
		sucesss: true,
		resData: data
	}
}

export {
	getResponseData
}
