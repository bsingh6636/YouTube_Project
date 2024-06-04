import React from 'react'
import Button from './Button'

const ButtonsList = () => {
    const list = ["All ", "Live", "Movies", "Song", "Cricket", "News", "Election", "Valentine","Cooking","Shows"]
    return (
        <div className='flex '>
            {list.map(items => 
               <Button key={items} name={items} />
            )}


        </div>

    )
}

export default ButtonsList