/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('login-view')
class LoginView extends polymer.Base
{
   @property({ type: String })
   greet: string = "Hello";


   @observe("greet")
   greetChanged(newValue:string, oldValue:string)
   {
      console.log(`greet has changed from ${oldValue} to ${newValue}`);
   }

   @computed()
   greetAll(test:string):string
   {
      return "hello to all";
   }

   googleButtonClick(e:Event){

     this.fire("loginRequest", {provider: 'google'});
   }


   // event handler
   handleClick(e:Event)
   {
      this.greet = "Holà";
      this.fire("greet-event");
   }

   @listen("greet-event")
   onButtonWasClicked(e:Event)
   {
      console.log('event "greet-event" received');
   }


   // lifecycle methods
   ready()
   {
     console.log( this['is'], "ready!")

   }

   created() { }
   attached() { }
   detached() { }



}

LoginView.register();
