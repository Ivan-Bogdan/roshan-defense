import { 
    SHOW_HOME, SHOW_SEARCH_PLAYER, SHOW_SEARCH_MATCH,
    REQUEST_PLAYER, REQUEST_MATCH,
    PLAYER_TAB_SELECT,
} from '../constants/index';


export function showHome() { return { type: SHOW_HOME } };
export function showSearchPlayer() { return { type: SHOW_SEARCH_PLAYER } };
export function showSearchMatch() { return { type: SHOW_SEARCH_MATCH } };

export function requestPlayer(steamId) { return { type: REQUEST_PLAYER, steamId } };
export function requestMatch(matchId) { return {type: REQUEST_MATCH, matchId} };
export function playerTabSelect(tabName) { return {type: PLAYER_TAB_SELECT, tabName} };

