import { connect } from 'react-redux';
import { playerTabSelect, requestMatch } from '../actions/index';
import { PLAYER, PLAYER_TAB } from '../constants/index';
import Player from '../components/player';

const mapStateToProps = (state, ownProps) =>{
    return {
        player: state.get(PLAYER),
        lngPlayer:{
            tab: {
                Matches: 'Матчи',
                Heroes: 'Герои',
                Items: 'Вещи',
            }
        },
        tab: state.get( PLAYER_TAB ),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTabSelect: (tab) => dispatch(playerTabSelect(tab)),
        onSelectMatch: (idMatch) => dispatch(requestMatch(idMatch)),
    }
}

const ConnectPlayer = connect(mapStateToProps, mapDispatchToProps)(Player);
export default ConnectPlayer;
