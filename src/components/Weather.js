import React, {useState} from 'react';

function Weather() {
    
    const [input, setInput] = useState('');
    const [currentTemp, setCurrentTemp] = useState('Enter a city');

    async function getTemp(location){        
        try{
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid=3e0bdd64a82ebb2058819045bbe3f92b&units=metric', {mode:"cors"});
            const temperature = await response.json();
            return temperature;
        } catch(e){
            console.log(e);
        }
    }

    function handleChange(event){
        setInput(event.target.value);
    }

    async function startSearch(e){
        try {
            let z;
            e.preventDefault();
            z = await getTemp(input);
            if (z.cod === '404'){
                console.log(z.message);
            } else {
                console.log(z);
                setCurrentTemp('Current temp in ' + input + ' : ' + z.main.temp);
            }
        } catch(err) {
            console.log(err);
        }


    }



 

    function bab(){
      return '3e0bdd64a82ebb2058819045bbe3f92b'
    }

    return (
      <div>
       {currentTemp}
        <form onSubmit={startSearch}> 
            <input type = 'text' value = {input} onChange = {handleChange}></input>
            <button type = 'submit'>Submit</button>
        </form>
      </div>
    );
  }
  
  export default Weather;
  