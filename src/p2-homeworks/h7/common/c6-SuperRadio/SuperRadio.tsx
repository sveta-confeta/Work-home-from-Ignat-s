import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void

}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i} className={s.radio}>
            <input
                className={s.radio_real}
                type={'radio'}
                value={o}
                name={name}
                onChange={onChangeCallback}
                checked={o===value}
                // name, checked, value, onChange

            />
            <span className={s.radio_fake}></span>
            {o}
        </label>
    )) : [] //если нам по каким то причинам не приходит массив который оптионс, то чтоб не сломался проект мы подменяем его пустым массивом

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
