import { createContext } from 'react';
import * as io from 'socket.io-client';

export const SOCKET_URL = 'http://localhost:4000';

export const socket = io.connect(SOCKET_URL);
export const SocketContext = createContext('');
