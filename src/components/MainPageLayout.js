import React from 'react'
import Nav from './Nav'
import Title from './Title'



const MainPageLayout = ({children}) => {
    return (
        <div>
            <Title  title="Box-Ofice" subtitle ="Are You looking for Movie"></Title>
            <Nav />
            {children}
        </div>
    );
}
export default MainPageLayout