import { CREDS } from '../constants'

export function emailEventChanges(payload) {
    return { type: CREDS, payload }
};