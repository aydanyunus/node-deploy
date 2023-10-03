import express from 'express';
import { v4 as uuid } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT

const app = express();

app.use(express.json());


const pets = [
    {
        id: "5530645b-714f-431a-b5c9-220047f534cc",
        name: 'lola',
        type: 'cat',
        age: 3,
        color: 'brown'
    },
    {
        id: "4ccaa552-6483-4392-b533-c6b8af4ae937",
        name: 'jijuli',
        type: 'dog',
        age: 1,
        color: 'black'
    },
    {
        id: "08f73f01-a65a-4e3d-a261-7032c5ab6bb9",
        name: 'polika',
        type: 'carrot',
        age: 5,
        color: 'green'
    }
]

app.get('/pets', (req, res) => {
    return res.json(pets)
})

app.get('/pets/:id', (req, res) => {
    return res.json(pets.find(({ id }) => id === req.params.id));
})


app.post('/pets', (req, res) => {
    const id = uuid();
    pets.push({ ...req.body, id })
    return res.json('added successfully')

})

app.listen(port, () => {
    console.log(`${port}`)
})