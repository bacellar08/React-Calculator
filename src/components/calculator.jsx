import { useState } from 'react'
import './calculator.css'

function Calculator() {

    const [num, setNum] = useState('0')


    function clearDisplay() {
        setNum('0')
    }

    function insertNum(e) {
        e.preventDefault()
        if(num == 0) {
            setNum(e.target.value)
        } else {
            setNum(num + e.target.value)
        }
    }

    function calculate(e) {
        e.preventDefault()
        // eslint-disable-next-line no-eval
        setNum(eval(num));

    }

    function invertValue() {
        setNum(num*-1)
    }

    function percentage() {
        setNum(num / 100)
    }


    return (
        <>  
            <div className='wrapper'>
                <h1>Calculator</h1>

                    <div className='calc-container'>

                    <p className='result'>{num}</p>
                <table>
                    <tbody>

                        <tr>
                            <td><button className='btn-gray' onClick={clearDisplay}>AC</button></td>
                            <td><button className='btn-gray' onClick={invertValue}>+/-</button></td>
                            <td><button className='btn-gray' onClick={percentage}>%</button></td>
                            <td><button className='btn-yellow' onClick={insertNum} value={'/'}>/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={insertNum} value={7}>7</button></td>
                            <td><button onClick={insertNum} value={8}>8</button></td>
                            <td><button onClick={insertNum} value={9}>9</button></td>
                            <td><button className='btn-yellow' onClick={insertNum} value={'*'}>X</button></td>                        
                        </tr>
                        <tr>
                            <td><button onClick={insertNum} value={4}>4</button></td>
                            <td><button onClick={insertNum} value={5}>5</button></td>
                            <td><button onClick={insertNum} value={6}>6</button></td>
                            <td><button className='btn-yellow' onClick={insertNum} value={'-'}>-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={insertNum} value={1}>1</button></td>
                            <td><button onClick={insertNum} value={2}>2</button></td>
                            <td><button onClick={insertNum} value={3}>3</button></td>
                            <td><button className='btn-yellow' onClick={insertNum} value={'+'}>+</button></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button className='btn-zero' onClick={insertNum} value={0}>0</button></td>
                            <td><button onClick={insertNum} value={'.'}>.</button></td>
                            <td><button className='btn-yellow' onClick={calculate}>=</button></td>
                        </tr>
                    </tbody>
                </table>
                <p><i> &copy; Alexandre Bacellar</i></p>
                </div>
            </div>

        </>        
    )
}

export default Calculator