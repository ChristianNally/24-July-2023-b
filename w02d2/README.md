
# Review of how functions are defined

function iHaveAName(callback){
    // does some stuff
    callback("monkeyfuzz");
    return something;
}

iHaveAName(  function(p2){console.log('p2:',p2);}  );


// p2 => console.log('p2:',p2)

* allow for unique pieces of code that don't require repetition (this enables using an anonymous function)
* to supply a conditional statement?

# Why do we want to use callbacks?

* it is to abstract out the actual computation
* with asynchronous code you cannot retrieve the return value
  
 



# Robots

https://www.youtube-nocookie.com/embed/-e1_QhJ1EhQ?playlist=-e1_QhJ1EhQ&autoplay=1&iv_load_policy=3&loop=1&modestbranding=1&start=

# What is asyncronicity?

# Events

# Nesting

# Advanced Reading

https://snyk.io/blog/nodejs-how-even-quick-async-functions-can-block-the-event-loop-starve-io/
