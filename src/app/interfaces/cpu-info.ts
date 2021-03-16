export interface CpuInfo {
    archName: string;
    features: string[];
    modelName: string;
    numOfProcessors: number;
    processors: Processor[];
    temperatures: number[];
}

export interface Processor {
    usage: ProcessorUsage;
}

export interface ProcessorUsage {
    idle: number;
    kernel: number;
    total: number;
    user: number;
}
