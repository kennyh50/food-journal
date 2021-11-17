import './App.css';

function App() {
  return (
    <div className = 'whole-thang'>
      <div className="center-content">
        <h1>Food Journal</h1>
        <div>
          <form action="">
            <label htmlFor="meal">What did you eat? 
              <input type="text" />
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
        </div>
      
    </div>
    
    
  );
}

export default App;
