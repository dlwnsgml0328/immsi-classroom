import { EduClassroomStore } from 'agora-classroom-sdk';
import { MediaStore } from 'agora-edu-core/lib/stores/domain/common/media';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const edu = new EduClassroomStore();

    const mediaStore = new MediaStore(edu);

    console.log('mediaStore.audioRecordingDevices', mediaStore.audioRecordingDevices);
  }, []);
  return (
    <div>
      <h1>agora cameraDevices</h1>
    </div>
  );
}

export default App;
