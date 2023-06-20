import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to The Reading Nook, where you can embark on a literary journey to find your perfect book. Our extensive collection caters to all genres and interests, ensuring there's something for everyone. Simply enter your desired book title, author, or keywords, and let our intelligent search engine guide you to your literary treasure.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header