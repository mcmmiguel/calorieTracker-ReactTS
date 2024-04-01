import { useState } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types";

export const Form = () => {

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {

        const isNumberField = ['category', 'calories'].includes(e.target.id);

        console.log(activity.category);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();



    }

    const isValidActivity = () => {
        const { calories, name } = activity;

        return name.trim() !== '' && calories > 0;
    }

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input
                    id="name"
                    type="text"
                    value={activity.name}
                    onChange={handleChange}
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. Comida, Snack, Bebida, Ejercicio, Pesas, etc."
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    value={activity.calories}
                    onChange={handleChange}
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. 300 o 500"
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                value={`${activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'} `}
                disabled={!isValidActivity()}
                onSubmit={() => handleSubmit}
            />

        </form>
    )
}