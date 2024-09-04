Flask Message Processor
=======================

Introduction
------------

This is a Flask-based web application that processes user-submitted messages according to specified preferences.

How to Run
------------

1. Install the required dependencies by running `pip install -r requirements.txt`
2. Run the application by executing `python app.py`
3. Open a web browser and navigate to `http://localhost:5000` to access the message submission form

Basic Functionality
-----------------

* The application accepts POST requests with user-submitted messages and preferences
* The messages are processed according to the specified preferences using the `process_message` function from the `models/message.py` module
* The processed messages are returned to the client, where they are displayed using JavaScript code from the `static/js/script.js` file

Project Structure
----------------

* `app.py`: Main entry point for the Flask server
* `templates/index.html`: Client-side HTML form for submitting messages and processing preferences
* `static/js/script.js`: JavaScript code for handling form submission and displaying processed messages
* `models/message.py`: Contains functions for processing messages according to specified preferences
* `requirements.txt`: Lists dependencies required for the Flask application
* `.gitignore`: .gitignore file with Python cache files and other unnecessary files