## What is that?

Simple Local Storage it's just a HTML5/JS Local Storage "things" to store and get stuff!
<br/>

## Installing

`npm i tiny-localstorage`  
<br/>

## Usage

First thing is import LS<br/>
`import LS from './ls'`
<br/>

Now, save LS into a variable<br/>
`let ls = LS`<br/>
<br/>

####  You can be happy with these methods()

• **SET**<br/>
Insert one item like a json object or some variable passing its name as string type and the object itself as parameter<br/>
`ls.set("itemName", itemContent)`
<br/>

• **GET**<br/>
Get one item passing its name as string parameter<br/>
`ls.set("itemName", itemContent)`
<br/>

• **DELETE**<br/>
Delete one item passing its name in string format as parameter<br/>
`ls.delete("itemName")`
<br/>

• **CLEAR**<br/>
...and all storage is gone! Forever...<br/>
`ls.clear()`
<br/><br/>

