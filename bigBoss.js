const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };


  function findValueByKey(company, companyName) {
    
    let stack = [company];
  
    
    while (stack.length > 0) {
      
      let currentCompany = stack.pop();
  
      if (currentCompany.name === companyName) {
        return currentCompany;
      }
  
      if (currentCompany.clients && currentCompany.clients.length > 0) {
        for (let i = 0; i < currentCompany.clients.length; i++) {
          stack.push(currentCompany.clients[i]);
        }
      }
  
      if (currentCompany.partners && currentCompany.partners.length > 0) {
        for (let i = 0; i < currentCompany.partners.length; i++) {
          stack.push(currentCompany.partners[i]);
        }
      }
    }
  
    return null;
  }

var result = findValueByKey(company, 'Клієнт 1.2');
console.log(result);