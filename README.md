# Get Zoom Participaints

### - Get the Zoom participaints list - while in the meeting!
### - No need to be the meeting host!

- A. Enter to the Zoom meeting **from the Zoom Web Client** - not the desktop app!
 <br/>(
  To open Zoom in the Web client:
    - Click on the Zoom link.
    - Close the confirm popup.
    - Click on the "Launch Meeting" button.
    - Close the confirm popup again.
    - Now you can click on the "Join from Your Browser" link in the bottom of the site window.
)
- B. **Copy all the content of the [**script.js file**](https://github.com/EtsHasade/get-Zoom-Participaints/blob/main/script.js).**
- C. Open the developer consols in the Zoom tab, **paste and run the script in the console**.
- D. Now **copy the full string of the participants** from the bottom of the console.
- E. Vualla!!

## Clean the list from your staff automaticly:
In the head of the script the is an array named "``AUTOMATICALLY_REMOVE_NAMES``".

If you don't want some participants to appear on the list, for example, if your school called "Coding academy", and all your staff members called something like "XXX - Coding Academy" - insert this names part: 

    'Coding Academy',

    'Coding-Academy'


And each participant with this name ("Andy - Coding Academy", "Jun - Coding-Academy", etc) will be automatically removed from the result list.

**Be aware not to include common names in this array!**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
