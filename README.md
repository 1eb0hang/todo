# TODO App

 - [ ] add task

 - [ ] task will open dedicated page with more details on click

 - [ ] should be able to add subtasks and sub-subtasks

 - [ ] should have multiple lists of tasks(somehow)

 - [ ] will be stored on sqlite db

## Details page
 - [ ] Due date

 - [ ] Schedule date

 - [ ] Details

 - [ ] Sub Tasks list

## Sql Tables

### Tasks
 - **id** INT, Primary Key
 - **title** TEXT, Not Null
 - **due** DATE
 - **schedule** DATE
 - **description** TEXT

**Description**: A table containing all tasks in the program

### Subtasks
 - **id** INT, Primary Key
 - **task** INT, Foreign Key -> (Tasks)
 - **subtask** INT, Foreign Key -> (Task)

**Description**: A join table of Tasks with itself containing all combinations of
tasks and sub tasks

### TaskLists
 - **id** INT, Primary Key
 - **title** TEXT, Not Null
 - *possibly some defining condition*

**Description**: A table containing task lists, e.i. lists of associated tasks.
This association is user defined.

### TaskListings
 - **id** INT, Primary Key
 - **tasklist** INT, Foreign Key -> (TaskLists)
 - **task** INT, Foreign Key -> (Tasks)

## Server Requests

**get**:
 - **task/{id}** : get task by id
 - **tasks** : get all tasks

**post**:
 - **task/create** : create task
 - **task/update** : updates existing task
 - **task/delete** : deletes task

also i want a kanban feature later on
