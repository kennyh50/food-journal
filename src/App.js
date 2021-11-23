import './App.css';

function App() {
  return (
    <div className = 'flex justify-center items-center h-screen '>
      <div className="bg-brown-neutral">
        <h1>Food Journal</h1>
        <div>
          <form action="">
            <label htmlFor="meal">What did you eat? 
              <input type="text" placeholder="Describe meal" className = 'border-2 border-green-dark'/>
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
        </div>
        <label htmlFor="">
              Dairy ? 
              <input type="radio" value="No" name="dairy"/> No
              <input type="radio" value="Yes" name="dairy"/> Yes
            </label>

            <label htmlFor="">
              Spicy ?
              <input type="radio" value="No" name="spicy"/> No
              <input type="radio" value="Yes" name="spicy"/> Yes
            </label>
        </div>
      
    </div>
    
    
  );
}

export default App;
