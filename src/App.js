import { useState } from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';
import './App.css';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import Transactions from './Components/Transactions';
import NewTransaction from './Components/NewTransaction';

const useStyle = makeStyles({
  component: {
    background: '#FFF',
    padding: 10,
    borderRadius: 20,
    width: 500,
    '& > *': {
      padding: 10
    }
  }
})

function App() {
  const classes = useStyle();

  const [transactions, setTransactions] = useState([
    
  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }


  return (
    <div className="App">
      <Typography style={{marginBottom:20, color: 'white'}}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Balance transactions={transactions} />
        <ExpenseCard transactions={transactions} />
        <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        <NewTransaction addTransaction={addTransaction}/>
      </Box>
    </div>
  );
}

export default App;
