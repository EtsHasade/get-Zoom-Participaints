'use strict'
let AUTOMATICALLY_REMOVE_NAMES = [
    /* 
    insert here the names that you want to automatically remove from the result list.
    for example, if your school called "Coding academy", and all your staff members called something like "XXX - Coding Academy" -  insert this names part: 
    
    'Coding Academy',
    'Coding-Academy'
    */
]

let PARTICIPANTS_CONTAINER_SELECTOR = '.participants-section-container'
let PARTICIPANT_SELECTOR = '[id^="participants-list-"] .participants-item__display-name'

try {
    let elParticipantsContainer = document.querySelector(PARTICIPANTS_CONTAINER_SELECTOR)
    if (!elParticipantsContainer) throw new Error()

    elParticipantsContainer.style.height = '50000px' // set place for zoom to render all participants

    let elParticipants = [...document.querySelectorAll(PARTICIPANT_SELECTOR)]
    let allParticipantNames = elParticipants.map((p) => p.innerText) // get all names


    let participantNames = allParticipantNames.filter(pName => {
        return AUTOMATICALLY_REMOVE_NAMES.every(removeName => !pName.includes(removeName))
    })

    let participantNamesStr = JSON.stringify(participantNames)
        .replaceAll(',', '\n')
        .replaceAll('"', '')
        .replaceAll('[', '')
        .replaceAll(']', '')
        .replaceAll('\n\n', '\n')

    console.log(participantNamesStr)
    participantNamesStr // In the console, this line will print the list as some element. and we can copy it with "Copy string content".

} catch (err) {
    alert('Open the Participants list and try again')
}


