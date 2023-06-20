const educationNarrative = (educationInfo) => {
    let narrative = '';
    for(let i=0; i<educationInfo.length; i++) {
        const education = educationInfo[i]
        narrative += `He has completed his degree in ${education.degree} (${education.started}-${education.completed}) from ${education.college} college in ${education.city} and has achieved ${education.cgpa} CGPA. `
    }
    return narrative;
}

module.exports = educationNarrative