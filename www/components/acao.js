   localStorage.setItem("nextID",1);
   var currentID = null;
   var retornoCurrent = null;

$(document).ready(function(){
  loadContacts();
  $("#add").prop("disabled",true);
})

function loadContacts(){
  $(".principal").children().remove();
   const keys = Object.keys(localStorage);
   keys.forEach(key =>{
      if(key !== "nextID"){
        const dadosJson = JSON.parse(localStorage.getItem(key)); 
        $(".principal").append("<div class='row primeira'><div class='col-2 mt-2 idk'><div class='form-group'><img src='lib/icone_telefone.png' style='width:50px; height:50px;margin-bottom:-50px;'></div></div><div class='col-6 mt-2'><ul><li><label id='nome'>"+dadosJson.nome+"</label></li><li><label id='numero' >"+dadosJson.telefone+"</label></li><li><label id='email' >"+dadosJson.email+"</label></li></ul></div><div class='col-2 mt-2'><div class='form-group'><button class='btn btn-danger btn-lg  funcionar' id="+key+"><label class='xis'  id="+key+">❌</label></div></div><div class='col-2 mt-2'><div class='form-group'><button class='btn btn-info btn-lg working' id="+key+"><label class='pencil' id="+key+">✏️</label></button></div></div></div>"); 
      }
    $("#update").hide();
  });
}

$(document).on("click","#add",function()
{
  //convertendo para parse 
   const id = +localStorage.getItem("nextID");
   var dados = {nome:$("#nn").val(),telefone:$("#nt").val(),email:$("#ne").val()};
   localStorage.setItem(id,JSON.stringify(dados));
   localStorage.setItem("nextID",id+1);

   $(".principal").append("<div class='row primeira'><div class='col-2 mt-2 idk'><div class='form-group'><img src='lib/icone_telefone.png' style='width:50px; height:50px;margin-bottom:-50px;'></div></div><div class='col-6 mt-2'><ul><li><label id='nome' >"+$("#nn").val()+"</label></li><li><label id='numero' >"+$("#nt").val()+"</label></li><li><label id='email' >"+$("#ne").val()+"</label></li></ul></div><div class='col-2 mt-2'><div class='form-group'><button class='btn btn-danger btn-lg funcionar'  id="+id+"><label class='xis'  id="+id+">❌</label></button></div></div><div class='col-2 mt-2'><div class='form-group'><button class='btn  btn-info btn-lg working' id="+id+"><label class='pencil' id="+id+">✏️</label></button></div></div></div>"); 

  clear();
  $("#add").prop("disabled",true);
});

function teste() {
    if($("#nn").val() === '' || $("#nt").val() === '' || $("#ne").val() === '')
    {
      $('#add').prop('disabled', true);
    } else {
      $('#add').prop('disabled', false);
    }
}

$(document).on("click",".funcionar",function(){

const id = event.target.id;
localStorage.removeItem(id);

const removed = $("#"+id).parents(".row");
console.log(removed);
removed.remove();
});


const clear = ()=>{
  $("#nn").val("");
  $("#ne").val("");
  $("#nt").val("");
}

$(document).on("click",".working",function(){
  currentID = event.target.id;

  retornoCurrent = JSON.parse(localStorage.getItem(currentID));
  $("#nn").val(retornoCurrent.nome);
  $("#ne").val(retornoCurrent.email);
  $("#nt").val(retornoCurrent.telefone);
  $('#add').hide(500);
  $('#update').show(1000);

});

$(document).on("click","#update",function(){
  retornoCurrent = {nome:$("#nn").val(),telefone:$("#nt").val(),email:$("#ne").val()};
  localStorage.setItem(currentID,JSON.stringify(retornoCurrent));
  loadContacts();
  clear();
  $('#add').show(500);
});


