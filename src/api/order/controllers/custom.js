 const { createCoreController } = require('@strapi/strapi').factories;

     module.exports = createCoreController('api::order.order', ({ strapi }) =>  ({

     async pre(ctx) {
  
     ctx.body = process.env.HULARA;
 
      },

      async post(ctx){

      ctx.body = "i m not okey" ;

      }
      
      }));