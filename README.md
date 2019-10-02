#What is that?

Simple Local Storage it's just a simple HTML5/JS Local Storage things to store and get stuff!  


#Installing

`npm i simple-localstorage`  


#Usage

First thing is import LS
`import LS from './ls'`

Now, save into a variable
`let ls = LS`


#Now you can be happy with these methods():

• SET
Insert one item like an json object or some variable passing its name as string type and the object itself as parameter
`ls.set("itemName", itemContent)`

• GET
Get one item passing its name as string parameter
`ls.set("itemName", itemContent)`

• DELETE
Delete one item passing its name in string format as parameter
`ls.delete("itemName")`

• CLEAR
(...and all storage is gone!)
`ls.clear()`

