
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!!!!!!!!!!!!!
      </h1>
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      </div>
    </>
  )
}

export default App
