app.get('/computers', (rep,res) => {
    res.send(computers)
});

app.get('/cellphones', (rep,res) => {
    res.send(cellphones)
});


