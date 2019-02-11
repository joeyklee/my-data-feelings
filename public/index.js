let views;
let app;
// NOTE: client will be a variable that interfaces with feathers backend

function setup(){
    // no canvas needed
    noCanvas();
    // noLoop since we dont need the draw loop;
    noLoop();

    views = new Views();
    app = new App(views);
}

function draw(){    
    // Add main here
    app.showViz()
}


class App {
    // NOTE: Requires p5.js dom library (e.g. see select())
    constructor(_views){
        this.views = _views;
    }

    async showViz(){
         select('#app').elt.innerHTML = this.views.visHTML;
         
         let dataFeelings = await client.service('feelings').find({
            query: {
              $sort: { createdAt: -1 },
              $limit: false,
      
            }
          });
    }

    async showAdmin(){
        select('#app').elt.innerHTML = this.views.adminHTML;
    }

    async showLogin(){
        select('#app').innerHTML = views.loginHTML;
    }





}
