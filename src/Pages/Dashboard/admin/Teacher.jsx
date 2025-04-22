import React from "react";

const Teacher = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-semibold text-center my-12">
          All Of Teacher
        </h1>
      </div>

      <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table class="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Job
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Employed
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  John Michael
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Manager
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23/04/18
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <a
                  href="#"
                  class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Alexa Liras
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Developer
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  23/04/18
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <a
                  href="#"
                  class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Laurent Perrier
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Executive
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  19/09/17
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <a
                  href="#"
                  class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Michael Levi
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Developer
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  24/12/08
                </p>
              </td>
              <td class="p-4 border-b border-blue-gray-50">
                <a
                  href="#"
                  class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <td class="p-4">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Richard Gran
                </p>
              </td>
              <td class="p-4">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Manager
                </p>
              </td>
              <td class="p-4">
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  04/10/21
                </p>
              </td>
              <td class="p-4">
                <a
                  href="#"
                  class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-8">
        <div class="flex space-x-1">
          <button class="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            Prev
          </button>
          <button class="min-w-9 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-gray-300 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            1
          </button>
          <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            2
          </button>
          <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            3
          </button>
          <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
