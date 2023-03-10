import './calculator.css'

function Calculator() {
    return (
        <>  
            <div className='wrapper'>
                <h1>Calculator</h1>

                    <div className='calc-container'>

                    <p className='result'>0</p>
                <table>
                    <tbody>

                        <tr>
                            <td><button className='btn-gray'>AC</button></td>
                            <td><button className='btn-gray'>+/-</button></td>
                            <td><button className='btn-gray'>%</button></td>
                            <td><button className='btn-yellow'>/</button></td>
                        </tr>
                        <tr>
                            <td><button>7</button></td>
                            <td><button>8</button></td>
                            <td><button>9</button></td>
                            <td><button className='btn-yellow'>X</button></td>                        
                        </tr>
                        <tr>
                            <td><button>4</button></td>
                            <td><button>5</button></td>
                            <td><button>6</button></td>
                            <td><button className='btn-yellow'>-</button></td>
                        </tr>
                        <tr>
                            <td><button>1</button></td>
                            <td><button>2</button></td>
                            <td><button>3</button></td>
                            <td><button className='btn-yellow'>+</button></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button className='btn-zero'>0</button></td>
                            <td><button>.</button></td>
                            <td><button className='btn-yellow'>=</button></td>
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