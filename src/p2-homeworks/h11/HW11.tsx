import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeDoubleRange = (value: [number, number]) => {

        setValue1(value[0])
        setValue2(value[1])
    }

    const valueScreenStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        border: '2px solid #000',
        borderRadius: '50%',
        fontWeight: '600',
        backgroundColor: '#222',
        color: '#D3D3D3'
    }

    const rangeBlockStyle = {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '15px',
        margin: '30px'
    }

    return (
        <div>
            <hr/>
            <section className="hw_section">
                <div>Homework 11</div>

                <div style={rangeBlockStyle}>
                    {/*блок со значением:*/}
                    <div style={valueScreenStyle}> {value1} </div>
                    <SuperRange
                        min={0}
                        max={150}
                        value={value1}
                       setValue1={setValue1}
                    />
                </div>

                <div style={rangeBlockStyle}>
                    <div style={valueScreenStyle}> {value1} </div>
                    <SuperDoubleRange min={0} max={150}
                                      value={[value1, value2]}
                                      onChangeRange={onChangeDoubleRange}
                                     />
                    <div style={valueScreenStyle}> {value2} </div>
                </div>
            </section>
        </div>
    )
}

export default HW11