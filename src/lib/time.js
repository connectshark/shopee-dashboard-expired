import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

const Time = {
	getNow: () => parseInt(dayjs().format('X')),

	getStartTime: () => parseInt(dayjs().subtract(30, 'd').format('X')),

	formatReadDate: timeStamp => dayjs.unix(timeStamp).format('MM/DD'),

	formatTime: date => parseInt(dayjs(date).format('X')) ,

	minDate () {
		return dayjs().month(0).date(1).format()
	}
}

export default Time