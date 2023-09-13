import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function About() {
    return (
      <div className="about">
        <div className="container">
        <div className="about-page">
      <h1>About Us</h1>
      <p>
          Welcome to our vibrant community of bloggers! We are passionate about providing a platform where users can freely express their thoughts, insights, and creativity through blogging.
        </p>
        <p>
          Our mission is to empower individuals from all walks of life to share their unique perspectives on a wide range of topics, whether it's technology trends, culinary adventures, artistic creations, or anything else that ignites their passion.
        </p>
        <p>
          We believe that everyone has a story to tell and valuable knowledge to share. Our user-friendly blogging platform allows you to create, customize, and publish your blogs with ease.
        </p>
        <p>
          Whether you're an experienced writer or just starting your blogging journey, our community welcomes you with open arms. Connect with fellow bloggers, engage in meaningful discussions, and inspire others with your words.
        </p>
        <p>
          Join us today and become a part of the ever-growing world of blogging. Your voice matters, and we're here to amplify it.
        </p>
      <Link to="/contact">Contact Us</Link> 
    </div>

        </div>
      </div>
    );
  }
  
  export default About;