const Time = {
	getNow: () => moment().format('X'),

	getStartTime: () => moment().subtract(30, 'd').format('X'),

	formatReadDate: timeStamp => {
		return moment(timeStamp, 'X').format('MM/DD')
	},

	minDate () {
		return moment().month(0).date(1).format()
	}
}

export default Time