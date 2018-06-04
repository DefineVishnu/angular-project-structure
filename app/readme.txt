app module  has 2 submodules Authorisation and admin(user)
admin modules has all the functionality(masters, transactions  etc)
authorisation module contains  functions such as user authorisation 
login verification,forgotpassword(can be added),etc..


app-routegurad checks if user is loged in (ie: localstorage has user values )

helper folder is used for adding functions which can be commonly acessed by all
submodules such as localstorage retrival ,localstorage addition  and removal



extensions folder   (not added) extended functionality  for date  which can be 
made  acessed by adding scripts 


app.routing 
has all the routing  for all app module
app.componet
has main router outlet
setting.ts 
has commonly used const such as 
AppURL
can also can add APP_END point (not tested)