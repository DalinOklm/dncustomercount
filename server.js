const express = require('express')
const mongoose = require('mongoose')
const moment = require('moment')
const bcrypt = require('bcryptjs')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const DB_user = require("./Model/user_count")
const users_byHours = require("./Model/users_byHour")
const LoginCheck_DB = require("./Model/loginCheck")
const Out_customer = require("./Model/out_customer")
const Auth_ = require("./Middleware/Auth")



 


var moment_object = moment()

//**************

const cookieParser = require('cookie-parser')
 
//app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//************** 

// view engine that allow us to mix HTM and Javascrip
app.set('view engine', 'ejs')

// allow us to access form fields 
//from the request in the router
app.use(express.urlencoded({ extended: false }))

// register the router
// app.use(App_router)


const port = process.env.PORT || 9000

server.listen(process.env.PORT || port, function(){
    console.log('listen to port '+ port);
});


app.get('/dashboard', Auth_ , async (req, res) =>{

    

    var am_8 =0;
    var am_9 =0;
    var am_10 =0;
    var am_11 =0;
    var pm_12 =0; 

    var pm_1 =0;
    var pm_2 =0;
    var pm_3 =0;
    var pm_4 =0; 
    var pm_5 =0;
    var pm_6 =0;
    var pm_7 =0; 
    var pm_8 =0;
    var pm_9 =0;

    var get_user_count = await DB_user.find({})
    var out_user_Db = await Out_customer.find({})
    var out_total_accum = 0

    out_user_Db.forEach(element => {
    if (moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {
        out_total_accum +=1
        }
    });

  

    get_user_count.forEach(element => {
        
        if (moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {

            for (let index = 0; index < 60; index++) {

               
                if (moment(element.updatedAt).format('LT') == "10:0"+index+" PM" ||
                moment(element.updatedAt).format('LT') == "10:"+index+" PM") {
                
          // console.log("77 10pm element._id: "+element._id) 

            }
                
                if (moment(element.updatedAt).format('LT') == "11:0"+index+" PM" ||
                moment(element.updatedAt).format('LT') == "11:"+index+" PM") {
                
           console.log("84 11pm element._id: "+element._id) 

            }

                if (moment(element.updatedAt).format('LT') == "12:0"+index+" PM" ||
                moment(element.updatedAt).format('LT') == "12:"+index+" PM") {
                
          // console.log("91 12pm element._id: "+element._id) 

            }


                if (moment(element.updatedAt).format('LT') == "1:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "1:"+index+" AM") {
                
           console.log("99 1am element._id: "+element._id) 

            }

                if (moment(element.updatedAt).format('LT') == "2:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "2:"+index+" AM") {
                
           console.log("106 2am element._id: "+element._id) 

            }

                if (moment(element.updatedAt).format('LT') == "3:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "3:"+index+" AM") {
                
           console.log("113 3am element._id: "+element._id) 

            }

                if (moment(element.updatedAt).format('LT') == "4:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "4:"+index+" AM") {
                
           console.log("120 4am element._id: "+element._id) 

            }

                if (moment(element.updatedAt).format('LT') == "5:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "5:"+index+" AM") {
                
           console.log("127 5am element._id: "+element._id) 

            }

                if (moment(element.updatedAt).format('LT') == "6:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "6:"+index+" AM") {
                
           console.log("134 6am element._id: "+element._id) 

            }

                if (moment(element.updatedAt).format('LT') == "7:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "7:"+index+" AM") {
                
           console.log("141 7am element._id: "+element._id) 
            }
             
                if (moment(element.updatedAt).format('LT') == "8:0"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "8:"+index+" AM") {
                    
                am_8 +=1
                }
    
    
                if (moment(element.updatedAt).format('LT') == "9:0"+index+" AM" || 
                moment(element.updatedAt).format('LT') == "9:"+index+" AM") {
            am_9 +=1
            }
    
            if (moment(element.updatedAt).format('LT') == "10:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "10:"+index+" AM") {
                
            am_10 +=1
            }
            
            if (moment(element.updatedAt).format('LT') == "11:0"+index+" AM" || 
            moment(element.updatedAt).format('LT') == "11:"+index+" AM") {
        am_11+=1
        }
    
                if (moment(element.updatedAt).format('LT') == "12:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "12:"+index+" PM") {
                    
                pm_12 +=1
                }
    
                    if (moment(element.updatedAt).format('LT') == "1:0"+index+" PM" || 
                    moment(element.updatedAt).format('LT') == "1:"+index+" PM") {
                pm_1 +=1
                }
    
                if (moment(element.updatedAt).format('LT') == "2:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "2:"+index+" PM") {
                    
                pm_2 +=1
                }
    
                if (moment(element.updatedAt).format('LT') == "3:0"+index+" PM" || 
                moment(element.updatedAt).format('LT') == "3:"+index+" PM") {
                    pm_3 +=1
                    }
    
                if (moment(element.updatedAt).format('LT') == "4:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "4:"+index+" PM") {
                    
                pm_4 +=1
                }
    
    
                if (moment(element.updatedAt).format('LT') == "5:0"+index+" PM" ||
                moment(element.updatedAt).format('LT') == "5:"+index+" PM") {
                
            pm_5 +=1
            }
        
                if (moment(element.updatedAt).format('LT') == "6:0"+index+" PM" || 
                moment(element.updatedAt).format('LT') == "6:"+index+" PM") {
            pm_6 +=1
            }


        if (moment(element.updatedAt).format('LT') == "7:0"+index+" PM" || 
        moment(element.updatedAt).format('LT') == "7:"+index+" PM") {
            pm_7 +=1
            }

        if (moment(element.updatedAt).format('LT') == "8:0"+index+" PM" ||
            moment(element.updatedAt).format('LT') == "8:"+index+" PM") {
            
        pm_8 +=1
        }


        if (moment(element.updatedAt).format('LT') == "9:0"+index+" PM" || 
        moment(element.updatedAt).format('LT') == "9:"+index+" PM") {
        pm_9 +=1
    }

               } 

           }

        
       

       });

       var total_customer_ejs = am_8+am_9+am_10+am_11+
       pm_12+pm_1+pm_2+pm_3+pm_4+pm_5+pm_6+pm_7+pm_8+pm_9
    
    console.log("total_customer: "+total_customer_ejs)


    var thurday = 0
    var wednesday = 0
    var tuesday = 0
    var monday = 0
    var sunday = 0
    var saturday = 0
    var friday = 0
           
       for (let index = 0; index < get_user_count.length; index++) {

    if ( moment(moment_object).subtract(1, 'days').format('l') == moment(get_user_count[index].updatedAt).format('l') ) {
        thurday += 1
    }

    if ( moment(moment_object).subtract(2, 'days').format('l') == moment(get_user_count[index].updatedAt).format('l') ) {
        wednesday += 1
    }

    if ( moment(moment_object).subtract(3, 'days').format('l') == moment(get_user_count[index].updatedAt).format('l') ) {
        tuesday += 1
    }

    if ( moment(moment_object).subtract(4, 'days').format('l') == moment(get_user_count[index].updatedAt).format('l') ) {
        monday += 1
    }

    if ( moment(moment_object).subtract(5, 'days').format('l') == moment(get_user_count[index].updatedAt).format('l') ) {
        sunday += 1
    }

    if ( moment(moment_object).subtract(6, 'days').format('l') == moment(get_user_count[index].updatedAt).format('l') ) {
        saturday += 1
    }

    if ( moment(moment_object).format('l') == moment(get_user_count[index].updatedAt).format('l') ) {
        friday += 1
    }
     
     
           
       }

     //   console.log("thurday: "+ thurday)
     //   console.log("wednesday: "+ wednesday)
     //   console.log("thurday: "+ tuesday)
     //   console.log("monday: "+ monday)
     //   console.log("sunday: "+ sunday)
     //   console.log("saturday: "+ saturday)
     //   console.log("friday: "+ friday)

       // moment().format('dddd') day
       // moment(moment_object).format('l')
       io.sockets.emit('customer_by_day', {start_date: moment(moment_object).format('dddd MMM Do'),
        end_date: moment(moment_object).subtract(6, 'days').format('dddd MMM Do') ,
       monday: monday, tuesday: tuesday,  wednesday: wednesday, thurday: thurday, friday: friday, 
          saturday: saturday, sunday: sunday})
    

    res.render('dashboard', {total: total_customer_ejs,
                             out_user_total: out_total_accum,
                              am_8_server: am_8,
                             am_9_server: am_9 ,
                             am_10_server: am_10 ,
                             am_11_server: am_11 ,
                             pm_12_server: pm_12 ,
                             pm_1_server: pm_1 ,
                            pm_2_server: pm_2 ,
                            pm_3_server: pm_3 ,
                            pm_4_server: pm_4 ,
                            pm_5_server: pm_5 ,
                        
                            pm_6_server: pm_6 ,
                            pm_7_server: pm_7 ,
                            pm_8_server: pm_8 ,
                            pm_9_server: pm_9 ,
                            start_date_server: moment(moment_object).format('dddd MMM Do'),
                            end_date_server: moment(moment_object).subtract(6, 'days').format('dddd MMM Do') ,
                           monday_server: monday, 
                           tuesday_server: tuesday,  
                           wednesday_server: wednesday, 
                           thurday_server: thurday, 
                           friday_server: friday, 
                           saturday_server: saturday,
                           sunday_server: sunday,
                         day_1_ago_label: moment(moment_object).subtract(1, 'days').format('dddd'),
                         day_2_ago_label: moment(moment_object).subtract(2, 'days').format('dddd'),
                         day_3_ago_label: moment(moment_object).subtract(3, 'days').format('dddd'),
                         day_4_ago_label: moment(moment_object).subtract(4, 'days').format('dddd'),
                         day_5_ago_label: moment(moment_object).subtract(5, 'days').format('dddd'),
                         day_6_ago_label: moment(moment_object).subtract(6, 'days').format('dddd'),
                         day_7_ago_label: moment(moment_object).format('dddd') })

})

app.get('/assistant', Auth_ , async (req, res) =>{

    var am_8 =0;
    var am_9 =0;
    var am_10 =0;
    var am_11 =0;
    var pm_12 =0; 

    var pm_1 =0;
    var pm_2 =0;
    var pm_3 =0;
    var pm_4 =0; 
    var pm_5 =0;
    var pm_6 =0;
    var pm_7 =0; 
    var pm_8 =0;
    var pm_9 =0;

    var get_user_count = await DB_user.find({})

    var out_user_Db = await Out_customer.find({})
    var out_total_accum = 0

    out_user_Db.forEach(element => {
    if (moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {
        out_total_accum +=1
        }
    });

  

  

    get_user_count.forEach(element => {
        
        if (moment(moment_object).format('L') == moment(element.updatedAt).format('L') /*&&*/ ) {
            //console.log("70 time: "+moment(element.updatedAt).format('LT'))

            for (let index = 0; index < 60; index++) {

             
                if (moment(element.updatedAt).format('LT') == "8:0"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "8:"+index+" AM") {
                    
                am_8 +=1
                }
    
    
                if (moment(element.updatedAt).format('LT') == "9:0"+index+" AM" || 
                moment(element.updatedAt).format('LT') == "9:"+index+" AM") {
            am_9 +=1
            }
    
            if (moment(element.updatedAt).format('LT') == "10:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "10:"+index+" AM") {
                
            am_10 +=1
            }
            
            if (moment(element.updatedAt).format('LT') == "11:0"+index+" AM" || 
            moment(element.updatedAt).format('LT') == "11:"+index+" AM") {
        am_11+=1
        }
    
                if (moment(element.updatedAt).format('LT') == "12:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "12:"+index+" PM") {
                    
                pm_12 +=1
                }
    
                    if (moment(element.updatedAt).format('LT') == "1:0"+index+" PM" || 
                    moment(element.updatedAt).format('LT') == "1:"+index+" PM") {
                pm_1 +=1
                }
    
                if (moment(element.updatedAt).format('LT') == "2:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "2:"+index+" PM") {
                    
                pm_2 +=1
                }
    
                if (moment(element.updatedAt).format('LT') == "3:0"+index+" PM" || 
                moment(element.updatedAt).format('LT') == "3:"+index+" PM") {
                    pm_3 +=1
                    }
    
                if (moment(element.updatedAt).format('LT') == "4:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "4:"+index+" PM") {
                    
                pm_4 +=1
                }
    
    
                if (moment(element.updatedAt).format('LT') == "5:0"+index+" PM" ||
                moment(element.updatedAt).format('LT') == "5:"+index+" PM") {
                
            pm_5 +=1
            }
        
                if (moment(element.updatedAt).format('LT') == "6:0"+index+" PM" || 
                moment(element.updatedAt).format('LT') == "6:"+index+" PM") {
            pm_6 +=1
            }


        if (moment(element.updatedAt).format('LT') == "7:0"+index+" PM" || 
        moment(element.updatedAt).format('LT') == "7:"+index+" PM") {
            pm_7 +=1
            }

        if (moment(element.updatedAt).format('LT') == "8:0"+index+" PM" ||
            moment(element.updatedAt).format('LT') == "8:"+index+" PM") {
            
        pm_8 +=1
        }


        if (moment(element.updatedAt).format('LT') == "9:0"+index+" PM" || 
        moment(element.updatedAt).format('LT') == "9:"+index+" PM") {
        pm_9 +=1
    }

               } 

            }

            })

            var total_customer_ejs_assit = am_8+am_9+am_10+am_11+
            pm_12+pm_1+pm_2+pm_3+pm_4+pm_5+pm_6+pm_7+pm_8+pm_9

          


          //  console.log("388 total_customer_ejs_assit: "+total_customer_ejs_assit)

    res.render('assistant',{total_today: total_customer_ejs_assit, 
                            out_user: out_total_accum })
})


app.get('/', async (req, res) =>{

    res.render('admin_login', {state: "none"})
})

        app.post('/data', async (req, res) => {

            try {
        //await console.log("req.body: "+req.body)
        await console.log("req.body.email: "+req.body.email)
        await console.log("req.body.password: "+req.body.password)

        const user = await LoginCheck_DB.findBy_Identity(req.body.email, req.body.password)
       // await LoginCheck_DB.findBy_Identity(req.body.email, req.body.password)

      
        const token = await user.generateToken()
        console.log("503 token: "+token)
        res.cookie('auth_token', token)
        res.redirect("/dashboard")
       // res.render("dashboard")
            } catch (e) {
               // res.status(400).send()
               res.render('admin_login', {state: "block"})
            }

        })

 app.post('/logout', Auth_, async (req, res) => {
            try {
                //'auth file' return with the 'user document'
                // using the filter method identify 
                // the token of that user and remove that token
                console.log("req.user.tokens.length: "+req.user.tokens.length)
                req.user.tokens = req.user.tokens.filter((token) => {
                    return token.token !== req.token
                })
                await req.user.save()
                console.log("req.user.tokens.length: "+req.user.tokens.length)
                res.redirect("/")
            } catch (e) {
                res.status(500).send()
            }
          
        })



io.sockets.on('connection', async function(socket) {

   
    socket.on("assistant", async function(data) {

        io.sockets.emit('new_customer', {new_customer: data.num, shower: "block"})
      
        console.log("data.num: "+data.num)

        for (let index = 0; index < data.num ; index++) {

            var user_obj = await DB_user({
                each_user: data.num
            })
            await user_obj.save()

            var total_out_user = 0;
            var user_obj  = await DB_user.find({})
            user_obj.forEach(element => {
                if(moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {
                             total_out_user += 1
                            }
                        })
             // after add button click, update customers count
             io.sockets.emit('updated_count', total_out_user)
           
        }

       

       
    })

   

    socket.on("customer_out", async function(data) {

       

        for (let index = 0; index < data.num ; index++) {

            var out_user_obj  = await Out_customer.find({})
            var total_out_user = 0;

            out_user_obj.forEach(element => {
                if(moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {
                             total_out_user += 1
                            }
                        })

                          // after add button click, update customers count
             io.sockets.emit('out_user_updated', total_out_user)
            

            var out_user_obj = await Out_customer({
                each_out_user: data.num
            })

            await out_user_obj.save()

            
           
        }

       
    })

    socket.on("account_id_validation_check", function(data){
       var check_thisDoc = DB_user.findById({ _id: data })

      var time_ego = moment(check_thisDoc.updatedAt).format('LT')
      //.startOf('second').fromNow(moment_object)

      console.log(check_thisDoc+" login "+time_ego)
    })

 
    socket.on("add_this_user", async function(data) {

        

      //  for (let index = 0; index < data.num ; index++) {

    //         var user_count_obj = await DB_user.find({})

    //         var total_customer_today_emit = 0;
    
    //         user_count_obj.forEach(element => {
    //          if (moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {
    //              total_customer_today_emit += 1
    //          }
    //         })
    
    //          // after add button click, update customers count
    //       io.sockets.emit('updated_count', total_customer_today_emit)

    //     var db_obj = await DB_user({ 
    //         each_user: data.num
    //     })

    //    await db_obj.save()

       var user_count_obj = await DB_user.find({})


       var _0 = 0
       var _1 = 0
       var _2 = 0
       var _3 = 0
       var _4 = 0
       var _5 = 0
       var _6 = 0
       var _7 = 0
              
          for (let index = 0; index < user_count_obj.length; index++) {
   
        if ( moment(moment_object).format('l') == moment(user_count_obj[index].updatedAt).format('l') ) {
            _0 += 1
        }
             

       if ( moment(moment_object).subtract(1, 'days').format('l') == moment(user_count_obj[index].updatedAt).format('l') ) {
        _1 += 1
       }
   
       if ( moment(moment_object).subtract(2, 'days').format('l') == moment(user_count_obj[index].updatedAt).format('l') ) {
        _2 += 1
       }
   
       if ( moment(moment_object).subtract(3, 'days').format('l') == moment(user_count_obj[index].updatedAt).format('l') ) {
           _3 += 1
       }
   
       if ( moment(moment_object).subtract(4, 'days').format('l') == moment(user_count_obj[index].updatedAt).format('l') ) {
           _4 += 1
       }
   
       if ( moment(moment_object).subtract(5, 'days').format('l') == moment(user_count_obj[index].updatedAt).format('l') ) {
           _5 += 1
       }
   
       if ( moment(moment_object).subtract(6, 'days').format('l') == moment(user_count_obj[index].updatedAt).format('l') ) {
           _6 += 1
       }

       if ( moment(moment_object).subtract(6, 'days').format('l') == moment(user_count_obj[index].updatedAt).format('l') ) {
        _7 += 1
    }
   
      
        
              
          }
   
        //   console.log("thurday: "+ thurday)
        //   console.log("wednesday: "+ wednesday)
        //   console.log("thurday: "+ tuesday)
        //   console.log("monday: "+ monday)
        //   console.log("sunday: "+ sunday)
        //   console.log("saturday: "+ saturday)
        //   console.log("friday: "+ friday)

          // moment().format('dddd') day
          // moment(moment_object).format('l')

         io.sockets.emit('customer_by_day', {start_date: moment(moment_object).format('dddd MMM Do'),
           end_date: moment(moment_object).subtract(6, 'days').format('dddd MMM Do') ,
           today: _0,
          yesterday: _1, 
          _2day_ago: _2,  
          _3day_ago: _3,  
          _4day_ago: _4, 
          _5day_ago: _5, 
          _6day_ago: _6,

        today_label: moment(moment_object).format('dddd'),
        yesterday_label: moment(moment_object).subtract(1, 'days').format('dddd'),
        _2day_label: moment(moment_object).subtract(2, 'days').format('dddd'),
        _3day_label: moment(moment_object).subtract(3, 'days').format('dddd'),
        _4day_label: moment(moment_object).subtract(4, 'days').format('dddd'),
        _5day_label: moment(moment_object).subtract(5, 'days').format('dddd'),
        _6day_label: moment(moment_object).subtract(6, 'days').format('dddd') })     

    //    console.log("351 user_count_obj.length: "+user_count_obj.length)
    // console.log("352 moment(user_count_obj[0].updatedAt).format('LT'): "+moment(user_count_obj[0].updatedAt).format('LT') )

    // var current_hour = moment(moment_object).format('LT')
    // var current_hour_trim = moment(moment_object).format('LT').substring(0, 1)

    // console.log("357 moment_object: "+ current_hour)
    // console.log("358 time substring(0,1): "+ current_hour_trim )

    
   
       
                    
                var am_1 =0;
                var am_2 =0;
                var am_3 =0;
                var am_4 =0; 
                var am_5 =0;
                var am_6 =0;
                var am_7 =0;
                var am_8 =0;
                var am_9 =0;
                var am_10 =0;
                var am_11 =0;
                var am_12 =0; 

                var pm_1 =0;
                var pm_2 =0;
                var pm_3 =0;
                var pm_4 =0; 
                var pm_5 =0;
                var pm_6 =0;
                var pm_7 =0;
                var pm_8 =0;
                var pm_9 =0;
                var pm_10 =0;
                var pm_11 =0;
                var pm_12 =0;




        // for (let index = 10; index < user_count_obj.length; index++) {
        //     for (let index2 = 0; index2 < user_count_obj.length; index2++) {
        //         if ( moment(user_count_obj[index].updatedAt).format('L')  == moment(user_count_obj[index2].updatedAt).format('L') ) {
        //             rr_t_2 += 1
        //         } else {
        //             rr_t += 1
        //         }
        //     }
            
        // }

      

        // user_count_obj.forEach(element => {
        //     // on this date
        //      if (moment(element.updatedAt).format('L') == moment(element.updatedAt).format('L')) {
    
        //         rr_t += 1
    
        //      }
    
        //     })

        

          
        //console.log("403 total_customer_today_emit: "+total_customer_today_emit)

        


   // *********************** off hours **************************
           var whole_users_offHour = 0
           var off_hour_ids =[]

           user_count_obj.forEach(element => {
// moment(moment_object).format('l') == moment(user_count_obj[index].updatedAt).format('l')
// moment(moment_object).subtract(1, 'days').format('l') == moment(user_count_obj[index].updatedAt).format('l')
            if (moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {
                for (let index = 0; index < 60; index++) {
                 if (moment(element.updatedAt).format('LT') == "1:0"+index+" AM" || 
                    moment(element.updatedAt).format('LT') == "1:"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "2:0"+index+" AM" ||
                     moment(element.updatedAt).format('LT') == "2:"+index+" AM" ||
                     moment(element.updatedAt).format('LT') == "3:0"+index+" AM" || 
                     moment(element.updatedAt).format('LT') == "3:"+index+" AM" ||
                   moment(element.updatedAt).format('LT') == "4:0"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "4:"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "5:0"+index+" AM" || 
                    moment(element.updatedAt).format('LT') == "5:"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "6:0"+index+" AM" ||
                     moment(element.updatedAt).format('LT') == "6:"+index+" AM" ||
                     moment(element.updatedAt).format('LT') == "7:0"+index+" AM" || 
                     moment(element.updatedAt).format('LT') == "7:"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "10:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "10:"+index+" PM"  ||
                    moment(element.updatedAt).format('LT') == "11:0"+index+" PM" || 
                    moment(element.updatedAt).format('LT') == "11:"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "12:0"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "12:"+index+" AM") {
                        whole_users_offHour += 1
                       // console.log(whole_users_offHour+" Deleting "+element._id+" "+ moment(element.updatedAt).calendar())
                        off_hour_ids.push(element._id)
                }
            }

            }
               
           });

             //    console.log("array off_hour_ids: "+off_hour_ids)
        //    console.log("Grand total off hours: "+whole_users_offHour)

           // Delete all off-hours users 10 pm to 7 am
           for (let index = 0; index < off_hour_ids.length; index++) {
            await DB_user.findByIdAndDelete({ _id: off_hour_ids[index] }) 
           }

          
          
          
       
       // go through each element in the Database         
      user_count_obj.forEach(element => {
       // on this date
       // moment(moment_object).format('L')  today
       // moment(moment_object).subtract(1, 'days').format('L')  a day ago
       // moment(moment_object).subtract(2, 'days').format('L')  2 day ago
        if (moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {

           
            for (let index = 0; index < 60; index++) {
    
                if (moment(element.updatedAt).format('LT') == "8:0"+index+" AM" ||
                    moment(element.updatedAt).format('LT') == "8:"+index+" AM") {
                    
                am_8 +=1
                }
    
    
                if (moment(element.updatedAt).format('LT') == "9:0"+index+" AM" || 
                moment(element.updatedAt).format('LT') == "9:"+index+" AM") {
            am_9 +=1
            }
    
            if (moment(element.updatedAt).format('LT') == "10:0"+index+" AM" ||
                moment(element.updatedAt).format('LT') == "10:"+index+" AM") {
                
            am_10 +=1
            }
            
            if (moment(element.updatedAt).format('LT') == "11:0"+index+" AM" || 
            moment(element.updatedAt).format('LT') == "11:"+index+" AM") {
        am_11+=1
        }
    
                if (moment(element.updatedAt).format('LT') == "12:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "12:"+index+" PM") {
                    
                pm_12 +=1
                }
    
                    if (moment(element.updatedAt).format('LT') == "1:0"+index+" PM" || 
                    moment(element.updatedAt).format('LT') == "1:"+index+" PM") {
                pm_1 +=1
                }
    
                if (moment(element.updatedAt).format('LT') == "2:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "2:"+index+" PM") {
                    
                pm_2 +=1
                }
    
                if (moment(element.updatedAt).format('LT') == "3:0"+index+" PM" || 
                moment(element.updatedAt).format('LT') == "3:"+index+" PM") {
                    pm_3 +=1
                    }
    
                if (moment(element.updatedAt).format('LT') == "4:0"+index+" PM" ||
                    moment(element.updatedAt).format('LT') == "4:"+index+" PM") {
                    
                pm_4 +=1
                }
    
    
                if (moment(element.updatedAt).format('LT') == "5:0"+index+" PM" ||
                moment(element.updatedAt).format('LT') == "5:"+index+" PM") {
                
            pm_5 +=1
            }
        
                if (moment(element.updatedAt).format('LT') == "6:0"+index+" PM" || 
                moment(element.updatedAt).format('LT') == "6:"+index+" PM") {
            pm_6 +=1
            }
        
            if (moment(element.updatedAt).format('LT') == "7:0"+index+" PM" ||
                moment(element.updatedAt).format('LT') == "7:"+index+" PM") {
                
            pm_7 +=1
            }
        
            if (moment(element.updatedAt).format('LT') == "8:0"+index+" PM" || 
            moment(element.updatedAt).format('LT') == "8:"+index+" PM") {
                pm_8 +=1
                }
        
            if (moment(element.updatedAt).format('LT') == "9:0"+index+" PM" ||
                moment(element.updatedAt).format('LT') == "9:"+index+" PM") {
                
            pm_9 +=1
            }
    
    
        //     if (moment(element.updatedAt).format('LT') == "10:0"+index+" PM" ||
        //     moment(element.updatedAt).format('LT') == "10:"+index+" PM") {
            
        // pm_10 +=1
        // }
    
        //     if (moment(element.updatedAt).format('LT') == "11:0"+index+" PM" || 
        //     moment(element.updatedAt).format('LT') == "11:"+index+" PM") {
        // pm_11 +=1
        // }
    
        // if (moment(element.updatedAt).format('LT') == "12:0"+index+" AM" ||
        //     moment(element.updatedAt).format('LT') == "12:"+index+" AM") {
            
        // am_12 +=1
        // }
    
    
    
               } // end of "for each" statement

         } // end of check date "if statement"
         
      });

      

      
      var users_byHrs = await users_byHours({
        // am_1: am_1,
        // am_2: am_2,
        // am_3: am_3,
        // am_4: am_4,
        // am_5: am_5,
        // am_6: am_6,
        // am_7: am_7,
        am_8: am_8,
        am_9: am_9,
        am_10: am_10,
        am_11: am_11,
        pm_12: pm_12,
        pm_1: pm_1,
        pm_2:  pm_2,
        pm_3: pm_3,
        pm_4: pm_4,
        pm_5: pm_5,
        pm_6: pm_6,
        pm_7: pm_7,
        pm_8: pm_8,
        pm_9: pm_9
        // pm_10: pm_10,
        // pm_11: pm_11,
        // am_12: am_12
       })

       await users_byHrs.save()
     
       
    //   var total_user_for_the_day = 0

      

    //    user_count_obj.forEach(element => {
    //     if (moment(moment_object).format('L') == moment(element.updatedAt).format('L')) {
    //         total_user_for_the_day += 1
           
    //        }

    //    });
       
       
      

         // console.log("forEach: "+users_byHrs_obj[users_byHrs_obj.length-1].am_2) 
        var users_byHrs_obj = await users_byHours.find({})
        //  if (users_byHrs_obj.length > 20) {
            for (let index = 0; index < users_byHrs_obj.length-1; index++) {
               
              // console.log("Delete "+index+": "+ users_byHrs_obj[index]._id)
              await users_byHours.findByIdAndDelete({ _id: users_byHrs_obj[index]._id })
            }
        // }
       
       // console.log("users_byHrs.length: "+users_byHrs_obj.length)
         var am8_9am = users_byHrs_obj[users_byHrs_obj.length-1].am_8
         var am9_10am = users_byHrs_obj[users_byHrs_obj.length-1].am_9
         var am10_11am = users_byHrs_obj[users_byHrs_obj.length-1].am_10
         var am11_12pm = users_byHrs_obj[users_byHrs_obj.length-1].am_11
         var pm12_1pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_12
         var pm1_2pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_1
         var pm2_3pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_2
         var pm3_4pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_3
         var pm4_5pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_4
         var pm5_6pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_5
         var pm6_7pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_6
         var pm7_8pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_7
         var pm8_9pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_8
         var pm9_10pm = users_byHrs_obj[users_byHrs_obj.length-1].pm_9
      
  

     io.sockets.emit('user_by_hour', {


        am8_9am_server: am8_9am,
        am9_10am_server: am9_10am,
        am10_11am_server: am10_11am,
        am11_12pm_server: am11_12pm,
        pm12_1pm_server: pm12_1pm,
        pm1_2pm_server: pm1_2pm,
        pm2_3pm_server: pm2_3pm,
        pm3_4pm_server: pm3_4pm,
        pm4_5pm_server: pm4_5pm,
        pm5_6pm_server: pm5_6pm,
        pm6_7pm_server: pm6_7pm, // pm9_10pm  pm10_11pm pm8_9pm 
        pm7_8pm_server: pm7_8pm,
        pm8_9pm_server: pm8_9pm,
        pm9_10pm_server: pm9_10pm,
        date_today: moment(moment_object).format('dddd MMM Do')

   
       })

   // }


    })




})

// async function findByCredentials(Db_data,email, password) {
//     console.log("findByCredentials function")
//     const user = await Db_data.findOne({ email })

//     if (!user) {
//         throw new Error('Unable to login')
//     }

//     const isMatch = await bcrypt.compare(password, user.password)

//     if (!isMatch) {
//         throw new Error('Unable to login')
//     }

//     return user
// }


        // const user = await LoginCheck_DB.findOne({ email: req.body.email })

        // if(!user){
        //     console.log("can't find this email")
        // }else{
        //     console.log("i find it: "+user)
        // }

       // const admin_A = await LoginCheck_DB.findBy_Identity(req.body.email, req.body.password)
        // customercount@gmail.com
        // set the token as cookie
        //res.cookie('auth_token', token)
        //  const token = user.makeToken()
       // console.log("admin_A: "+admin_A)
        // res.send(admin)     
