import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutiPlay.js'

const $video = document.querySelector('video')
const $playPauseButton = document.querySelector('#play-pause')
const $muteUnmuteButton = document.querySelector('#mute-unmute')

const player = new MediaPlayer({ el: $video, plugins: [
	new AutoPlay()
] })
$playPauseButton.onclick = () => player.togglePlayPause()
$muteUnmuteButton.onclick = () => player.toggleMuteUnmute()