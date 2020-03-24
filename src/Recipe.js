import React from 'react'
import Swal from 'sweetalert2'

const Recipe = ({ title, time, image, dietLabel, ingredients, healthLabels, calories, cautions, link, author }) => {

    const openRecipe = () => {
        Swal.fire({
            backdrop: 'rgba()40,40,40,0.4',
            background: 'linear-gradient(to right, #f06406 0%, #e1fe40 100%)', imageUrl: image,
            imageHeight: 300,
            title,
            html: `<div>${healthLabels}</div> 
            <div>Calories: ${calories}</div> 
            <h3>Cautions:</h3>  
            ${cautions}
            <h3>Ingredients:</h3>  
            ${ingredients}<br>
            <a href=${link}>full recipe at ${author}</a>
            `,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Save Recipe',
            cancelButtonText: 'ok'
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'saved to favorites',
                    timer: 1500,
                    showConfirmButton: false,
                }
                )
            }
        })
    }


    return (
        <div className='recipe-div'>
            <div className='recipe-title'>
                <h2 onClick={openRecipe}>{title}</h2>
                <div>
                    <span style={subTitleStyle}>{(time) ? `⌛${time} min'` : null}</span>
                    {dietLabel.map((label, index) => <span key={index} style={subTitleStyle}>✔{label} </span>)}
                </div>
            </div>
            <img src={image} onClick={openRecipe} />
        </div>
    )
}
const subTitleStyle = {
    margin: '5px',
}
export default Recipe