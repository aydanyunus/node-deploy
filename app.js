import express from 'express';

const app = express();


const pets = [
    {
        id: 0,
        name: 'lola',
        type: 'cat',
        age: 3,
        color: 'brown'
    },
    {
        id: 1,
        name: 'jijuli',
        type: 'dog',
        age: 1,
        color: 'black'
    },
    {
        id: 2,
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
    return res.json( pets.find(({id})=>id === +req.params));
})

app.listen(10000, ()=> {
    console.log('10000')
})