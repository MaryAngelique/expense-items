import React from "react";

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="number" min="0.01" step="0.01"/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-06-21" step="2024-12-31"/>
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;