function generateCNPJ(){
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

  let cnpj = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;

  return cnpj;
}

function generateRG(){
  let start = Math.floor(10 + Math.random() * 90);
  let half  = Math.floor(100 + Math.random() * 900);
  let end   = Math.floor(100 + Math.random() * 900);
  let digit = Math.floor(Math.random() * 10);
  let rg    = start + '.' + half + '.' +  end + '-' +  digit;

  return rg;
}

function generateCEP(){
  ceps = [
    '77460-970', '12440-670', '89219-240', '58300-530', '38180-042',
    '69310-060', '52080-320', '26574-770', '76877-075', '58039-072',
    '88058-058', '79033-000', '58801-203', '89095-370', '82940-350',
    '78731-236', '23031-340', '76964-380', '49980-970', '29175-205',
    '72510-415', '29150-095', '76960-154', '79106-030', '52190-430',
    '05734-020', '58415-068', '64057-027', '35900-841', '73752-132',
    '69316-518', '69067-041', '88132-040', '79906-538', '06120-130',
    '56332-006', '14807-215', '92440-418', '78070-210', '69921-503',
    '64018-973', '69099-585', '38706-272', '69906-130', '64027-674',
    '69093-073', '57313-705', '45603-127', '58428-770', '76876-558'
  ]

  let cep = ceps[Math.floor(Math.random() * ceps.length)];

  return cep;
}

function generatePhoneNumber(){
  let ddd   = Math.floor(10 + Math.random() * 90);
  let start = Math.floor(10000 + Math.random() * 90000);
  let end   = Math.floor(1000 + Math.random() * 9000);
  let phone = '(' + ddd + ') ' + start + '-' + end;

  return phone;
}

function generateDate(){
  let start       = new Date(1950, 1, 1);
  let end         = new Date(2000, 1, 1);
  let random_date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  let month = ('0' + (random_date.getMonth() + 1)).slice(-2);
  let day   = ('0' + random_date.getDate()).slice(-2);
  let year  = random_date.getFullYear();

  let date = day + '/' + month + '/' +  year;

  return date;
}
