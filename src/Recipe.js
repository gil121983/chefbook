import React from 'react'
import Swal from 'sweetalert2'

const Recipe = ({ title, time, image, dietLabel, ingredients, healthLabels, calories, cautions }) => {

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
            ${ingredients}
            `,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Recipe'
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'You are redirected to recipe!',
                    timer: 1500,
                    showConfirmButton: false,
                }
                )
            }
        })
    }


    return (
        <div className='recipe-div'>

            <h2 onClick={openRecipe}>{title}</h2>
            <div>
                <p></p>
                <p>{dietLabel} {(time) ? `${time} min'` : null}</p>
            </div>
            <img src={image} onClick={openRecipe} />
        </div>
    )
}
export default Recipe