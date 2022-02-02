import React, {useState} from 'react'
import {Affairs} from './Affairs'

// types
export type AffairPriorityType = 'low'|'middle'|'high'

export type AffairType = {
    _id:number
    name:string
    priority:AffairPriorityType //переиспользуем тип
}
export type FilterType = 'all' | AffairPriorityType //добавлять "all"нужно отдельно


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// функция фильтрации
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    else if (filter === 'low') return affairs.filter(a => a.priority === 'low')
    else if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    else if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    else return []

}
export const deleteAffair = (affairs: Array<AffairType>, _id:number):  Array<AffairType>=> {
    return affairs.filter(a=> a._id !==_id) //функция удаления
}

function HW2() {
    const [affairs, setAffairs] = useState<Array <AffairType>> (defaultAffairs) // need to fix any
    const [filter, setFilter] = useState <FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <h1>homeworks 2</h1>

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />


            <hr/>
        </div>
    )
}

export default HW2
