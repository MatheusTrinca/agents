import { Button } from '@/components/ui/button';

export function RecordRoomAudio() {
  return (
    <div className="flex flex-col gap-3 h-screen items-center justify-center">
      <Button>Gravar Áudio</Button>
      <p>Gravando...</p>
    </div>
  );
}
