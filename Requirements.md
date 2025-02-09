# To-Do App Requirements

### Functional Requirements

- **Task Management**
  - create, edit and delete tasks
  - task objects include compulsory title, due date, schedule
  <br>date and description fields, as well as tags field
  - tasks can have subtasks
    - a task can be a subtask of multiple tasks
    - a task that is a subtask of multiple tasks, when marked as
    <br>completed, should update all objects that reference said
    <br>task


- **Tasklist Management**
  - create, edit and delete task list
  - includes type of list, which can be set or collection
    - set : grouping by predefined attribute
    - collection : grouping determined by user
  - able to add existing task to list, or create task in list
  - a task can be part of more than one task list
    - a task in multiple task lists, when marked as completed,
    <br>should update all objects that reference said task
  - Default list named "All" containing all tasks cannot be
  <br>deleted nor renamed


- **Workspace Management**
  - each workspace is basically a database with some id
  - workspaces should be synced across devices with
  <br>authentication details
    - sync across local network


- **Calendar**
  - tasks with due dates or scheduled dates should be mapped
  <br>onto calendar
  - can be colour coordinated and filtered based on if they are
  <br>scheduled or due, on task lists, or on some other property
