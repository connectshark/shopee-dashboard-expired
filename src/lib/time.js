const Time = {
	formatTimeStamp: (date) => new Date(date).getTime() / 1000,

	formatReadDate: date => new Date(date * 1000).getMonth() + 1 + '/' + new Date(date * 1000).getDate()
}

export default Time