import { Button } from '@/components/ui/button';

export function RecordRoomAudio() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen">
      <Button>Gravar Áudio</Button>
      <p>Gravando...</p>
    </div>
  );
}
