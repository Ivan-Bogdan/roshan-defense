import { connect } from 'react-redux';
import { requestMatch } from '../actions/index';
import { MATCHID} from '../constants/index';
import Match from '../components/match';

const mapStateToProps = (state, ownProps) =>{
    return {
        player: state.get(MATCHID),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSelectMatch: (idMatch) => dispatch(requestMatch(idMatch)),
    }
}

const ConnectMatch = connect(mapStateToProps, mapDispatchToProps)(Match);
export default ConnectMatch;