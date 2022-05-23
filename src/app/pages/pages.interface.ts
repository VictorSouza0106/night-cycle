export interface ILicense {
    name: string;
    price: string;
    icon: string;
    color: string;
    featuresAvailable: ILicenseFeatures[]
}

export interface ILicenseFeatures {
    label: string;
    permission: boolean;
}

export interface ICourse {
    name: string,
    totalTime:number,
    modules: IModule[],
    description: string,
    icon: string,
}

export interface IModule { 
    name: string,
    classes: IClass[],
}

export interface IClass {
    name: string,
    duration: number
}