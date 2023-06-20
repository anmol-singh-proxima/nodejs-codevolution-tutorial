const generateNarrative = (personalNarrative, educationNarrative, technicalNarrative, workNarrative, personData) => {
    const {personalInfo, educationInfo, technicalInfo, workInfo} = personData
    const personal = personalNarrative(personalInfo)
    const education = educationNarrative(educationInfo)
    const technical = technicalNarrative(technicalInfo)
    const work = workNarrative(workInfo)
    const narrative = `${personal}\n${education}\n${technical}\n${work}`
    return narrative
}

module.exports = generateNarrative;