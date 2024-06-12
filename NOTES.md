# smash_or_SMASH
Webgame for advancedwebdev




# THE PLAN


- screens:
    - Monster creator screen
    - Monster date-or-fight screen (with randomized roller)

- Optional screens
    - You win/lose screen?
    - Scoreboard of users monster's sucessful fights/dates

- Needed:
    - GetMonster
        - Get dnd info from dnd api
        - Put into monsterContext to be used by rest of website
    - GetQuestion
        - Get question from internal api
        - Put into monsterContext to be used by rest of website
    - Monster creator
        - Pulls monster from api
        - Pulls list of random questions from internal API
        - Store user's slider positions?
        - Button to randomize a new monster and new questions
        - Button to finish editing and go into the main screen
    - Question randomizers
        - Creates a random list of questions for monster creator
        - Stores list to be used with all opponent monsters 
    - Monster dating button:
        - Compares the difference on players and enemy monster
        - rolls a 1d20 that determines the result, with the success determined by the average difference
    - Monster fighting button
        - Compares CR of player monster and enemy monster, and rolls a 1d20 to randomly determine the result
    - YOU WIN/LOSE Popup
        - Watches for flag set by monster date/fight, and pops up with a win/loss accordingly
