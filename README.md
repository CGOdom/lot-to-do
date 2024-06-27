Hosting Link: https://cgodom.github.io/lot-to-do/


User Types:

1. Busy Professional
2. Student
3. Homemaker


User Stories:

1. Busy Professional

- WHO: Busy Professional
- WHAT: Needs to manage multiple work tasks efficiently.
- WHY: To stay organized and ensure no tasks are forgotten.

User Story: As a busy professional, I want to add new to-do items quickly so that I can immediately capture tasks as they come up.


2. Student

- WHO: Student
- WHAT: Needs to track assignments and study schedules.
- WHY: To manage academic responsibilities and improve productivity.

User Story: As a student, I want to add to-do items for my classes so that I can keep track of my assignments and exams.


3. Homemaker

- WHO: Homemaker
- WHAT: Needs to manage household chores and family schedules.
- WHY: To ensure all household tasks are completed and family members are coordinated.

User Story: As a homemaker, I want to mark tasks as 'To-Do' or 'Done' so that I can visually track my progress.


These user stories provide a comprehensive understanding of the diverse needs and goals of different user types, guiding the development of a versatile and user-friendly To-Do List application.



State Tree:

{
  todos: {
    byId: {
      '1': {
        id: '1',
        text: 'Buy groceries',
        completed: false
      },
      '2': {
        id: '2',
        text: 'Finish project report',
        completed: false
      }
    },
    allIds: ['1', '2']
  },
  filter: 'all',
  ui: {
    loading: false,
    error: null
  }
}


Explanation:

1. todos:
    - byId: An object where each key is a todo ID and the value is the todo item.
    - allIds: An array of all todo IDs for easy access.
2. filter: The current filter applied to the to-do list (e.g., all, todo, done).
3. ui: Contains UI-related states such as loading status and error messages.



Wireframe Prototypes:


1. State Tree:
+-----------------------------------+
|               State               |
+-----------------------------------+
|                                   |
|   +---------------------------+   |
|   |          todos            |   |
|   +---------------------------+   |
|   |  byId                     |   |
|   |   +-------------------+   |   |
|   |   |  1: {             |   |   |
|   |   |     id: '1',      |   |   |
|   |   |     text: 'Buy    |   |   |
|   |   |     groceries',   |   |   |
|   |   |     completed:    |   |   |
|   |   |     false         |   |   |
|   |   |  },               |   |   |
|   |   |  2: {             |   |   |
|   |   |     id: '2',      |   |   |
|   |   |     text: 'Finish |   |   |
|   |   |     project       |   |   |
|   |   |     report',      |   |   |
|   |   |     completed:    |   |   |
|   |   |     false         |   |   |
|   |   |  }                |   |   |
|   |   +-------------------+   |   |
|   |  allIds: ['1', '2']        |   |
|   +---------------------------+   |
|                                   |
|   +---------------------------+   |
|   |         filter            |   |
|   +---------------------------+   |
|   |           all             |   |
|   +---------------------------+   |
|                                   |
|   +---------------------------+   |
|   |           ui              |   |
|   +---------------------------+   |
|   |   loading: false          |   |
|   |   error: null             |   |
|   +---------------------------+   |
|                                   |
+-----------------------------------+


2. HOME PAGE:
+-------------------------------------------------+
|    Logo    [Home] [To-Do List] [Contact]        |
+-------------------------------------------------+
|                Welcome to Our App               |
|        Manage your tasks efficiently and        |
|               stay organized!                   |
|                                                 |
|                [Get Started]                    |
+-------------------------------------------------+
|                     Footer                      |
+-------------------------------------------------+


3. LIST PAGE:
+-------------------------------------------------+
|                    To-Do List                   |
+-------------------------------------------------+
| [All] [To-do] [Done]                            |
+-------------------------------------------------+
| + Add New To-Do Item                            |
|  [___________________________________] [Add]    |
+-------------------------------------------------+
| - To-Do Item 1      [Edit] [Delete] [Complete]  |
| - To-Do Item 2      [Edit] [Delete] [Complete]  |
| - To-Do Item 3      [Edit] [Delete] [Complete]  |
| - To-Do Item 4      [Edit] [Delete] [Complete]  |
+-------------------------------------------------+


4. CONTACT PAGE:
+-------------------------------------------------+
|                   Contact Us                    |
+-------------------------------------------------+
| First Name:  [_________________________]        |
| Last Name:   [_________________________]        |
| Email:       [_________________________]        |
| Comments:    [_________________________]        |
|              [_________________________]        |
|              [_________________________]        |
+-------------------------------------------------+
| [Submit]                                        |
+-------------------------------------------------+
