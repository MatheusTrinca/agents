import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoom } from './pages/create-room';
import { Room } from './pages/room';

const client = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/rooms/:roomId" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
