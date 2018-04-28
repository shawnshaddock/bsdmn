import { ConnectionTest } from './connection-test';
import { Location } from './location';

export class Masternode {
    nodeId: string;
    vin: string;
    vinIndex: number;
    address: string;
    ip: string;
    port: number;
    status: string;
    protocol: number;
    pubKey: string;
    lastSeen: string;
    activeSeconds: number;
    activeDuration: string;
    rank: number;
    balance: number;
    connectionTest: ConnectionTest;
    lastRefresh: string;
    location: Location;
}
