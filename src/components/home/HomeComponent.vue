<template>
    <main>
        <div class="tabs">
            <input class="radiotab" name="tabs" tabindex="1" type="radio" id="tabone" checked="checked">
            <label class="label" for="tabone">{{modenaEur.code}}</label>
            <div class="panel" tabindex="1">
                <p><img src="../../assets/img/euro.png" width="150" height="150" :alt="modenaEur.description" :title="modenaEur.description"></p>
                <p>Valor: {{modenaEur.rate}}</p>
            </div>
            <input class="radiotab" tabindex="1" name="tabs" type="radio" id="tabtwo">
            <label class="label" for="tabtwo">{{modenaUsd.code}}</label>
            <div class="panel" tabindex="1">
                <p><img src="../../assets/img/dollar.png" width="150" height="150" :alt="modenaUsd.description" :title="modenaUsd.description"></p>
                <p>Valor: {{modenaUsd.rate}}</p>
            </div>
            <input class="radiotab" tabindex="1" name="tabs" type="radio" id="tabthree">
            <label class="label" for="tabthree" >{{modenaGbp.code}}</label>
            <div class="panel" tabindex="1">
                <p><img src="../../assets/img/libra.png" width="150" height="150" :alt="modenaGbp.description" :title="modenaGbp.description"></p>
                <p>Valor: {{modenaGbp.rate}}</p>
            </div>
        </div>
    </main>
</template>
  
  <script>
  // Peticiones Http
  import axios from 'axios';
  
  export default {
      name: 'HomeComponent',
      mounted(){
          // Llamamos al metodo Euro
          this.getEurCurerency();
          // Llamamos al metodo Dolares
          this.getUsdCurerency();
          // Llamamos al metodo Libras
          this.getGbpCurerency();
      },
      data(){
          return {
              apiEur: 'https://api.coindesk.com/v1/bpi/currentprice/EUR.json',
              apiUsd: 'https://api.coindesk.com/v1/bpi/currentprice/USD.json',
              apiGbp: 'https://api.coindesk.com/v1/bpi/currentprice/GBP.json',
              modenaEur: [],
              modenaUsd: [],
              modenaGbp: [],
              tab: null
          }
      },  
      methods: {
          getEurCurerency(){
              axios.get(this.apiEur)
                  .then( res => {
                      if(res.data){
                      this.modenaEur = res.data['bpi'].EUR;
                  }
              });
          },
          getUsdCurerency(){
              axios.get(this.apiUsd)
                  .then( res => {
                      if(res.data){
                      this.modenaUsd = res.data['bpi'].USD;
                  }
              });
          },
          getGbpCurerency(){
              axios.get(this.apiGbp)
                  .then( res => {
                      if(res.data){
                      this.modenaGbp = res.data['bpi'].GBP;
                  }
              });
          },                       
      }        
  }
  </script>

<style>

*:focus, input:focus + label {
  outline: none;
  box-shadow: inset 0 0 0 5px lightBlue;
}

main {
  max-width: 60rem;
  margin: auto;
  padding: 5rem;
}

h1 {
  text-align: center;
  margin-top: 0;
}

h2 {
  margin: 0 0 12px;
  font-size: 30px;
}

p {
  margin: 0 0 20px;
  font-size: 20px;
  line-height: 1.5;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 20px;
  border-radius: 10px 10px 0 0;
}

.radiotab {
  position: absolute;
  opacity: 0;
}

.label {
  width: 100%;
  padding: 22px 20px;
  background: #e5e5e5;
  cursor: pointer;
  font-weight: bold;
  font-size: 23px;
  color: #7f7f7f;
  transition: background .3s, color .3s;
  border: none;
  border-radius: 0;
  text-align: center;
}

.label:hover {
  background: #d8d8d8;
}

.label:active {
  background: #ccc;  
}

.radiotab:checked + .label {
  background: #fff;
  color: #000;
  border-top: solid 2px #000;
  border-left: solid 2px #000;
  border-right: solid 2px #000;
  border-bottom: none;
}

.panel {
  display: none;
  padding: 20px 30px 30px;
  background: #fff;
  width: 100%;
  border-left: solid 2px #000;
  border-bottom: solid 2px #000;
  border-right: solid 2px #000;
}

.radiotab:checked + .label + .panel {
  display: block;
  text-align: center;
}

@media (min-width: 600px) {
  .panel {
    order: 99;
  }

  .label {
    width: 33.33%;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 2px #000;
  }

}
</style>