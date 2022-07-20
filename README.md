# quantic-test-course

* Backend created with django and djangorestframework
* Requires Python3
* Frontend created with npx create-react-app
* Requires Node version 18
* Starter application for Quantic Test Course. Copyright 2022 Quantic.

Related Articles:
https://stackabuse.com/creating-a-rest-api-with-django-rest-framework/

## Installing the app (see note 1):

Clone the repo, then: (@Brian, depending on where this course ends up in the curriculum this might be the first time learners are working with GitHub, so there may need to be explanation as to how to do this)

For Windows:

    cd quantic-test-course\backend\hangry_api
    python3 -m venv env
    env\Scripts\activate
    pip install -r requirements.txt
    
For macOS and Linux:

    cd quantic-test-course/backend/hangry_api
    python3 -m venv env
    . env/bin/activate
    pip install -r requirements.txt
    
## Starting the server (see note 2 and 3):
    
    manage.py runserver
    
## Running tests (see note 2 and 4):

    pip install pytest django_mock_queries six
    pytest

Notes:
1. `python3 -m venv env` sets up a separate environment where pip can install packages without affecting your global Python installation (if `python3` fails, try `python`). The `activate` script activates that environment, and your command prompt will change to reflect that you're in the `env` environment. You only need to create the evironment once; for subsequent sessions just activate the environment with the `activate` script. To exit the environment, use the `deactivate` command. You can learn more about the `venv` module [here](https://docs.python.org/3/library/venv.html).
2. Be sure you're in the `quantic-test-course/backend/hangry_api` directory and that you've activated the environment with the `activate` script before you do this.
3. If the current working directory isn't included in your OS's PATH environment variable, you'll need to prepend it to the command like so: `.\manage.py runserver` (for Windows) `./manage.py runserver` (for macOS/Linux).
4. The server shouldn't be running when you run tests.
