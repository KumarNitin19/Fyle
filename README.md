# Fyle
Project Title is Fyle

This project is a Angular application was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Installation 
npm install

## Start the project 

ng serve

## Purpose

This application is used to see the Github repositories of users just by putting their username.


## Project Description 

In this platform of fyle you can see Github information of anyone by just putting their username. When you open the a modal comes out it's compulsory for you to put any Github Username and after submitting you can see the details and repositeries of that particular user.


So in the project I am taking username from the modal which comes when we open the application, And I am saving that username in the Session Storage on click of submit button. Afterwords on Homepage I am extracting username from Session Storage, and I am calling Github Rest API using username as a end-point in the API, So that I may get the data of that particular user. And after getting the data from the API, I am mapping that data in the form of cards in UserDetail Component.