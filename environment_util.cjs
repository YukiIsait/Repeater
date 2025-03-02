function getTarget() {
    const target = process.env.TARGET
    if (!target) {
        throw new Error('TARGET environment variable is not set')
    }
    return target
}

function getPort() {
    const val = process.env.PORT
    if (val) {
        const port = parseInt(val, 10)
        if (isNaN(port)) {
            // named pipe
            return val
        }
        if (port >= 0) {
            // port number
            return port
        }
    }
    // default port
    return 3000
}

module.exports = { getTarget, getPort }
