const d=document;
const w=window;

const $eliminar=d.querySelector('#btn-eliminar')
const $form=d.querySelector('#formEliminar')

// $eliminar.addEventListener('click',e=>{
    $form.addEventListener('submit',e=>{
        e.preventDefault()
    
    Swal.fire({
        title: 'Oiga, estas Seguro de borrarlo?',
        text: "Recuerda, que una vez que lo borras, se va como tu ex!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor:'#3085d6',
        confirmButtonText: 'Si, Borralo todo ya no me importa!',
        cancelButtonColor:'#d33',
        cancelButtonText: 'No, dejala que la extraño!',
        reverseButtons: true
    })
    .then(result=>{
        if(result.isConfirmed){
            Swal.fire({
                title:'Borrado!',
                text:'el archivo ha sido eliminado.',
                icon:'success'
            })
            $mensaje.innerHTML="este archivo ha sido eliminado"
        }else if(result.dismiss===Swal.DismissReason.cancel){
            
            Swal.fire({
                title:'Cancelado!',
                text:'tu archivo esta a salvo.',
                icon:'error'
            })
        }
    })
    .catch(error=>console.log(error))

})
