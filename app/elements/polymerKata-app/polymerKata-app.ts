/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('polymerKata-app')
class PolymerKataApp extends polymer.Base
{
   @property({ type: String })
   greet: string = "Hello";

   @property({type: Object})
   user:Object;

   @observe("greet")
   greetChanged(newValue:string, oldValue:string)
   {
      console.log(`greet has changed from ${oldValue} to ${newValue}`);
   }

   @computed()
   greetAll(test:string):string
   {
      return this.greet+" to all";
   }

   // event handler
   handleClick(e:Event)
   {
      this.greet = "Holà";
      this.fire("greet-event");
   }

   errorHandler(e:Event) {
     console.log(e);
   }


   @listen("greet-event")
   onButtonWasClicked(e:Event)
   {
      console.log('event "greet-event" received');
   }

   @listen("loginRequest")
    onLoginRequest(e:Event){
      console.log("Login requested");
      this.$.firebaseLogin.provider = "google"
      this.$.firebaseLogin.login();
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

PolymerKataApp.register();
