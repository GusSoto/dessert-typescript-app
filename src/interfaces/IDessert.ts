
export interface IDessert{
    id:string,
    name: string,
    nutritionInfo: {
        calories: number,
        fat:number,
        carbs: number,
        protein: number
    },
    selected: boolean
    
    
}