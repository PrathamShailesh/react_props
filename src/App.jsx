import './App.css';



function App(props) {
  // code here
  let i_data=props.imageData();
  console.log(i_data)
  return(
    <>
     <h1>Kalvium Gallery</h1>
  <div className='body'>
    {
      i_data.map((obj)=>{
        return(
          
          
          <img key={obj.id} src={obj.img} alt="elephant"/>
          
          )
        })
    }

  </div>
   </>

  )
}

export default App;