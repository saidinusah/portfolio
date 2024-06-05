export type experimentT = {
  name:string;
  url:string;
  summary:string;
  stack:Array<string>;
  id:string
}


export const experiments: experimentT[]  = [
  {
    name:'Cruudy',
    summary:'Architected and implement a service to empower social media vendors to manage their businesses and growth effortlessly.',
    stack:[
      'NestJS',
      'Drizzle-ORM' ,
      "NextJS"
    ],
    url:'https://app.cruudy.com/',
    id:'kmdioeo303kdkkd'
  }
]
