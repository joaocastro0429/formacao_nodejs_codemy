const users = [
    {
      id: 1,
      firstname: "Alice",
      lastname: "Smith",
      
    },
    {
      id: 2,
      firstname: "Bob",
      lastname: "Johnson",
     
    },
    {
      id: 3,
      firstname: "Charlie",
      lastname: "Brown",
     
    },
    {
      id: 4,
      firstname: "Diana",
      lastname: "Wilson",
      
    },
    {
      id: 5,
      firstname: "Eve",
      lastname: "Davis",
     
    }
  ];
    

exports.hello=(req,res)=>{
   return  res.send('Hello World')
}

exports.create = (req, res, next) => {
    const { firstname, lastname } = req.body;
  
    // Gerando um novo ID com base no comprimento do array + 1
    const id = users.length + 1;
  
    // Criando o novo usuário
    const user = { id, firstname, lastname };
  
    console.log(user);
  
    users.push(user);
  
    res.status(201).json(user);
  };

exports.listAll=(req,res,next)=>{
    res.json(users)
}

exports.getUser=(req,res,next)=>{
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id===id)
    if(!user) return res.status(404).json({message:'User not found'})
    res.json(user)
    
}

exports.update = (req, res, next) => {
    const { firstname, lastname } = req.body;
    const id = parseInt(req.params.id);

    // Encontrar o índice do usuário com o ID fornecido
    const userIndex = users.findIndex(user => user.id === id);

    // Verificar se o usuário foi encontrado
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Atualizar os campos do usuário
    users[userIndex].firstname = firstname;
    users[userIndex].lastname = lastname;

    // Enviar a resposta com o usuário atualizado
    res.status(200).json(users[userIndex]);
};


exports.delete=(req,res,next)=>{
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    users.splice(userIndex, 1);

    res.status(204).send();
}