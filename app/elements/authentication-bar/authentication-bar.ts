/// <reference path="../..\..\bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('authentication-bar')
class AuthenticationBar extends polymer.Base
{
   @property({ type: String })
   greet: string = "Hello";

   @property({ type: String })
   provider: string = ""

   @property({ type: String })
   message: string = ""

   @property({ type: String })
   email: string = ""

   @property({ type: String })
   password: string = ""

   @property({ type: Object })
   user: Object = null

   @property({ type: Boolean })
   statusKnown: boolean


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

   computeLoginStatus(statusKnown:Boolean,user:Object):string
   {
     if(statusKnown && user){
       return "Logged in";
     }

     if(statusKnown){
       return "Logged out";
     }
     return "Unknown status";
   }

   computeLoginHidden(statusKnown:boolean, user:Object){
     return !statusKnown || !!user;

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

AuthenticationBar.register();
