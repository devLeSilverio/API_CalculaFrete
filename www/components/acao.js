
$(document).on("click","#buscar",function(){
  $.ajax({
    type:"get",
    dataType:"json",
    url:"https://api.postmon.com.br/v1/cep/" + $("#cep").val(),
    
    success:function(data){
          var conteudo1,conteudo2;
          conteudo1 = data.cidade;
          conteudo2 = data.estado;

          if(conteudo2 == "SP"){
            $("#dados").html("Você mora em "+ conteudo2+ " na cidade de " + conteudo1 +
             "<br> Seu frete será de R$0,00"); 
             $("#fiCompra").fadeIn('slow');
          }else{
            $("#dados").html("Você mora em "+ conteudo2+ " na cidade de " + conteudo1 +
            "<br> Seu frete será de R$15,00"); 
            $("#fiCompra").fadeIn('slow');
          }

    },
    error: function(){
      alert("Error");
    }
  })
});


$(document).on("click","#fiCompra",function(){
  alert("Obrigado!Volte Sempre");
});