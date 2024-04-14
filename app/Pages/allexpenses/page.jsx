"use client";
import React, { useState } from "react";
import CardLineChart from "@/app/Cards/CardLineChart";
import Link from "next/link";

const SavingsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const totalSavings = "$10,000";
  const monthlySavingsData = [];

  const handleMonthFilterChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="bg-gray-100 p-5">
      <div className="flex gap-5">
        <div className="bg-white p-6 rounded-lg shadow w-full col-span-2">
          <CardLineChart data={monthlySavingsData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow w-full col-span-2">
          <CardLineChart data={monthlySavingsData} />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow w-full mt-5">
        <div className="bg-purple-600 text-white rounded-lg w-full p-3">
          <h1 className="text-center text-xl font-bold">Your Savings</h1>
        </div>
        <div className="p-4">
          <div className="flex justify-end">
            <select
              className="bg-white border border-gray-300 rounded px-3 py-1 outline-none"
              value={selectedMonth}
              onChange={handleMonthFilterChange}
            >
              <option value="All">All Months</option>
              <option value="January">January</option>
              <option value="February">February</option>
            </select>
          </div>
        </div>
        <div>
          <h1 className="font-sans font-bold text-xl my-3">
            Your {selectedMonth} expenses...
          </h1>
          <ul>
            <li className="flex justify-between items-center border-b-2 border-gray-200 py-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-lg">
                  Expense
                </span>
                <span className="text-slate-500">13 April</span>
              </div>
              <div>
                <span className="text-white bg-slate-400 p-1 rounded-xl mr-4 text-sm">
                  Unknown
                </span>
                <span className="text-red-600 text-lg font-semibold font-mono">
                  - ₹23,342
                </span>
              </div>
            </li>
            <li className="flex justify-between items-center border-b-2 border-gray-200 py-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-lg">
                  Expenses
                </span>
                <span className="text-slate-500">13 April</span>
              </div>
              <div>
                <span className="text-white bg-slate-400 p-1 rounded-xl mr-4 text-sm">
                  Salery
                </span>
                <span className="text-red-600 text-lg font-semibold font-mono">
                  + ₹23,342
                </span>
              </div>
            </li>
            <li className="flex justify-between items-center border-b-2 border-gray-200 py-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-lg">
                  Expenses
                </span>
                <span className="text-slate-500">13 April</span>
              </div>
              <div>
                <span className="text-white bg-slate-400 p-1 rounded-xl mr-4 text-sm">
                  House Rent
                </span>
                <span className="text-red-600 text-lg font-semibold font-mono">
                  - ₹23,342
                </span>
              </div>
            </li>
            <li className="flex justify-between items-center border-b-2 border-gray-200 py-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-lg">
                  Expenses
                </span>
                <span className="text-slate-500">13 April</span>
              </div>
              <div>
                <span className="text-white bg-slate-400 p-1 rounded-xl mr-4 text-sm">
                  House Rent
                </span>
                <span className="text-red-600 text-lg font-semibold font-mono">
                  - ₹23,342
                </span>
              </div>
            </li>
            <li className="flex justify-between items-center border-b-2 border-gray-200 py-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white font-bold px-3 py-1 rounded-lg">
                  Expenses
                </span>
                <span className="text-slate-500">13 April</span>
              </div>
              <div>
                <span className="text-white bg-slate-400 p-1 rounded-xl mr-4 text-sm">
                  House Rent
                </span>
                <span className="text-red-600 text-lg font-semibold font-mono">
                  - ₹23,342
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow w-full mt-5">
        <div className="flex flex-row justify-between items-center">
          <h2 className="font-sans font-semibold">
            Opps Dear Aman in this month{" "}
            <span className="font-mono font-bold text-xl text-green-700">
              {selectedMonth}
            </span>{" "}
            you did not meet your Saving Goals...
          </h2>
          <Link href={'/Pages/Generate'} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-purple-600 text-white">
             AI Suggestion
          </Link>
        </div>

        <div className="border-gray-500 shadow-lg p-4 mt-10">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-snas font-semibold text-lg">
                Your Expected Expenses
              </span>
              <span className="font-mono font-bold text-xl text-green-600">
                ₹ 20,000
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-snas font-semibold text-lg">
                Your Total Expenses
              </span>
              <span className="font-mono font-bold text-xl text-red-600">
                - ₹50,000
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-snas font-semibold text-lg">
                Your Saving
              </span>
              <span className="font-mono font-bold text-xl text-green-600">
                + ₹10,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsPage;
