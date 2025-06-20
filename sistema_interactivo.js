function agregarCliente(){
    let lisClientes=[];
    let cantidadClientes=prompt("Digite cantidad de clientes");
        cantidadClientes=parseInt(cantidadClientes);
    for(let i=0; i<cantidadClientes; i++){
        let id=prompt("Ingresa el id del cliente");
        let nombre=prompt("Ingresa el nombre del cliente");
        let edad= prompt("Ingresa la edad del cliente");
        edad=parseInt(edad);

        if ((edad)<18){
        alert("No puede manejar el programa por ser menor de edad");
        continue;}

        let cliente={
        id:id,
        nombre:nombre,
        edad:edad,
        estado:true,
        roles:[]
         };

        let cantidadRoles=prompt("Digite cantidad de roles");
        cantidadRoles=parseInt(cantidadRoles);
        

        for(let j=0; j<cantidadRoles; j++){
            
            let idRol=prompt("Ingresa el id del rol");
            let nombreRol=prompt("Ingresa el nombre del rol");
            let role={
                id:idRol,
                nombre:nombreRol
            }

            cliente.roles.push(role)
       }

             lisClientes.push(cliente);

        }

    
    const lista= document.getElementById("cliente-lista");

    lisClientes.forEach(cliente => {
        const listItem = document.createElement("li");
        listItem.textContent =  `${cliente.nombre} - ${cliente.edad} `
        lista.appendChild(listItem)
    }

    );

console.log(cliente);
alert(JSON.stringify(cliente));
};