import {useState} from 'react'
import './index.css'

const DenominationItem = () => {
  const [count = 2000, setCount] = useState(2000)

  const onDecrement1 = () => {
    setCount(count - 50)
  }

  const onDecrement2 = () => {
    setCount(count - 100)
  }

  const onDecrement3 = () => {
    setCount(count - 200)
  }

  const onDecrement4 = () => {
    setCount(count - 500)
  }
  return (
    <div className="bg-container">
      <h1 className="heading">Sarah Williams</h1>
      <div className="moneycard">
        <p className="para">Your Balance</p>
        <div className="remBalance">
          <p className="count">{count}</p>
          <p>In Rupees</p>
        </div>
      </div>
      <p className="heading1">Withdraw</p>
      <p className="heading2">CHOOSE SUM (IN RUPEES)</p>
      <ul className="buttons">
        <li>
          <button className="btn" type="button" onClick={onDecrement1}>
            50
          </button>
        </li>
        <li>
          <button className="btn" type="button" onClick={onDecrement2}>
            100
          </button>
        </li>
        <li>
          <button className="btn" type="button" onClick={onDecrement3}>
            200
          </button>
        </li>
        <li>
          <button className="btn" type="button" onClick={onDecrement4}>
            500
          </button>
        </li>
      </ul>
    </div>
  )
}

export default DenominationItem
