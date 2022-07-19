# quantic-test-course

This repository supports the Software Testing Course for the Masters of Software Engineering at [quantic.edu](https://quantic.edu).

## Hangry Hippo

![Hangry Hippo](./frontend/public/hangry-hippo.gif)
Hangry Hippo is a fictitious fast food company. They are developing a new online ordering system.

During the course, we will be developing different types of test cases to verify the online ordering functionality.

## Requirements

The Hangry Hippo application is divided into a Backend and a Frontend. It is preferred, but not required that you have the [git command line interface](https://git-scm.com/downloads) (cli) installed and a [GitHub account](https://github.com/signup).

### Backend

The backend was originally created using [django](https://www.djangoproject.com/) and [djangorestframework](https://www.django-rest-framework.org/). For more information, please read
https://stackabuse.com/creating-a-rest-api-with-django-rest-framework/

The backend requires [Pytho 3.8](https://www.python.org/downloads/). We recommend using a [Python Version Manager](https://realpython.com/intro-to-pyenv/).

### Frontend

The frontend was originally created using [Create-React-App](https://create-react-app.dev/).

The frontend requires [Node 18](https://nodejs.org/en/download/current/). We recommend using [Node Version Manager](https://github.com/nvm-sh/nvm) to manage multiple node versions.

## Local Installation

1.  Clone the repo

        git clone git@github.com:quasifu/quantic-test-course.git

### To run the Backend

1.  Change directory to the backend

        cd backend

2.  Setup a virtual environment

        python3 -m venv env

3.  Activate the environment

    Windows:

        source env/bin/activate

    Mac/Linux:

        . env/bin/activate

4.  Install the dependencies

        pip install

5.  Run the server

          ./manage.py runserver

6.  Verify the server is running by accessing the following API's.

    - http://127.0.0.1:8000/api/food/

      ![Food API](./readme-images/food-api.jpg)

    - http://127.0.0.1:8000/api/food/1

      ![Food Item Details API](./readme-images/food-detail-api.jpeg)

    - http://127.0.0.1:8000/api/category/

      ![Food Categories Details API](./readme-images/category-api.jpeg)

    - http://127.0.0.1:8000/api/category/1

      ![Food Category Details API](./readme-images/category-details-api.jpeg)

    - http://127.0.0.1:8000/api/order/

      ![Orders API](./readme-images/order-api.jpeg)

    - http://127.0.0.1:8000/api/order/Hippo

      ![Order Details API](./readme-images/order-details-api.jpeg)

    - http://127.0.0.1:8000/api/delivery/Hippo/4

      ![Delivery Fee API](./readme-images/delivery-fee-api.jpeg)

    - http://127.0.0.1:8000/api/subtotal/Hippo

      ![Subtotal API](./readme-images/subtotal-api.jpeg)

### To run backend unit tests

1.  Install the test dependencies

        pip install pytest django_mock_queries six

2.  Run the tests

        pytest

3.  You should see something like the screen below

        ================= test session starts ===================
        platform linux -- Python 3.8.13, pytest-7.1.2, pluggy-1.0.0
        rootdir: ./quantic-test-course/backend/hangry_api
        collected 5 items

        tests/test_DeliveryCost.py ...                     [ 60%]
        tests/test_SubtotalCost.py ..                      [100%]
        ================= 5 passed in 0.16s =====================

Starter application for Quantic Test Course. &copy; 2022 Quantic.
