function showToast(fields){
  if (fields == 1){
    $.toast({
      heading: 'Sucesso!',
      text: fields+' campo foi preenchido.',
      showHideTransition: 'slide',
      icon: 'success',
      position: 'bottom-right'
    })
  } else if (fields > 1) {
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
      position: 'bottom-right'
    })
  }
}
