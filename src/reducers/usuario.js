const addUser = (user, users)=>{
    users.push(user);
    return users;
}
const addUsersItems = (user, users)=>{
    users.push(user);
    return users;
}
const initialState = {
    users: ["max"],
    listUser:[{
                "Nome":"Max",
                "Sobrenome":"Guimaraes",
                "DataNascimento": "03/05/1992"
            }],
    podeAtualizar:false,        
    itemSelecionado:''        
};

const reduce = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case 'Register/CLICK_REGISTER':
            nextState = {...state,users: addUser(action.payload.user,state.users), podeAtualizar:false};
            break;
        case 'Item/CLICK_ADD':
            nextState = {...state,listUser: addUsersItems(action.payload.user,state.listUser), podeAtualizar:true};
            break;    
        case 'NAO_PODE':    
            nextState = {...state, podeAtualizar:false};
            break;
        case 'Item/CLICK_ITEM':    
            nextState = {...state, itemSelecionado:action.payload};
            break;    
    }
    return nextState || state;
}

export default reduce;
