import * as React from 'react';
import { Link } from 'react-router-dom';
import {DessertContext} from '../../contexts/Dessert/DessertContext';
import { DessertContextType, Props } from '../../type';
import Dessert from './Dessert';
import { IDessert } from '../../interfaces/IDessert';

const DessertList: React.FC = () => {

    const {desserts, deleteDessert,selectAll, resetData} = React.useContext(DessertContext) as DessertContextType;
    console.log('desserts',desserts);
    return(
        <div className="mw5 mw7-ns center bg-light-gray pa3 ph3-ns">
            <div className="header dif">
                <div className="fl w-80">
                    <span className="b f3">Nutrition List</span>
                </div>
                <div className="fl w-20 tr">
                    <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" onClick={e => resetData()}>Reset Data</button>
                </div>
            </div>
            <div className="dif">
                <div className="fl w-70 bg-light-pink">
                    <h3 className="hot-pink b">selected</h3>
                </div>
                <div className="fl w-30 tr bg-light-pink pt3">
                <Link to={'/AddDessert'} className="">
                    <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib dark-green">Add New</button>
                </Link>
                    
                    <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib hot-pink" onClick={e => deleteDessert()}>Delete</button>
                </div>
            </div>
            <div className="tableHeader dt dt--fixed w-100 tc bg-white pt2 pb2 b bb ">
                <div className="dtc">
                    <input type="checkbox" onClick={e => selectAll()}/>
                </div>
                <div className="dtc">
                    <span>Dessert 100g serving</span>
                </div>
                <div className="dtc">
                    <span>Calories</span>
                </div>
                <div className="dtc">
                    <span>Fat</span>
                </div>
                <div className="dtc">
                    <span>Carbs</span>
                </div>
                <div className="dtc">
                    <span>Protein</span>
                </div>
            </div>
            {desserts.map((d: IDessert) => (
                <Dessert key={d.id} dessert={d}/>
            ))}
        </div>
    );
    
}

export default DessertList;