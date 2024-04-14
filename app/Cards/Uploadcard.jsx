"use client";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const Uploadcard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full col-span-2">
      <h2 className="text-2xl font-bold mb-4">Add Expense Record</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <Flatpickr
              id="date"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date[0])}
            />
          </div>
          <div className="w-1/2 pl-2">
            <label
              htmlFor="expense_type"
              className="block text-sm font-medium text-gray-700"
            >
              Expense/Salary
            </label>
            <select
              id="expense_type"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={expenseType}
              onChange={(e) => setExpenseType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="expense">Expense</option>
              <option value="salary">Salary</option>
            </select>
          </div>
        </div>
        <div className="flex mb-4 ">
          <div className="w-1/2 mr-3">
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700"
            >
              Tag
            </label>
            <input
              id="note"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></input>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-green-600 font-semibold"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-700 transition"
          >
            Add Record
          </button>
        </div>
      </form>

      <div className="border-gray-500 shadow-lg p-4 mt-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-snas font-semibold text-lg">
              Remaing Amount
            </span>
            <span className="font-mono font-bold text-xl text-green-600">
              + ₹ 2,00,000
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-snas font-semibold text-lg">
              Total Expenses
            </span>
            <span className="font-mono font-bold text-xl text-red-600">
              - ₹50,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploadcard;
