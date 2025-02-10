
# To Do App MVP

## Table of Contents
<details>
<summary>Expand contents</summary>

- [Introduction](#intro)
  - [Purpose](#purpose)
  - [Scope](#scope)
  - [Definitions](#definitions)
  - [Overview](#overview)


</details>

<a id="intro"></a>
## Introduction

<a id="purpose"></a>
### Purpose
This document outlines the architectural plan for the Minimum Viable Product
<br>(MVP) of the To Do App. It's intended for the project's development
<br>team and future architects. It will guide the initial development and future
<br>enhancements.

<a id="scope"></a>
### Scope
The architecture covers the MVP of the To Do App, which focuses on task
<br>management and task list management.

<a id="definitions"></a>
### Definitions
- MVP: Minimum Viable Product
- API: Application Programming Interface
- DB: Database

<a id="overview"></a>
### Overview
The document proceeds to detail the architectural style, system stakeholders
<br>and concerns, a high-level system overview, architectural strategies,
<br>system architecture, key decisions, quality attributes, risks, and
<br>technical debt.
<br>**<span style="color:#ff3f2f">TODO</span>: Edit Overview**

## Architectural Representation
- **Monolithic Architectural Style**
  - simplified develpment,
  - allows for quick launch
  - cost effective

## System Concerns
- Security - protect user data and privacy
- Maintainability - making future updates easier

## System overview
**High Level Description**: Allows for users to create, manage and delete tasks
<br>and tasks= lists. It may include user authentication


## Architectural Strategies
- implement custom css and js framework for front-end
- java with javalin and hibernate for backend
- sqlite for relation based db management


## System Architecture
- Modules/Layer
  - **Front-End** - Handles user Interface and client-side logic
  - **Back-End** - Manages server-side logic, API requests and db interactions
  - **Database** - Stores and retrieves all application data

![Component Diagrams](/docs/diagrams/ComponentDiagram.png)

## Database Design
- **tasks** - Stores task info
- **subtasks** - Join table for "tasks" with itself
- **tasklists** - Stores lists of tasks
- **tasklistings** - Join table of "tasks" and "tasklists"

![Database Diagrams](/docs/diagrams/ERD1.png)
