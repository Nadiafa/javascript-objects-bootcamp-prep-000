var playlist = {ACDC: 'Hells Bells'};

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, {[artist], song});
}
