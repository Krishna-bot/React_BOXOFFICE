import React, {useState} from 'react'
import  MainPageLayout  from '../components/MainPageLayout'

const Home = () => {
    const [input, setInput] = useState('');

    const onSearch = () =>{
        // https://api.tvmaze.com/search/shows?q=girls
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(r => r.json()).then(result =>{console.log(result);
        })
   }

    const onInputChange = (e) => {
        setInput(e.target.value);   
    }

    const onKeyDown = (e) =>{
        if(e.keyCode === 13 )
            onSearch();  
    };

    return (
        <MainPageLayout>
            <input type ="text" onChange= {onInputChange} value = {input} / >
                <button type ="button" onClick ={onSearch} onKeyDown ={onKeyDown} >Search</button>
        </MainPageLayout>
    )
}

export default Home