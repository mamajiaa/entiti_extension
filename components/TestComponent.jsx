import React from "react"

const TestComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <h1 className="text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
        TailwindCSS 生效了！
      </h1>
      <p className="text-2xl text-gray-200 bg-white bg-opacity-25 p-4 rounded-lg shadow-lg">
        这是一个使用 TailwindCSS 的示例组件。
      </p>
      <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
        点击我
      </button>
    </div>
  )
}

export default TestComponent