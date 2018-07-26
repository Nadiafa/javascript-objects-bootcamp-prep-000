var playlist = {ACDC: 'Hells Bells'};

function updatePlaylist(obj, artist, song){
  return Object.assign({}, playlist, {[artist], song});
}
