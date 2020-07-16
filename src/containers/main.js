import { connect } from 'react-redux';
import { requestPlayer, requestMatch } from '../actions/index';
import { SELECT_PAGE, PLAYERID, MATCHID } from '../constants/index';
import Main from '../components/main';

const mapStateToProps = (state, ownProps) =>{
    return {
        lngMain:{
            greetings: ["Приветствуем вас на официальном сайте Roshan Defense.","Здесь вы сможете найти детальную статистику по играм и многое другое"],
            btnSearch: 'Поиск'
            },
        selectPage: state.get( SELECT_PAGE ),
        playerId: state.get( PLAYERID ),
        matchId: state.get( MATCHID ),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRequestPlayer: (steamId) => dispatch(requestPlayer(steamId)),
        onRequestMatch: (matchId) => dispatch(requestMatch(matchId)),
    }
}

const ConnectMain = connect(mapStateToProps, mapDispatchToProps)(Main);
export default ConnectMain;
