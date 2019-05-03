chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === 'clicked_browser_action' ) {

      let filled_fields = 0;

      $("input[name*='email']").each(function(){
        $(this).val(chance.email());
        filled_fields += 1;
      });

      $("input[name*='name']").each(function(){
        $(this).val(chance.name());
        filled_fields += 1;
      });

      $("input[name*='phone']").each(function(){
        $(this).val(chance.phone({ formatted: false }));
        filled_fields += 1;
      });

      $("input[name*='date'], input[name*='birthday']").each(function(){
        $(this).val(chance.date({string: true, american: false}));
        filled_fields += 1;
      });

      $("input[name*='cpf']").each(function(){
        $(this).val(chance.cpf());
        filled_fields += 1;
      });

      $("input[name*='cnpj']").each(function(){
        $(this).val(generateCNPJ());
        filled_fields += 1;
      });

      $("input[name*='cep'], input[name*='zip_code']").each(function(){
        $(this).val(generateCEP());
        filled_fields += 1;
      });

      showToast(filled_fields);
    }
  }
);

function generateCNPJ() {
  let n = 9;
  let n1  = Math.round(Math.random()*n);
  let n2  = Math.round(Math.random()*n);
  let n3  = Math.round(Math.random()*n);
  let n4  = Math.round(Math.random()*n);
  let n5  = Math.round(Math.random()*n);
  let n6  = Math.round(Math.random()*n);
  let n7  = Math.round(Math.random()*n);
  let n8  = Math.round(Math.random()*n);
  let n9  = 0;
  let n10 = 0;
  let n11 = 0;
  let n12 = 1;
  let d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
  d1 = 11 - ( Math.round(d1 - (Math.floor(d1/11)*11)) );
  if (d1>=10) d1 = 0;
  let d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
  d2 = 11 - ( Math.round(d2 - (Math.floor(d2/11)*11)) );
  if (d2>=10) d2 = 0;

  return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
}

function generateCEP(){
  let cep_starting = Math.floor(10000 + Math.random() * 90000);
  let cept_ending  = Math.floor(100 + Math.random() * 900);
  let cep = cep_starting + "-" + cept_ending

  return cep;
}

function showToast(fields){
  if (fields > 0){
    $.toast({
      heading: 'Sucesso!',
      text: fields+' campos foram preenchidos.',
      showHideTransition: 'slide',
      icon: 'success',
      position: 'bottom-right'
    })
  } else {
    $.toast({
      heading: 'Ops!',
      text: 'Nenhum campo foi preenchido.',
      showHideTransition: 'slide',
      icon: 'info',
      position: 'bottom-left'
    })
  }
}
