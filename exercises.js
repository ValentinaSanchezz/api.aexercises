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




