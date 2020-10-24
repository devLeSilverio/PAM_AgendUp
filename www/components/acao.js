
 var contador = 1;
$(document).on("click","#add",function()
{
   var dados = {nome:$("#nn").val(),telefone:$("#nt").val(),email:$("#ne").val()};
   var nome= $("#nn").val();
  localStorage.setItem(contador,JSON.stringify(dados));
  contador++;

var json= {cont:contador-1};
var  teste= json.cont;
console.log(teste);

   $(".principal").append("<div class='row'><div class='col-2 mt-2'><div class='form-group'><img src='lib/icone_telefone.png' id='iconTelefone' style='width:50px; height:50px;'></div></div><div class='col-6 mt-2'><label id='nome' >"+$("#nn").val()+"</label><label id='numero' >"+$("#nt").val()+"</label><label id='email' >"+$("#ne").val()+"</label></div><div class='col-2 mt-2'><div class='form-group'><button class="+teste+" class='btn btn-danger btn-lg' id='delete'><img src='lib/icon_delete.png' id='imgEdit' width='20px' height='20px'/></button></div></div><div class='col-2 mt-2'><div class='form-group'><button class='btn  btn-info btn-lg' id='edit'><img src='lib/icon_edit.png' id='imgEdit' width='20px' height='20px'/></button></div></div></div>"); 

clear();
});

testando = 1;

$(document).on("click","."+testando,function(){
 
 testando++;
});



const clear = ()=>{
  $("#nn").val("");
  $("#ne").val("");
  $("#nt").val("");
}

function idk(){
    var retorno = JSON.parse(localStorage.getItem(contador));
  $("#nn").val(retorno.nome);
  $("#ne").val(retorno.email);
  $("#nt").val(retorno.telefone);
}


