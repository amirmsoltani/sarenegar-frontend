/// <reference types="vite/client" />
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}


declare module "classnames"{
    const classname:(...args:Array<any>) =>string;
    export default classname
}
