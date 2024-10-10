### SEBR 0916

## Mongoose & Express Zoo API

![](https://www.thealexandriazoo.com/images/exhibitLandOfTheJaguar.jpg)

## Introduction
- We have now seen how to hold related data database server 
- Lets create a database with two related models, attach some Express controllers, and give full CRUD to each of them

## Set Up
- You tell us! What files, directories, and other prep work will we need to create and brainstorm to get this working?
- Use previous lessons, labs, and HWs that you have completed as a guide!

  ![](https://cdn.wcs.org/2021/09/20/9ayncfth4i_238e79phl_Julie_Larsen_Maher_4987_Snow_Leopard_Askai_CPZ_10_22_13_hr.jpg)
  
## User Stories
 - AAU I want seperate routes for Index and Show views for all animal types
 - AAU I want a nested controllers folder to store all of my folders
 - AAU I want to be able to create, update, and delete types, and individual animals in ThunderClient
 - AAU I want to use at least 3 different datatypes across our DB

![](https://www.sfzoo.org/wp-content/uploads/2021/03/img_penguin_mw_large.jpg)
   
## Requirements : pt 1
- Your db should have two related objects, Type, and Animals. At least 3 Types with at least 3 Animal objects inside of each
- Your types will be Reptile, Bird, and Mammal, and will hold an index of your Animal objects. (You can do Fish or Insect if you'd like instead of course)
- Animal types will have a number of Boolean variables in them (ie hasFur, hasScales, hasBones...) and anything else you can think of
- Animals should have the following properties : Name, scientific name, region, image url, and anything else you can think of

![](https://images.theconversation.com/files/570907/original/file-20240123-15-jwdv0w.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5159%2C3429&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip)


## Requirements : pt 2
- Give Full CRUD to each of your models by adding Post, Put, and Delete functions into your controllers, and routes into your main js file!
  
## Bonus
  - Attach a front end and begin working on your first Full Stack application!
