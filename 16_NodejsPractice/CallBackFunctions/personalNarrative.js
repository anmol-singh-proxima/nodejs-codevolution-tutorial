function getName(name) {
    const { firstname, middlename, lastname } = name
    return `${firstname} ${lastname}`
}

const personalNarrative = (personalInfo) => {
    const name = getName(personalInfo.name)
    const narrative = `${personalInfo.salutation} ${name} is ${personalInfo.age} years old. He currently stays in ${personalInfo.city}.`
    return narrative;
}

module.exports = personalNarrative