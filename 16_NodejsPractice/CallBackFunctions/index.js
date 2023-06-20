const data = require('./data.json')
const personalNarrative = require('./personalNarrative')
const educationNarrative = require('./educationNarrative')
const technicalNarrative = require('./technicalNarrative')
const workNarrative = require('./workNarrative')
const generateNarrative = require('./generateNarrative')

const profileData = data.profile
for(let i=0; i<profileData.length; i++) {
    const personalInfo = profileData[i].personal
    const educationInfo = profileData[i].education
    const technicalInfo = profileData[i].technicalSkills
    const workInfo = profileData[i].workExperience
    const person = { personalInfo, educationInfo, technicalInfo, workInfo }
    const narrative = generateNarrative(personalNarrative, educationNarrative, technicalNarrative, workNarrative, person)
    console.log(narrative)
}