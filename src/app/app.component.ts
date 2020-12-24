import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  users = [
    {
      name: "Sylvia Donnis",
      location: "Atlanta, GA",
      phone: "1234567891"
    },
    {
      name: "Dennis Layman",
      location: "Cary, NC",
      phone: "2343218890"
    },
    {
      name: "Sacar Wrapp",
      location: "St Louis, MO",
      phone: "233555001122"
    },
    {
      name: "Penseke Toyota",
      location: "Sterling, VA",
      phone: "23355500"
    },
    {
      name: "Samaya Time",
      location: "St Louis, MO",
      phone: "2335001122"
    }
  ];
}
