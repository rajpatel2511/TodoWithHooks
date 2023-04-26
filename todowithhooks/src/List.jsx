const List = (props) =>{        
    // console.log(props);

    return(
  
  <ul>
    {  
        props.arr.map((event)=>{
         return (<><li key={event}>{event} </li>

          
         </>)})
    }
</ul>
);};

export default List;
