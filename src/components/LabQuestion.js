import React from 'react';
import '../App.css';
import './HeroSection.css';


function LabQuestion() {
    return (
        <div className='question'>
            <h1>Python Lab 1 </h1>
            <p>This lab is to create a list of catalog items and sort it. The item may be a 'Book' or a 'CD'. Both 'Book' and 'CD' will therefore be classes implementing an interface called 'Media'. Since the catalog item can be a 'Book' or a 'CD', we will make a generic class called 'CatalogItem' which can take one of these two types.
                The details are as follows:
                -	Each Book and a CD has its own unique ID. The difference between the CD class and the Book class will be in the data types for the ID, since a CD usually has an integer code as its ID and a book uses an alphanumeric string code (ISBN). These ID's will be the basis of the sorting which this lab aims to accomplish.
                - As CatalogItem is a generic class with a single parameter, and we can create a CatalogITem of type book or a CD.
                - A catalog will be represented as an ArrayList of CatalogItems.
                - CatalogItem will be Comparable itself, as we wish to call 'sort' on a list of CatalogItems, which in turn calls the compareTo() method to do the sorting.
                ***
                ## Question 1
            </p>


            <p>Question 1
            
            Create Media.java: An interface with four methods that every class considered to be some form of media should be able to define.
            public /T Comparable T/ getId(): Returns a generic type Id which will be an Integer or a String based on whether a Book implements Media or a CD.
            getCreator(): Returns a String and has no arguments. Its return value should be the name of the person responsible for creating this Media.
            getTitle(): Returns a String and has no arguments. Its return value should be the title of this Media.
            getYear(): Returns an int and has no arguments. Its return value should be the year that this Media was created.
            </p>
        </div>
    )
}

export default LabQuestion
