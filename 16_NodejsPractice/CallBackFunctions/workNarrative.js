const workNarrative = (workInfo) => {
    let narrative = '';
    for(let i=0; i<workInfo.length; i++) {
        const work = workInfo[i]
        if(i === 0) {
            narrative = `He is currently working in ${work.company} as ${work.designation} since ${work.dateOfJoining}.` 
        } else {
            narrative += `He has worked in ${work.company} as ${work.designation} from ${work.dateOfJoining} to ${work.dateOfResigning}.`
        }
    }
    return narrative;
}

module.exports = workNarrative