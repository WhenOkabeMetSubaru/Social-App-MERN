const create = async (user)=>{
    try{
        let response = await fetch('/api/users/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        return await response.json()
    }catch(err){
        console.log(err)
    }
}

const list = async()=>{
    try{
        let response = await fetch('/api/users',{
            method:'GET',
            
        })
        return await response.json()
    }catch(err){
        console.log(err)
    }
}

const read = async(params,credentials)=>{
    try{
        let response = await fetch('/api/users/' + params?.userId,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+credentials.t
            }
        })
        return await response.json();
    }catch(err){
        console.log(err)
    }
}

const update = async(params,credentials,user)=>{
    console.log(params,credentials,user)
    try{
        let response = await fetch('/api/users/'+params.userId,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer '+credentials.t
            },
            body:JSON.stringify(user)
        })
        return await response.json()
    }catch(err){
        console.log(err)
    }
}

const remove = async(params,credentials)=>{
    try{
        let response = await fetch('/api/users/' + params.userId,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + credentials.t
            }
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    create,read,remove,update,list
}