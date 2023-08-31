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

app.get('/potatoes', (req,res) => {
    res.sen(potatoes)
});

app.ger('/carrot', (req,res) => {
    res.sen(carrot)
});

app.get('/curtains', (req, res) => {
    res.send(curtains)
});

app.get('/Beds', (req,res) => {
    res.send(Beds)
});

app.get('/fans', (req,res)=> {
    res.send(fans)
});

app.get('/positive-negative/:number', (req, res) => {
    const numero = parseFloat(req.params.numero);
  
    if (numero > 0) {
      res.send('positive');
    } else (numero < 0)
      res.send('negative');
    
});

app.get('/elderly - minor/:number', (req,res) => {
    const numero = parseInt(req.params.cantidad);

    if(numero > 7){
        res.send ('is older');
    } else (numero < 7)
        res.send('is less')
    
});

app.get('/elderly - minor/:number', (req,res) => {
    const minor = parseInt(req.params.cantidad);

    if(number < 9){
        res.send('is less')
    } else (number > 9)
        res.send('is older')
});