import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {DESSERTS_QUERY} from '../../Apollo/Desserts/Queries';
import {ADD_DESSERT_MUTATION} from '../../Apollo/Desserts/Mutations';

import {IDessert} from '../../interfaces/IDessert';
import { DessertContextType } from '../../type';

const contextDefaultValues: DessertContextType = {
    desserts: [],
    addDessert: () => {},
    deleteDessert: () => {},
    selectDessert: () => {},
    setDesserts: () => {},
    selectAll: ()=>{},
    resetData: ()=>{}
}

export const DessertContext = React.createContext<DessertContextType>(contextDefaultValues);



const DessertProvider: React.FC = ({children}) => {
    const [desserts, setDesserts] = React.useState<IDessert[]>([]);
    const [selectedAll, setSelectedall] = React.useState<boolean>(false);
    const [addDessertMutation] = useMutation(ADD_DESSERT_MUTATION);
    const GetDesserts = async ()=>{
        const defaultDesserts = [
            {
                id:'1',
                name: 'Oreo',
                nutritionInfo: {
                    calories: 437,
                    fat: 18, 
                    carbs: 63,   
                    protein: 4
                },
                selected: false
            },{
                id:'2',
                name: 'Nougar',
                nutritionInfo: {
                    calories: 360,
                    fat: 19, 
                    carbs: 50,   
                    protein: 37
                },
                selected: false
            },
            {
                id:'3',
                name: 'desser3',
                nutritionInfo: {
                    calories: 150,
                    fat:20,
                    carbs: 300,
                    protein: 100
                },
                selected: false
            }];

            //const { loading, error, data } = useQuery(DESSERTS_QUERY);
            
            //if (loading) return setDesserts(defaultDesserts);
            //if (error) return setDesserts(defaultDesserts);
            
            //Setting dessert using Apollo
            //setDesserts(data.desserts);
            setDesserts(defaultDesserts);
    }


    React.useEffect(()=> {  

        GetDesserts();
    },[]);

    const addDessert = (newDessert: IDessert) => {
        console.info('click add dessert', newDessert);
        
        // using apollo mutations tu update the data
        /*addDessertMutation({variables: {
            id: Math.random().toString(), //use and a uuid generator
            name: newDessert.name,
            calories: newDessert.calories,
            fat:newDessert.fat,
            carbs: newDessert.carbs,
            protein: newDessert.protein,
            selected: false
        }});*/
        setDesserts([...desserts, newDessert]);
    }

    const deleteDessert = ()=>{
        const newDesserts = desserts.filter( d => d.selected === false);
        console.info('deleteDessert Click', newDesserts);
        setDesserts(newDesserts);
    }

    const selectDessert = (idDessert: string) => {
        desserts.filter((dessert: IDessert) => {
            if(dessert.id === idDessert){
                dessert.selected = !dessert.selected;
                setDesserts([...desserts]);
            }
        });
    }

    const selectAll = () => {
        setSelectedall(!selectedAll);
        const newDesserts = desserts.map((d) => {
            d.selected = selectedAll;
            return d;
        });
        setDesserts(newDesserts);
    }
    const resetData = () => {
        GetDesserts();
    }

    return (
        <DessertContext.Provider value={{desserts, setDesserts, addDessert, deleteDessert, selectDessert,selectAll,resetData}}>
            {children}
        </DessertContext.Provider>
    );

};

export default DessertProvider;