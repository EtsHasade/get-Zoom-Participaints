'use strict'
const AUTOMATICALLY_REMOVE_NAMES = [
    'Coding Academy',
    'Coding-Academy'
]
const PARTICIPANTS_CONTAINER_SELECTOR = '.participants-section-container'
const PARTICIPANT_SELECTOR = '[id^="participants-list-"] .participants-item__display-name'

try {
    const elParticipantsContainer = document.querySelector(PARTICIPANTS_CONTAINER_SELECTOR)
    if (!elParticipantsContainer) throw new Error()

    elParticipantsContainer.style.height = '50000px' // set place for zoom to render all participants

    const elParticipants = [...document.querySelectorAll(PARTICIPANT_SELECTOR)]
    const allParticipantNames = elParticipants.map((p) => p.innerText) // get all names


    const participantNames = allParticipantNames.filter(pName => {
        return AUTOMATICALLY_REMOVE_NAMES.every(removeName => !pName.includes(removeName))
    })

    const participantNamesStr = JSON.stringify(participantNames)
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


