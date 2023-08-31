app.get('/computers', (rep,res) => {
    res.send(computers)
});

app.get('/cellphones', (rep,res) => {
    res.send(cellphones)
});


app.get('/houses', (rep,res) => {
    res.send(houses)
});



app.get('/cats', (rep,res) => {
    res.send(cats)
});



app.get('/dogs', (rep,res) => {
    res.send(cdogs)
});



app.get('/shirts', (rep,res) => {
    res.send(shirts)
});



app.get('/shoes', (rep,res) => {
    res.send(shoes)
});



app.get('/boxes', (rep,res) => {
    res.send(boxes)
});


app.get('/Beds', (req,res) => {
    res.send(Beds)
});

app.get('/burgers', (req,res) => {
    res.send(burgers)
});

app.get('/lasagna', (req,res) => {
    res.send(lasagna)
});

app.get('/hotdog', (req,res) => {
    res.send(hotdog)
})

app.get('/pizza' , (req, res) => {
    res.send(pizza)
})
 

app.get('/wings' , (req, res) => {
    res.send(wings)
});

app.get('/lentils', (req,res) => {
    res.send(lentils)
});

app.get('/rice', (req,res) => {
    res.send(rice)
});