import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Socialize from "../images/socialize.jpg";
import Travel from "../images/travel.jpg";
import Download from "../images/downloads.jpg";
import Upload from "../images/uploads.jpg";
import Security from "../images/security.jpg";

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out Instashare!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={Socialize}
                            text='Socialize your data with you friends'
                            label='Sharing'
                            path='/services'
                        />
                        <CardItem
                            src={Travel}
                            text='Travel though network with one click'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={Download}
                            text='Download the experiences of many people in'
                            label='Downloads'
                            path='/services'
                        />
                        <CardItem
                            src={Upload}
                            text='Set the sails of you network and your files by uploading them'
                            label='Uploads'
                            path='/services'
                        />
                        <CardItem
                            src={Security}
                            text='Feel free and safe of viruses with zip downloads'
                            label='Security'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
