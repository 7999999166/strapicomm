module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/orders/pretransaction',
        handler: 'custom.pre', 
      },
      {
        method: 'POST',
        path: '/orders/posttransaction',
        handler: 'custom.post', 
      },
    ],
  };