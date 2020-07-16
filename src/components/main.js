import React from 'react';
import Home from './home';
import Search from './search';
import Player from '../containers/player';
//import Match from './match';
import { PAGES } from '../constants/index';
import Match from './match';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {searchValue: ''}
    }
    handleSubmit = (ev) => {
        const { selectPage, onRequestPlayer, onRequestMatch } = this.props;
        switch(selectPage){
            case PAGES.SEARCH_PLAYER:
                onRequestPlayer(this.state.searchValue);
                break;
            case PAGES.SEARCH_MATCH:
                onRequestMatch(this.state.searchValue);
                break;
        } 
    }
    handleChange = (ev) => {
        const val = ev.target.value;
        this.setState({searchValue: val});
    }
    render() {
        const { lngMain, selectPage } = this.props;
        switch(selectPage){
            case PAGES.HOME:
                return (<Home greetings={lngMain.greetings}/>);
            case PAGES.SEARCH_PLAYER:
                return (
                    <Search 
                      key='player'
                      placeHolder='URL / steamID64 / steamID32' 
                      btnLabel={lngMain.btnSearch} 
                      onSubmit={this.handleSubmit}
                      onChange={this.handleChange}
                    />
                );
            case PAGES.SEARCH_MATCH:
                return (
                    <Search 
                      key='match'
                      placeHolder='match ID' 
                      btnLabel={lngMain.btnSearch} 
                      onSubmit={this.handleSubmit}
                      onChange={this.handleChange}
                    />
                );
            case PAGES.PLAYER:
                return(
                   <Player />
                )
            case PAGES.MATCH:
                return(
                    <Match />
                )
            default:
                return (<Home greetings={lngMain.greetings}/>);
        }
    }
}
export default Main;
