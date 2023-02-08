// Write your code here

import './index.css'
import DenominationItem from '../DenominationItem'

const CashWithdrawal = props => {
  const {id, value} = props
  return (
    <div className="container">
      <DenominationItem id={id} value={value} />
    </div>
  )
}

export default CashWithdrawal
