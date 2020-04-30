// waterfall async 
/*
waterfall works by going down the lists of functions first second and so on and if it hits a error it breaks it. Waterfall only runs all the way through if your array of functions all run with good passing code.
This is done thorugh tasks within the waterfall moduel 

- this can be done by achieving the following tasks
1. set a function to a var ie let cool = function()
2. have an IF to catch any errors and an ELSE to console.log() the result
3. in the ELSE call your next function()

4. lastly you will need to handle your Error in a seperate function that gets called by your If error

NOTE: you have to call (error, data) in your function or it will not run the error
*/