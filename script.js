'use strict'
/*
A. Enter to the Zoom meeting from the Zoom Web Client - not the desktop app!
(
 To open Zoom in the Web client:
    Click on the Zoom link.
    Close the confirm popup.
    Click on the "Launch Meeting" button.
    Close the confirm popup again.
    Now you can click on the "Join from Your Browser" link in the bottom of the site window.
)
B. copy all this script.
C. Open the consols, paste and run this script.
D. Now copy the full string from the bottom of the console.
E. Vualla!!
*/

const participantsContainerSelector = '.participants-section-container'
const participantSelector = '[id^="participants-list-"] .participants-item__display-name'

try {
    const elParticipantsContainer = document.querySelector(participantsContainerSelector)
    if (!elParticipantsContainer) throw new Error()

    elParticipantsContainer.style.height = '50000px' // set place for zoom to render all participants

    const elParticipants = [...document.querySelectorAll(participantSelector)]
    const allParticipantNames = elParticipants.map((p) => p.innerText) // get all names

    const toRemoveNames = [
        'Coding Academy',
        'Coding-Academy'
    ]
    const participantNames = allParticipantNames.filter(pName => {
        return toRemoveNames.every(removeName => !pName.includes(removeName))
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


