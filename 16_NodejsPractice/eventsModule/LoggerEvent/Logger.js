const EventEmitter = require('node:events')

class Logger extends EventEmitter {
    constructor() {
        super();
    }

    loginSucceed(data) {
        this.emit('login-succeed', data);
    }

    loginFailed(data) {
        this.emit('login-failed', data);
    }
}

module.exports = Logger;