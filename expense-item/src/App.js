import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toiler Paper", 
      amount: 94.12, 
      date: new Date(2022, 6, 20)
    },
    {
      id: "e2",
      title: "Microwave", 
      amount: 145.67, 
      date: new Date(2022, 6, 20)
    },
    {
      id: "e3",
      title: "Groceries", 
      amount: 341.26, 
      date: new Date(2022, 6, 20)
    },
    {
      id: "e4",
      title: "Water", 
      amount: 34.15, 
      date: new Date(2022, 6, 20)
    },
  ]

  return (
    <div>
      <h2>Let's get Started</h2>
      <ExpenseItem 
        title = {expenses[0].title} 
        amount = {expenses[0].amount} 
        date = {expenses[0].date}
      />  
      <ExpenseItem
        title = {expenses[1].title} 
        amount = {expenses[1].amount} 
        date = {expenses[1].date}
      />
      <ExpenseItem
        title = {expenses[2].title} 
        amount = {expenses[2].amount} 
        date = {expenses[2].date}
      />
      <ExpenseItem
        title = {expenses[0].title} 
        amount = {expenses[0].amount} 
        date = {expenses[0].date}
      /> 
      <ExpenseItem
        title = {expenses[3].title} 
        amount = {expenses[3].amount} 
        date = {expenses[3].date}
      />
    </div>
  );
}

export default App;
