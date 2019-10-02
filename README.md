## What is that?

Simple Local Storage it's just a HTML5/JS Local Storage "things" to store and get stuff!
<br/>

## Installing

`npm i simple-localstorage`  
<br/>

## Usage

First thing is import LS
`import LS from './ls'`
<br/>

Now, save LS into a variable
`let ls = LS`<br/>
<br/>

####  You can be happy with these methods()

• **SET**
Insert one item like a json object or some variable passing its name as string type and the object itself as parameter<br/>
`ls.set("itemName", itemContent)`
<br/>

• **GET**
Get one item passing its name as string parameter<br/>
`ls.set("itemName", itemContent)`
<br/>

• **DELETE**
Delete one item passing its name in string format as parameter<br/>
`ls.delete("itemName")`
<br/>

• **CLEAR**
...and all storage is gone! Forever...<br/>
`ls.clear()`
<br/><br/>

