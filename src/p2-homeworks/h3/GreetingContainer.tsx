import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback:(name:string)=>void
}


// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>(' ') // need to fix any

    const setNameCallback = (event:ChangeEvent<HTMLInputElement>) => {
        setError(' ');
        setName(event.currentTarget.value) ;

    }
    const addUser = () => {
        const trimmedTitle =name.trim();
        if(trimmedTitle){
            addUserCallback(trimmedTitle);
            alert(`Hello ${name}  !`)
            setName( ' ');
        } else {
            setError('Title is required');
        }
    }
    // const keyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === 'Enter') {   //функция которая добавляет таску по клику на ентер
    //         const trimmedTitle = props.newTaskTitle.trim();
    //         if (trimmedTitle) {
    //             props.addTask(trimmedTitle,props.todolistID);
    //             props.setNewTaskTitle(' ')
    //         }else{
    //             props.setError(true);
    //         }
    //     }
    // }

    let totalUsers = 0;
    for(let i=0;i<users.length;i++){
        totalUsers++;
    }


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
