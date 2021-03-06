import * as React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import {DessertContext} from '../../contexts/Dessert/DessertContext';
import { DessertContextType } from '../../type';
import { IDessert } from '../../interfaces/IDessert';



const AddDessert: React.FC = () => {
    const {addDessert} = React.useContext(DessertContext) as DessertContextType;
    const [dessertForm, setDessertForm] = React.useState<IDessert | {}>();
    const [redirect, setRedirect] = React.useState<boolean>(false);

    const handleFormChanges = (e: React.FormEvent<HTMLInputElement>): void => {
        setDessertForm({
            ...dessertForm,
            [e.currentTarget.id]: e.currentTarget.value
        });

    }
    const handleAddDessert = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(dessertForm);
        addDessert(dessertForm)
        //setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <main className="pa4 black-80">
        <form className="measure center" onSubmit={(e) => handleAddDessert(e)}>
            <div className="mt3">
                <label htmlFor="name" className="db fw6 lh-copy f6">Dessert Name*</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" onChange={handleFormChanges} type="text" id="name" />
            </div>
            <div>
                <label htmlFor="calories" className="db fw6 lh-copy f6">Calories*</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" onChange={handleFormChanges} type="number" id="calories" />
            </div>
            <div>
                <label htmlFor="fat" className="db fw6 lh-copy f6">Fat*</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" onChange={handleFormChanges} type="number" id="fat" />
            </div>
            <div>
                <label htmlFor="carbs" className="db fw6 lh-copy f6">Carbs*</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" onChange={handleFormChanges} type="number" id="carbs" />
            </div>
            <div>
                <label htmlFor="protein" className="db fw6 lh-copy f6">Protein*</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" onChange={handleFormChanges} type="number" id="protein" />
            </div>
            <div>
                <button type="submit" className="mt3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib black" disabled={dessertForm === undefined ? true: false}>Submit</button>
            </div>
        </form>

        <Link to={'/'}><legend className=" pa4 black-80 f4 fw6 ph0 mh0 center">Back to List of Desserts</legend></Link>

        </main>
    );
}

export default AddDessert;