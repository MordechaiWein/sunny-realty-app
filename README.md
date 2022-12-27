# Sunny Realty (phase-2 final-project)

## Introduction

My name is Mordechai Wein. I have created this React application for my Phase-2 project. The application
incorporates Hooks, Routes, Links, and other React logic.

## Description 

I decided to make a mock real estate database app for my project.

My app has three client-side routes: a Home, Listings, and Realtors page. I created NavLink tags so the user can navigate these three pages. 

The Home page is a user-friendly welcome page that explains the website. 

The Listings page is where a user can find available real estate listings and add listings to the database. 

Upon page load, the data is fetched in the app component set to state and sent down via props to listings. The data is then mapped through and rendered onto the page. 

A POST request is made when a user submits the form on top of the page after filling out the necessary info. A function then fires off and resets the original state to the data and the new object. It is then mapped through again and rendered on the page automatically. 

When visiting the Realtor page, we can see all the information about the Realtor associated with the property listing. On the Listing page, each property card will say who the Realtor is. We can then go to the Realtor page and find the Realtor information. If the Realtor is good, they can be given a star.

## Credit 

Much of the CSS in my project was adapted from Flatiron School labs. This includes the styling of my form, listing cards, and NavLinks.   For this, I would like to give credit to Flatiron School.