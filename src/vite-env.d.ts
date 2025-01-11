declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}


declare module "classnames"{
    const classname:(...args:Array<any>) =>string;
    export default classname
}

declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}