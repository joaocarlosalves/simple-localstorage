## What is that?
Tiny "TLS" Local Storage it's just a HTML5/JS Local Storage "things" to store and get stuff!<br/>

## Installing
Be sure you have Node JS installed.<br/>
`npm i tiny-localstorage`<br/>

## Usage
First thing is import TLS<br/>
`import TLS from 'tiny-localstorage';`<br/>

Now, you can save TLS into a variable (optional, you can use directly)<br/>
`let tls = TLS`<br/><br/>

####  You can be happy with these methods()

• **SET**<br/>
Insert one item like a json object or some variable passing its name as string type and the object itself as parameter<br/>
`tls.set("itemName", itemContent)`
<br/>

• **GET**<br/>
Get one item passing its name as string parameter<br/>
`tls.set("itemName", itemContent)`
<br/>

• **DELETE**<br/>
Delete one item passing its name in string format as parameter<br/>
`tls.delete("itemName")`<br/>

• **CLEAR**<br/>
...and all storage is gone! Forever...<br/>
`tls.clear()`<br/><br/>

