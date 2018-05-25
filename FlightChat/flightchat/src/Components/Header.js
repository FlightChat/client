import React from 'react'
//import { Link } from 'react-router-dom'
//import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
//import $ from 'jquery'
import "../index.css"
import FaIconPack from 'react-icons/lib/fa'

/*
$(function(){
    $(".nav-item").click(function(){
       var callItem=$(this);
       callItem.addClass('active');
       $(".nav-item").not(callItem).removeClass('active');           
    })
});
*/

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item ">
                <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link" href="/register">Register</a>
            </li>
            </ul>
        </div>
        <input type="text" placeholder="Search.."/><button type="submit"><i class="fa fa-search"></i></button>
    </nav>
  </header>
)
export default Header