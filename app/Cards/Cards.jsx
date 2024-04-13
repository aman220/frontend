import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Uploadcard from "./Uploadcard";

export default function Cards() {
 
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <div className="bg-white p-6 rounded-lg shadow w-full col-span-1">
          <h2 className="text-xl font-semibold mb-2">
            Congratulations John! 🎉
          </h2>
          <p className="text-gray-600 mb-4">Your Saving of the month</p>
          <div className="text-3xl font-bold text-purple-600">$42.8k</div>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-4 bg-purple-600 text-white">
            View Saving
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow col-span-3">
          <h2 className="text-xl font-semibold mb-2">Statistics Card</h2>
          <p className="text-gray-600 mb-4">
            Total 48.5% Expenses 😊 this month
          </p>
          <div className="mt-20 grid grid-cols-4 gap-4">
            <div className="flex  flex-row gap-2">
              <div className="bg-purple-600 rounded-lg p-5">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  size="50px"
                  className="px-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold">Sales</span>
                <span className="font-sans text-lg">247k</span>
              </div>
            </div>
            <div className="flex  flex-row gap-2">
              <div className="bg-purple-600 rounded-lg p-5">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  size="50px"
                  className="px-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold">Sales</span>
                <span className="font-sans text-lg">247k</span>
              </div>
            </div>
            <div className="flex  flex-row gap-2">
              <div className="bg-purple-600 rounded-lg p-5">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  size="50px"
                  className="px-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold">Sales</span>
                <span className="font-sans text-lg">247k</span>
              </div>
            </div>
            <div className="flex  flex-row gap-2">
              <div className="bg-purple-600 rounded-lg p-5">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  size="50px"
                  className="px-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-base font-bold">Sales</span>
                <span className="font-sans text-lg">247k</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow w-full col-span-2"></div>
         <Uploadcard/>
      </div>
    </div>
  );
}
