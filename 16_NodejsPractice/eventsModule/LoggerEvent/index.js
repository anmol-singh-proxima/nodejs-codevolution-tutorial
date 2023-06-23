const data = require('./data.json')
const Logger = require('./Logger')

const logger = new Logger();

/* Adding Listeners to the Logging Events */
logger.on('login-succeed', (data) => {
    console.log("User Logged-in Successfully! Please visit the website!")
    console.log("Server Response:", data)
})
logger.on('login-failed', (data) => {
    console.log("User Logged-in Failed! Please Try Again!")
    console.log("Server Response:", data)
})

/* Creating the User Login data */
const passLoginValues = {
    username: "anmol",
    password: "abc@123"
}
const failLoginValues = {
    username: "jsdhskjds",
    password: "jshdjshds"
}

/* Creating the Server response data */
const loginSucceedResponse = {
    status: 200,
    token: 'some-random-text-to-authorize',
    message: 'Login Successful'
}
const loginFailedResponse = {
    status: 300,
    message: 'Login Failed'
}

/* Function to match the passed login-values with the Database values */
function checkLoginInfo({username, password}) {
    const users = data.users
    for(let i=0; i<users.length; i++) {
        const user = users[i]
        if(username === user.username && password === user.password) {
            return true;
        }
    }
    return false;
}

/* Function to check if the login is successful or failed and forward to appropriate methods */
function userLogin(loginValues) {
    if(checkLoginInfo(loginValues)) {
        logger.loginSucceed(loginSucceedResponse)
    } else {
        logger.loginFailed(loginFailedResponse)
    }
}

// userLogin(failLoginValues)
userLogin(passLoginValues)