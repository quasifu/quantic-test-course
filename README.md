# quantic-test-course

Backend created with django and djangorestframework
Requires Python3
Frontend created with npx create-react-app
Requires Node version 18
Starter application for Quantic Test Course. Copyright 2022 Quantic.

Related Articles:
https://stackabuse.com/creating-a-rest-api-with-django-rest-framework/

#Backend
python3 -m venv env
source env/bin/activate #Window
. env/bin/activate #Mac/Linux
pip install
./manage.py runserver

#To run tests
pip install pytest django_mock_queries six
pytest
