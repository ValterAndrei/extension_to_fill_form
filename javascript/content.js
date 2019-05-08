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
        $(this).val(generatePhoneNumber());
        filled_fields += 1;
      });

      $("input[name*='date'], input[name*='birthday']").each(function(){
        $(this).val(generateDate());
        filled_fields += 1;
      });

      $("input[name*='cpf']").each(function(){
        $(this).val(chance.cpf());
        filled_fields += 1;
      });

      $("input[name*='rg']").each(function(){
        $(this).val(generateRG());
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
