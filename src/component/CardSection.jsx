import React from 'react'
import FormSection from './FormSection'

const CardSection = () => {
  return (
    <div class="card-section" id='OVERVIEW'>
    <div class="username">
        <span>
            <img src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png" alt=""/>
            <div class="name">
                <h4>NAME :- <b>Aniket chouhan</b></h4>
                <h4>CONTACT :- <b>+91-78849-12342</b></h4>
                <h4>EMAIL ADDRESS :- <b>aniket123@gmail.com</b></h4>
                <h4>ADDRESS :- <b>30 MIG colony indore</b></h4>
            </div>

        </span>
    </div>

    <FormSection/>


</div>
  )
}

export default CardSection