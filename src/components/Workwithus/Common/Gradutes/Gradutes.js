import React from "react";
import { Link } from "react-router-dom";

function Gradutes() {
  return (
    <div className=" py-5  lg:overflow-hidden   2xl:px-[160px] sm:px-[50px] px-[10px] sm:rounded-lg">
      <h1 className="text-center">
        Current career opportunities at Cresol Infoserv
      </h1>
      <p className="py-5 text-center text-white/75 ">
        Positive pleasure-oriented goals are much more powerful motivators than
        negative fear-based ones.
      </p>
      <div className="flex overflow-x-auto lg:items-center lg:justify-center">
        <table className="text-white  lg:w-[90%]   text-start">
          <thead className="text-sm bg-blue-800">
            <tr>
              <th scope="col" className="px-2 py-10">
                S.No
              </th>
              <th scope="col" className="px-2 text-start ">
                Designation
              </th>
              <th scope="col" className="px-2 text-start">
                Number of Positions
              </th>
              <th scope="col" className="px-2 text-start">
                Position Type
              </th>
              <th scope="col" className="px-2 text-start">
                Experience
              </th>
              <th scope="col" className="px-2 text-start">
                WFH/WFO
              </th>
              <th scope="col" className="px-2 text-start">
                Location
              </th>
              <th scope="col" className="px-2 text-start">
                View
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="text-black/85">
              <th
                scope="row"
                className="px-2 font-medium text-gray-900 text-start whitespace-nowrap "
              >
                1
              </th>
              <td className="p-2 text-start">Trainee</td>
              <td className="p-2 text-start">5 </td>
              <td className="p-2 text-start">Software Engineer </td>
              <td className="p-2 text-start">0+ year</td>
              <td className="p-2 text-start">WFO</td>
              <td className="p-2 text-start">Hyderabad</td>
              <td className="p-2 text-start">
                <Link
                  to="/JobDescription"
                  className="font-medium text-red-600 dark:text-red-500"
                >
                  View Job
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Gradutes;
