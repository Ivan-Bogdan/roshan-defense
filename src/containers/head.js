import { connect } from 'react-redux';
import { showHome, showSearchPlayer, showSearchMatch } from '../actions/index';
import Head from '../components/head';

const mapStateToProps = (state, ownProps) =>{
    return {
        lngHead: {
            Players: "Игроки",
            Matches: "Матчи",
            Leaders: "Лидеры",
            Login: "Вход",
        },
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onShowHome: () => dispatch(showHome()), 
        onShowSearchPlayer: () => dispatch(showSearchPlayer()) ,
        onShowSearchMatch: () => dispatch(showSearchMatch()),
    }
}

const ConnectHead = connect(mapStateToProps, mapDispatchToProps)(Head) 
export default ConnectHead;
