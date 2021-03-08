const domain = 'http://127.0.0.1:8881'
module.exports = {
	influxdb: {
		user: 'root',
		password: 'root',
		port: 8086,
		host: '127.0.0.1'
	},
	redis: {
		port: 6379,
		host: '127.0.0.1'
	},
	domain: domain,
	path: domain + '/'
}
