import {put, takeEvery, all } from 'redux-saga/effects';
import {REQUEST_PLAYER, REQUEST_MATCH} from '../constants/index';

export function * helloSaga(){
    console.log('Hello saga');
    yield 'yield';
    return 'end'
    
}

const URL = 'http://new.roshan-defense.com:25023/player/';

function * fetchPlayer(action){
    console.log('fetchuser', action)
    const json = yield fetch(URL + action.steamId)
        .then(response => response.json());
    console.log('json ', json);
    yield put({type: 'RESEIVED_PLAYER', json});
}

function * fetchMatch(action){
    console.log('fetchuser', action)
    const json = yield fetch(URL + action.steamId)
        .then(response => response.json());
    console.log('json ', json);
    yield put({type: 'RESEIVED_PLAYER', json});
}

function * player(){
    yield takeEvery(REQUEST_PLAYER, fetchPlayer);
}

function * match(){
    yield takeEvery(REQUEST_MATCH, fetchMatch);
}

export default function * rootSaga(){
    console.log('init root saga');
    yield all([
        helloSaga(),
        player(),
        match(),
    ])
}

