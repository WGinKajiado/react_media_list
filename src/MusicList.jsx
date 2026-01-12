import { useState } from "react";

function MusicList() {
  const [music, setMusic] = useState([
    { id: 1, title: "Thriller" },
    { id: 2, title: "Fireflies" },
    { id: 3, title: "93 'til Infinity" },
  ]);

  const [newMusic, setNewMusic] = useState("");

  const addMusic = () => {
    if (newMusic.trim() === "") return;

    const newMusicItem = {
      id: music.length + 1,
      title: newMusic.trim(),
    };

    setMusic([...music, newMusicItem]);
    setNewMusic("");
  };

  const deleteMusic = (id) => {
    setMusic(music.filter((item) => item.id !== id));
  };

  return (
    <div>
      <br />
      <input
        type="text"
        value={newMusic}
        placeholder="Enter music title"
        onChange={(e) => setNewMusic(e.target.value)}
      />
      <button onClick={addMusic}>Add Music</button>

      <h2>Music List</h2>
      <ul>
        {music.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => deleteMusic(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicList;
