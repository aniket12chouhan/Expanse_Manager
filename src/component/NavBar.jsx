import React from 'react'

const NavBar = () => {
  return (
    <nav class="Navbar">
        <h1 class="heading"><img src="./img/logo.png" class="logo" alt=""/> My Expense App</h1>
        <ul class="list-group">
            <li><a href="#Home">HOME</a></li>
            <li><a href="#OVERVIEW">OVERVIEW</a></li>
            <li><a href="#TRANSCTION">TRANSCTION</a></li>
            <li><a href="#ANALYTICS">ANALYTICS</a></li>
        </ul>
        <div class="support">
            <ul class="list-support">
                <li><a href="#Footer">Support & Help</a></li>
                <li>Feedback</li>
            </ul>
        </div>

    </nav>
  )
}

export default NavBar