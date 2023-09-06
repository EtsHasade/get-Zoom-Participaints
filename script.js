/*
A. Enter to the Zoom meeting from the Zoom Web Client - not the desktop app!
B. copy all this script.
C. Open the consols, paste and run this script.
D. Now copy the full string from the bottom of the console. Vualla!!
*/

try {
    const elParticipantsContainer = document.querySelector('.participants-section-container')
    if (!elParticipantsContainer) throw new Error()

    elParticipantsContainer.style.height = '50000px' // set place for zoom to render all participants

    const elParticipants = [...document.querySelectorAll('[id^="participants-list-"] .participants-item__display-name')]
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

    participantNamesStr // In the console, this line will print the list.

} catch (err) {
    alert('Open the Participants list and try again')
}


