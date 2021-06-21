# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: I actually did this in the challenge. I added a column named animal_id to the Sightings model by executing the command rails generate migration add_columns. And then in the migrate folder under the add_columns migration file I entered: 
  def change
    add_column :sightings, :animal_id, :integer
  end 

  Researched answer: rails generate migration and then add the changes to the migration file using the convention add_column :table, :name_of_column, :data_type



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that need params are: show, edit, update, and destroy. Create needs strong params to ensure only the desired data is stored to the database. These params are passed so the controller knows what id to call on to read/create the data. 

  Researched answer: The RESTful routes that need params are: show, edit, update and destroy. 



3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands are: 
  1. generate model - creates a basic table of keys and values that make up a database
  2. generate migration - creates a migration to modify the shape of your table.
  3. generate resource - creates a rails model that has all the routes connected to the controller and view built in.  

  Researched answer: generate model creates a migration, model and tests for the files that were generated.
  generate migration implements transformations to your database.
  generate resource creates a migration, model, tests, controller, views folder and resource routes.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students  index        

method="GET"    /students/2 show 

method="GET"    /students/new new

method="GET"    /students/edit/2 edit

method="POST"   /students/ create

method="PATCH"  /students/2 update

method="DELETE" /students/2 destroy 



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.
1 - Create a model named ToDoList and generate with resources to include the controller and routes.
2 - Initialize the model with a task name and a description of the task
3 - Migrate your db
4 - Create controller method imdex that will access all items from the database
5 - Create the show route in the controller that will look for the one item in the db
6 - To be able to add new tasks, create the new route in the controller
7 - Add a new item to the to do list by creating a RESTful route create 
8 - Add 3 to do items to the list
9 - Delete/destroy the first item on the list
10 - Update/edit a task 