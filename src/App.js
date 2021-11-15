import './App.css';

function App() {
  return (
    <>
      <h1>Food Journal</h1>
      <p>Hello, this is the home page</p>
      <div>
        <form action="">
          <label htmlFor="meal">What did you eat? 
            <textarea ></textarea>
          </label>
        </form>

        <label htmlFor="">
            Diet ?  
            <select >
              <option value="Standard">Standard</option>
              <option value="Vegan">Vegan</option>
              <option value="Paleo">Paleo</option>
              <option value="Mediteranean">Mediteranean</option>
              <option value="Pescetarian">Pescetarian</option>
              <option value="Keto">Keto</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>    
        </label>

          <label htmlFor="">
            Dairy ? 
            <input type="radio" value="No" name="option"/> No
            <input type="radio" value="Yes" name="option"/> Yes
          </label>

          <label htmlFor="">
            Spicy ?
            <input type="radio" value="No" name="option"/> No
            <input type="radio" value="Yes" name="option"/> Yes
          </label>
      </div>
    </>
    
    
  );
}

export default App;
