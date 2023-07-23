/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import CountsController from 'App/Controllers/Http/CountsController'
Route.group(() => {
  
  Route.resource('/count', "CountsController").apiOnly()
  Route.resource('/count/:accountId/wallet', "WalletsController").apiOnly()
  Route.put('/wallet/:id', "WalletsController.updateBalance")
  Route.delete('/wallet/:id', "WalletsController.destroyWallet")
}).prefix('/api')
