import "twin.macro";

function App() {
  return (
    <div tw="flex bg-gray-300 h-screen items-center justify-center">
      <div tw="max-w-xs">
        <label>
          Example
          <input
            type="text"
            tw="focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" />
        </label>
      </div>
    </div>
  );
}

export default App;
