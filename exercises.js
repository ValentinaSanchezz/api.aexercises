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
