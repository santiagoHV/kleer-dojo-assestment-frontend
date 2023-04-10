export const setName = payload => ({
    type: 'UPDATE_NAME',
    payload
})

export const setEmail = payload => ({
    type: 'UPDATE_EMAIL',
    payload
})

export const setSkill = payload => ({
    type: 'UPDATE_SKILL',
    payload
})

export const incrementActualQuestion = () => ({
    type: 'INCREMENT_ACTUAL_QUESTION'
})

export const restartActualQuestion = () => ({
    type: 'RESTART_ACTUAL_QUESTION'
})