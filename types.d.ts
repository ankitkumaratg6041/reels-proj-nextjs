import { Connection } from "mongoose"

declare global{
    var mongoose: {
        conn: Connection | null;
        promise: Promise<Connection> | null;
    };
}

// This is required to convert this file into a module
export {}