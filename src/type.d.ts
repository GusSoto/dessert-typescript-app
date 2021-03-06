import IDessert from './interfaces/IDessert';

type DessertContextType = {
    desserts: IDessert[]
    addDessert: (dessert: IDessert) => void
    deleteDessert: () => void
    selectDessert: (idDessert: string) => void
    setDesserts: (idDessert: any) => void
    selectAll: () => void
    resetData: ()=> void

}

type Props = {
    dessert: IDessert
}