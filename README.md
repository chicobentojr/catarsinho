# Catarsinho

A little project based on [Catarse](https://www.catarse.me/).

## Getting Started

First of all, clone this repository in your machine.

```bash
git clone https://github.com/chicobentojr/catarsinho.git
```

and open the folder.

```bash
cd catarsinho
```

### Prerequisites

- [Pipenv](https://github.com/pypa/pipenv)
- [Yarn](https://yarnpkg.com/en/docs/install) or [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)


### Running the server

On the root folder, install the packages

```bash
pipenv install
```

Activate the virtualenv

```bash
pipenv shell
cd server
```

Migrate the tables

```bash
python manage.py migrate
```

Running the server

```bash
python manage.py runserver
```

Open [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/) and you will see a image like this indicating that the server is ready.

![Screenshot-Server](https://i.imgur.com/NVy6iUo.png)

### Running the client

After the server is ready, open an new terminal and on the root folder you

```bash
cd client
```

Installing packages

```bash
# If you are using Yarn
yarn install

# If you are using npm
npm install
```

Running the client

```bash
# If you are using Yarn
yarn start

# If you are using npm
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) and you see will a image like this indicating that the client is ready.

![Screenshot-Client](https://i.imgur.com/GgKlgeB.jpg)

## Build With

- [Django Rest Framework](http://www.django-rest-framework.org/)
- [React](https://reactjs.org/)
- [Semantic UI React](https://react.semantic-ui.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
