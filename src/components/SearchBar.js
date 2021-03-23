import React,{useState} from 'react';



const SearchBar = ({onTermSubmit})=>
{
const [term,setTerm]=useState('');

 const  onSubmit = (event)=>{
    
    event.preventDefault();
    onTermSubmit(term);
    
    }

    return (
        <div className="search-bar ui segment"> 

          <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
                <label>
                    Video search
                </label>
                <input 
                type="text" placeholder="please enter here"  
                value = {term} 
                onChange={(event)=>{setTerm(event.target.value);}} >
                </input>

            </div> 

          </form>
            
        </div>
    );

};










export default SearchBar ;