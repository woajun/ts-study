type Primitives = boolean 
| string 
| number 
| undefined 
| null 
| any 
| unknown 
| never 
| void 
| bigint 
| symbol

type CommonBuiltIn = Date 
| Error 
| Array<any> 
| Map<any, any> 
| Set<any> 
| RegExp 
| Promise<any>

type SomeObject = { field: string}

type SomeFunction = () => string;

type SomeArray = string[] | Array<string>

type SomeTuple = [string, number]



