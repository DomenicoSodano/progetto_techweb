const express = require('express')
const app = express()
app.listen(3000)
/*SOLO PER HTML*/ 

/*PAGINA HOME*/
app.get('/', function (req, res) {
    res.sendFile('pagina-home.html',{root: __dirname + "/pagina-home/"})
  })
  app.use('/static', express.static('pagina-home')) /*SOLO CARTELLE*/
  
  /*ACCESSORI*/

  /*Accessori Samsung*/
  app.get('/accessori-samsung', function(req,res){
    res.sendFile('accessori_samsung.html',{root: __dirname + '/Accessori/accessori-samsung/'})
  })
  app.use('/static', express.static('Accessori'))
  
  /*Accessori Apple*/
  app.get('/accessori-apple', function(req,res){
    res.sendFile('accessori_apple.html',{root: __dirname + '/Accessori/accessori-apple/'})
  })
  app.use('/static', express.static('Accessori'))

  /*Accessori Huawei*/
  app.get('/accessori-huawei', function(req,res){
    res.sendFile('accessori_huawei.html',{root: __dirname + '/Accessori/accessori-huawei/'})
  })
  app.use('/static', express.static('Accessori'))

  /*Accessori Xiaomi*/
  app.get('/accessori-xiaomi', function(req,res){
    res.sendFile('accessori_xiaomi.html',{root: __dirname + '/Accessori/accessori-xiaomi/'})
  })
  app.use('/static', express.static('Accessori'))

  /*CARRELLO*/
  app.get('/Carrello', function (req, res) {
    res.sendFile('carrello.html',{root: __dirname + "/Carrello/"})
  })
  app.use('/static', express.static('Carrello'))
   
  /*LOGIN E REGISTRAZIONE*/

  /*Login*/
  app.get('/login', function(req,res){
    res.sendFile('login.html',{root: __dirname + '/Login e Registrazione/login/'})
  })
  app.use('/static', express.static('Login e Registrazione'))

  /*Pagina Dimenticata*/
  app.get('/Pagina_dimenticata', function(req,res){
    res.sendFile('pagina_dimenticata.html',{root: __dirname + '/Login e Registrazione/Pagina_dimenticata/'})
  })
  app.use('/static', express.static('Login e Registrazione'))

  /*Recupero Password*/
  app.get('/recupero_pass', function(req,res){
    res.sendFile('recupero_pass.html',{root: __dirname + '/Login e Registrazione/recupero_pass'})
  })
  app.use('/static', express.static('Login e Registazione'))

  /*Registrazione*/
  app.get('/registrazione', function(req,res){
    res.sendFile('registrazione.html',{root: __dirname + '/Login e Registrazione/registrazione'})
  })
  app.use('/static', express.static('Login e Registrazione'))

  /*PAGAMENTO E FINALIZZAZIONE*/
  app.get('/pagamento', function(req,res){
    res.sendFile('pagamento.html',{root: __dirname + '/Pagamento&Finalizzazione/pagamento'})
  })
  app.use('/static', express.static('Pagamento&Finalizzazione'))

  app.get('/finalizzazione', function(req,res){
    res.sendFile('finalizzazione.html',{root: __dirname + '/Pagamento&Finalizzazione/finalizzazione'})
  })
  app.use('/static', express.static('Pagamento&Finalizzazione'))

  /*PAGINA PRINCIPALE*/
  app.get('/pagina-principale', function(req,res){
   res.sendFile('pagina-principale.html',{root: __dirname + '/pagina-principale/'})
  })
  app.use('/static', express.static('pagina-principale'))

  /*PAGINE PRODOTTI*/

  /*Pagina Apple*/
  app.get('/pagina-apple', function(req,res){
    res.sendFile('pagina_apple.html',{root: __dirname + '/Pagine Prodotti/pagina-apple'})
  })
  app.use('/static', express.static('Pagine Prodotti'))

  /*Pagina Huawei*/
  app.get('/pagina-huawei', function(req,res){
    res.sendFile('pagina_huawei.html',{root: __dirname + '/Pagine Prodotti/pagina-huawei'})
  })
  app.use('/static', express.static('Pagine Prodotti'))

  /*Pagina Samsung*/
  app.get('/pagina-samsung', function(req,res){
    res.sendFile('pagina_samsung.html',{root: __dirname + '/Pagine Prodotti/pagina-samsung'})
  })
  app.use('/static', express.static('Pagine Prodotti'))

  /*Pagina Xiamoi*/
  app.get('/pagina-xiaomi', function(req,res){
    res.sendFile('pagina_xiaomi.html',{root: __dirname + '/Pagine Prodotti/pagina-xiaomi'})
  })
  app.use('/static', express.static('Pagine Prodotti'))

  /*RESI E SPEDIZIONI*/
  app.get('/resi&spedizioni', function(req,res){
    res.sendFile('resi_spedizioni.html',{root: __dirname + '/resi&spedizioni'})
  })
  app.use('/static', express.static('resi&spedizioni'))

  /*TELEFONI INFO*/ /*HUAWEI*/
  app.get('/huawei_9', function(req,res){
    res.sendFile('huaweinova_9.html',{root: __dirname + '/telefoni_info/huawei/'})
  })
  app.use('/static', express.static('telefoni_info'))
  
  app.get('/huawei_Y70', function(req,res){
    res.sendFile('huaweinova_Y70.html',{root: __dirname + '/telefoni_info/huawei/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/huawei_Nova8', function(req,res){
    res.sendFile('huaweiNova8i.html',{root: __dirname + '/telefoni_info/huawei/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/huawei_50pro', function(req,res){
    res.sendFile('huaweip_50pro.html',{root: __dirname + '/telefoni_info/huawei/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/huawei_p20lite', function(req,res){
    res.sendFile('huaweip20_lite.html',{root: __dirname + '/telefoni_info/huawei/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/huawei_p30', function(req,res){
    res.sendFile('huaweip30.html',{root: __dirname + '/telefoni_info/huawei/'})
  })
  app.use('/static', express.static('telefoni_info'))

  /*TELEFONI INFO*/ /*IPHONE*/
  app.get('/iphone_13', function(req,res){
    res.sendFile('iphone_13.html',{root: __dirname + '/telefoni_info/iphone/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/iphone_14pro', function(req,res){
    res.sendFile('iphone_14_proviola.html',{root: __dirname + '/telefoni_info/iphone/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/iphone8', function(req,res){
    res.sendFile('iphone8.html',{root: __dirname + '/telefoni_info/iphone/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/iphone11', function(req,res){
    res.sendFile('iphone11.html',{root: __dirname + '/telefoni_info/iphone/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/iphone12', function(req,res){
    res.sendFile('iphone12.html',{root: __dirname + '/telefoni_info/iphone/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/iphone_13mini', function(req,res){
    res.sendFile('iphone13_mini.html',{root: __dirname + '/telefoni_info/iphone/'})
  })
  app.get('/iphone13promax_verde', function(req,res){
    res.sendFile('iphone13promax_verde.html',{root: __dirname + '/telefoni_info/iphone/'})
  })
  app.use('/static', express.static('telefoni_info'))

  /*TELEFONI INFO*/ /*SAMSUNG*/
  app.get('/samsung_10lite', function(req,res){
    res.sendFile('samsung_galaxy_10lite.html',{root: __dirname + '/telefoni_info/samsung/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/samsung_A23', function(req,res){
    res.sendFile('samsung_galaxy_A23.html',{root: __dirname + '/telefoni_info/samsung/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/samsung_A53', function(req,res){
    res.sendFile('samsung_galaxy_A53.html',{root: __dirname + '/telefoni_info/samsung/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/samsung_M13', function(req,res){
    res.sendFile('samsung_galaxy_M13.html',{root: __dirname + '/telefoni_info/samsung/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/samsung_S22', function(req,res){
    res.sendFile('samsung_galaxyA22.html',{root: __dirname + '/telefoni_info/samsung/'})
  })
  app.use('/static', express.static('telefoni_info'))

  /*TELEFONI INFO*/ /*XIAOMI*/
  app.get('/xiaomi_9C', function(req,res){
    res.sendFile('xiaomi 9C.html',{root: __dirname + '/telefoni_info/xiaomi/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/xiaomi_mi10', function(req,res){
    res.sendFile('xiaomi_mi10T.html',{root: __dirname + '/telefoni_info/xiaomi/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/xiaomi_note11', function(req,res){
    res.sendFile('xiaomi_note_11.html',{root: __dirname + '/telefoni_info/xiaomi/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/xiaomi_10', function(req,res){
    res.sendFile('xiaomi10.html',{root: __dirname + '/telefoni_info/xiaomi/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/xiaomi_11T', function(req,res){
    res.sendFile('xiaomi11T.html',{root: __dirname + '/telefoni_info/xiaomi/'})
  })
  app.use('/static', express.static('telefoni_info'))

  app.get('/xiaomi_12pro', function(req,res){
    res.sendFile('xiaomi12pro.html',{root: __dirname + '/telefoni_info/xiaomi/'})
  })
  app.use('/static', express.static('telefoni_info'))

  /*ACCESSORI INFO*/ /*IPHONE*/
  app.get('/airpods_terza', function(req,res){
    res.sendFile('apple_airpods_terza.html',{root: __dirname + '/Accessori_info/iphone/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/apple_airtag', function(req,res){
    res.sendFile('apple_airtag.html',{root: __dirname + '/Accessori_info/iphone/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/apple_cavo1M', function(req,res){
    res.sendFile('apple_cavo1Mt.html',{root: __dirname + '/Accessori_info/iphone/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/apple_battery', function(req,res){
    res.sendFile('apple_magsafe_battery.html',{root: __dirname + '/Accessori_info/iphone/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/apple_cover12', function(req,res){
    res.sendFile('apple_pelle_iphone12.html',{root: __dirname + '/Accessori_info/iphone/'})
  })
  app.use('/static', express.static('Accessori_info'))

  /*ACCESSORI INFO*/ /*HUAWEI*/
  app.get('/huawei_cassa', function(req,res){
    res.sendFile('huawei_cassa.html',{root: __dirname + '/Accessori_info/huawei/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/huawei_coverp40', function(req,res){
    res.sendFile('huawei_coverp40.html',{root: __dirname + '/Accessori_info/huawei/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/huawei_freebuds', function(req,res){
    res.sendFile('huawei_freebuds.html',{root: __dirname + '/Accessori_info/huawei/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/huawei_m-pen', function(req,res){
    res.sendFile('huawei_m-pen.html',{root: __dirname + '/Accessori_info/huawei/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('//huawei_testina', function(req,res){
    res.sendFile('huawei_testina.html',{root: __dirname + '/Accessori_info/huawei/'})
  })
  app.use('/static', express.static('Accessori_info'))

  /*ACCESSORI INFO*/ /*SAMSUNG*/
  app.get('/samsung_budspro2', function(req,res){
    res.sendFile('samsung_budspro2.html',{root: __dirname + '/Accessori_info/samsung/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/samsung_covers21', function(req,res){
    res.sendFile('samsung_cover_s21.html',{root: __dirname + '/Accessori_info/samsung/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/samsung_coverS22', function(req,res){
    res.sendFile('samsung_cover_S22.html',{root: __dirname + '/Accessori_info/samsung/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/samsung_coverzfold4', function(req,res){
    res.sendFile('samsung_cover_zfold4.html',{root: __dirname + '/Accessori_info/samsung/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/samsung_testina', function(req,res){
    res.sendFile('samsung_testina.html',{root: __dirname + '/Accessori_info/samsung/'})
  })
  app.use('/static', express.static('Accessori_info'))

  /*ACCESSORI INFO*/ /*XIAOMI*/
  app.get('/xiaomi_buds4', function(req,res){
    res.sendFile('xiaomi_buds4.html',{root: __dirname + '/Accessori_info/xiaomi/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/xiaomi_cover10', function(req,res){
    res.sendFile('xiaomi_cover_10.html',{root: __dirname + '/Accessori_info/xiaomi/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/xiaomi_cover12Tpro', function(req,res){
    res.sendFile('xiaomi_cover_12Tpro.html',{root: __dirname + '/Accessori_info/xiaomi/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/xiaomi_covernote11', function(req,res){
    res.sendFile('xiaomi_cover_note11.html',{root: __dirname + '/Accessori_info/xiaomi/'})
  })
  app.use('/static', express.static('Accessori_info'))

  app.get('/xiaomi_powerbank', function(req,res){
    res.sendFile('xiaomi_powerbank.html',{root: __dirname + '/Accessori_info/xiaomi/'})
  })
  app.use('/static', express.static('Accessori_info'))