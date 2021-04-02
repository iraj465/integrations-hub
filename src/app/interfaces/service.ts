export interface Service {
    id:number;
    name:string;
    status: Status;
    version:string;
    keptnVersion:string;
    repoURL:string;
    stars:number;
    type: ServiceType;
    description:string;
    installInstructions:string;
}

export enum ServiceType {
    SERVICE = "service",
    SLI = "sli"
}
export enum Status {
    STABLE = "stable",          /* The project has reached a stable, usable state and is being actively developed. */
    WIP = "wip",                /* Initial development is in progress, but there has not yet been a stable, usable release suitable for the public. */
    SUSPENDED ="suspended",     /* Initial development has started, but there has not yet been a stable, usable release; work has been stopped for the time being but the author(s) intend on resuming work. */
    ABANDONED = "abandoned",    /* Initial development has started, but there has not yet been a stable, usable release; the project has been abandoned and the author(s) do not intend on continuing development. */
    SUPPORT = "supported",      /* maintenance will be provided as time allows. */
    UNSUPPORTED = "unsupported",/* The project has reached a stable, usable state but the author(s) have ceased all work on it. A new maintainer may be desired.*/
}
