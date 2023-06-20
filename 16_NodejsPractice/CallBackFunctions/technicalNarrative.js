const technicalNarrative = (technicalInfo) => {
    let narrative = 'He is good in ';
    for(let i=0; i<technicalInfo.length; i++) {
        if(i===technicalInfo.length-1) {
            narrative += "and " + technicalInfo[i] + "."
        } else {
            narrative += technicalInfo[i] + ", "
        }
    }
    return narrative;
}

module.exports = technicalNarrative