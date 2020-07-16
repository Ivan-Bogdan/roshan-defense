import { Map, set } from "immutable";
import {
  SHOW_HOME,
  SHOW_SEARCH_PLAYER,
  SHOW_SEARCH_MATCH,
  REQUEST_PLAYER,
  REQUEST_MATCH,
  SELECT_PAGE,
  PAGES,
  PLAYER_TAB,
  PLAYER_TABS,
  PLAYER_TAB_SELECT,
  PLAYERID,
  MATCHID,
  PLAYER,
  DATAMATCH,
} from "../constants/index";

const testPlayer = {"id":247999,"SteamID":76561199021562940,"Developer":0,"Score":103,"WinAmount":0,"GameAmount":2,"LeaveGames":1,"GameHeroes":{"npc_dota_hero_bristleback":{"GamesCount":1,"Wins":0},"npc_dota_hero_leshrac":{"GamesCount":1,"Wins":0}},"Matches":["5315880291","5315926311"],"DonateItems":"","MatchesSpeedrun":"","speedrun_standart_0":-1,"speedrun_standart_1":-1,"speedrun_standart_2":-1,"speedrun_standart_3":-1,"speedrun_turbo_0":-1,"speedrun_turbo_1":-1,"speedrun_turbo_2":-1,"speedrun_turbo_3":-1 , name: "Dark Rose",
img: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/34/344d9db72bff09ca366c5bdd87dcbe01144305ad_full.jpg"};

const testMatch = {
    const: {
      "Difficuilt": 3,
      "MatchID": "112238",
      "IsInToolsMode": false,
      "IsSpeedRun": false,
      "GameMode": "roshdef_standart",
      "GameDuration": 772.28698730469
    },
    "players": {
      "112233": {
        "Level": 29,
        "IsAbandoned": true,
        "LastHit": 236,
        "XpAll": 118547,
        "GameDurationPlayer": 712.36828613281,
        "IntellectCandy": 20,
        "Gold": 1030036303,
        "StrengthCandy": 20,
        "IsWinner": false,
        "HeroName": "npc_dota_hero_life_stealer",
        "Items": {
          "0": {
            "fCooldown": 0,
            "iCharges": 0,
            "sName": "item_barbarian_armor_2" 
          },
          "1": {
            "fCooldown": 0,
            "iCharges": 0,
            "sName": "item_ultra_boots" 
          },
          "2": {
            "fCooldown": 0,
            "iCharges": 0,
            "sName": "item_bfury_3" 
          },
          "3": {
            "fCooldown": 0,
            "iCharges": 0,
            "sName": "item_barbarian_shield_2" 
          },
          "4": {
            "fCooldown": 0,
            "iCharges": 0,
            "sName": "item_imba_greater_crit" 
          },
          "5": {
            "fCooldown": 0,
            "iCharges": 0,
            "sName": "item_midas_armlet_3" 
          }
        },
        "AgilityCandy": 20
      }
    }
  };

const initialState = Map({})
  .set(SELECT_PAGE, PAGES.HOME)
  .set(SELECT_PAGE, PAGES.PLAYER)
  .set(PLAYERID, 0)
  .set(PLAYER, testPlayer)
  .set(MATCHID, 0)
  .set(DATAMATCH, testMatch)
  .set(PLAYER_TAB, PLAYER_TABS.ITEM);

//console.log('initial state', initialState.toObject())

const rootReducer = (state = initialState, action) => {
  //console.log('root reducer', action);
  switch (action.type) {
    case SHOW_HOME:
      return state.set(SELECT_PAGE, PAGES.HOME);
    case SHOW_SEARCH_PLAYER:
      return state.set(SELECT_PAGE, PAGES.SEARCH_PLAYER);
    case SHOW_SEARCH_MATCH:
      return state.set(SELECT_PAGE, PAGES.SEARCH_MATCH);
    case REQUEST_PLAYER:
      return state.set(SELECT_PAGE, PAGES.PLAYER).set(PLAYERID, 0);
    case REQUEST_MATCH:
      return state.set(SELECT_PAGE, PAGES.MATCH).set(MATCHID, 0);

    case PLAYER_TAB_SELECT:
      return state.set(PLAYER_TAB, action.tabName);
    default:
      return state;
  }
};

export default rootReducer;
