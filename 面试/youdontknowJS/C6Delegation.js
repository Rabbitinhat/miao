function Foo(who){
  this.me = who
}
Foo.prototype.identify = function() {
  return "I am " + this.me;
  };
  function Bar(who) {
  Foo.call( this, who );
  }
  Bar.prototype = Object.create( Foo.prototype );
  Bar.prototype.speak = function() {
  console.log( "Hello, " + this.identify() + "." );
  };
  var b1 = new Bar( "b1" );
  var b2 = new Bar( "b2" );
  console.log(b1.speak())
  console.log(b2.speak())


Foo = {
  init: function(who){
    this.me = who
  },
  identify: function(){
    return 'I\'am' + this.me
  }
}

Bar = Object.create(Foo)
Bar.speak = function(){
  console.log('Hello', this.identify(), '.')
}

let b3 = Object.create(Bar)
let b4 = Object.create(Bar)
b3.init('b1')
b4.init('b2')
console.log(b1.speak())
console.log(b2.speak())
