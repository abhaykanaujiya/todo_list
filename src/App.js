import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [items, setItems] = useState('');
  const [updated, setUpdated] = useState([]);
  
  const [counter, setCounter] = useState(1);

  const handleInc = (data) => {
    console.log(data);
    setCounter(data + 1);
  };

  const handleSubmit = (item) => {
    console.log(item);
    updated.push(item);
    setItems('');
  };
  const handleDelete=(data)=>{
console.log(data);
 
   //updated.splice(data,1);
  var newUpdate =  updated.filter((d)=>{
     return d !== data
   })
 console.log(newUpdate,"asasasasas")
   setUpdated(newUpdate);
 
  
  }

  const handleEdit=()=>{
    const editItems= items;
    editItems.map(items=>{
      
    })


  }
  const handleDec = (counter) => {
    setCounter(counter - 1);
  };
  return (
    <div className="form">
      <h1>Hello from home page {counter}</h1>
      <input
        type='text'
        value={items}
        placeholder='enter the text'
        onChange={(e) => setItems(e.target.value)}
      />
      <button onClick={() => handleSubmit(items)}>Add-Todo</button>

      {updated && updated.map((data,index) => (
      <div className="button">
      <ul><li className="a">{data}</li></ul>
      <button onClick={()=>handleEdit()}>Edit</button>
      <button key={items,1} onClick={()=>handleDelete(data)}>delete</button>
      </div>
      ))}

      <button onClick={() => handleInc(counter)}>Increase</button>
      {counter > 0 ? (
        <button onClick={() => handleDec(counter)}>Decrease</button>
      ) : null}
    </div>
  );
}

export default App;
