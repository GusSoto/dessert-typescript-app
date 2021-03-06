import * as React from 'react';
import {DessertContext} from '../../contexts/Dessert/DessertContext';
import { DessertContextType, Props } from '../../type';

const Dessert: React.FC<Props> = ({dessert}) => {

    const {selectDessert} = React.useContext(DessertContext) as DessertContextType;

    return(
        <div className="dt dt--fixed w-100 tc pt2 pb2 bb">
            <div>
                <input type="checkbox" onClick={e => selectDessert(dessert.id)} value={dessert.selected} />
            </div>
            <div className="dtc">
                <span>{dessert.name}</span>
            </div>
            <div className="dtc">
                <span>{dessert.nutritionInfo.calories}</span>
            </div>
            <div className="dtc">
                <span>{dessert.nutritionInfo.fat}</span>
            </div>
            <div className="dtc">
                <span>{dessert.nutritionInfo.carbs}</span>
            </div>
            <div className="dtc">
                <span>{dessert.nutritionInfo.protein}</span>
            </div>
        </div>
    );
    
}

export default Dessert;