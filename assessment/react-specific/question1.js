// ASSESSMENT:
// You will be implementing a table with its content fetched from https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10
// You will use functional components and hooks
// And a simple table styling in question1.css
// An example UI of a working version is presented in question1.gif
//

// BONUS POINT: implement pagination feature with Previous-Next buttons
// _start and _limit are query parameters which you can use to fetch some of the items, which is called 'pagination'
// _limit is always 10 for our case, but _start parameter can be changed to fetch portions of that data


// SOLUTION:
// React and ReactDOM is already imported in index.html


function App() {
  
    const [veri,setVeri]=React.useState([]);
    const [start,setStart]=React.useState(0);

    
   React.useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=10`)
        .then(responsive =>{return responsive.json()})
        .then(data => {setVeri(data)})
    },[veri]);

    function nextButton(){
      setStart(start+10)
    }
    function previousButton(){
      start===0 ? start :setStart(start-10)
    }
  return (
    <div className="content">
      <table>
            <thead>
              <tr>
                <th>id</th>
                <th>userId</th>
                <th>title</th>
                <th>complated</th>
              </tr>
            </thead>
            <tbody>
              {veri.map((veri)=>{
                return (
                  <tr key={veri.id}>
                    <td>{veri.id}</td>
                    <td>{veri.userId}</td>
                    <td>{veri.title}</td>
                    <td>{veri.completed === true ? "yes" :"no"}</td>
                  </tr>
                )
              })}
            </tbody>
      </table>
      <div className="buttons">
        <button onClick={previousButton}>Previous</button>
        <button onClick={nextButton}>Next</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));