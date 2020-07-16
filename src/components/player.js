import React /* {useState} */ from 'react';

//import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';

import PlayerHead from './playerhead';
import PlayerMatch from './playermatch';
import PlayerHero from './playerhero';
import PlayerItem from './playeritem';

import {PLAYER_TABS } from '../constants/index';


const Player = ({onTabSelect, tab, lngPlayer, player}) => {
    return (
        <Container style={{
            position: 'absolute', 
                top: 20, 
                left: 20, 
                right: 20, 
                bottom: 20, 
                backgroundImage: 'url("img/bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: "center top",
                borderRadius: 10

        }}>
        {
//    <Card style={{width: '100%', height: '100%'}}>
//      <Card.Header> 
           }
        <PlayerHead name={console.log(player)} img={player['img']}/>
        {

//      </Card.Header>
//      <Card.Body>

        }
        <Tabs onSelect={(k) => onTabSelect(k)}>
        
            <Tab eventKey={PLAYER_TABS.MATCH} title={lngPlayer.tab.Matches}>
                <PlayerMatch />
            </Tab>
            <Tab eventKey={PLAYER_TABS.HERO} title={lngPlayer.tab.Player}>
                <PlayerHero />
            </Tab>
            <Tab eventKey={PLAYER_TABS.ITEM} title={lngPlayer.tab.Items}>
                <PlayerItem />
            </Tab>
        </Tabs>
        {
//      </Card.Body>
//    </Card>
        }
        </Container>

)
}

export default Player;

