# What is that?

Simple Local Storage it's just a simple HTML5/JS Local Storage things to store and get stuff!  
<br/><br/>

# Installing

`npm i simple-localstorage`  
<br/><br/>

# Usage

First thing is import LS<br/>
`import LS from './ls'`
<br/><br/>

Now, save LS into a variable<br/>
`let ls = LS`<br/>
<br/><br/>


### Now you can be happy with these methods():<br/>

• **SET**<br/>
Insert one item like an json object or some variable passing its name as string type and the object itself as parameter<br/>
`ls.set("itemName", itemContent)`
<br/><br/>

• **GET**<br/>
Get one item passing its name as string parameter<br/>
`ls.set("itemName", itemContent)`
<br/><br/>

• **DELETE**<br/>
Delete one item passing its name in string format as parameter<br/>
`ls.delete("itemName")`
<br/><br/>

• **CLEAR**<br/>
...and all storage is gone! Forever...<br/>
`ls.clear()`
<br/><br/>

