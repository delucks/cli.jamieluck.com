/* interpreter.js
 * part of delucks' site additions, 05/24/2015
 * was changed a bunch of times since then
 */

// Websites that we'll use throughout the document
var home = 'http://www.jamesluck.com';
var github = 'https://github.com/delucks';
var linkedin = 'https://www.linkedin.com/in/jamieluck';
var resume = 'http://www.jamesluck.com/JamesLuckResume.pdf';
var lastfm = 'https://www.last.fm/user/delucks';
var lug = 'http://lug.udel.edu';
var links = [
	["home", home],
	["github", github],
	["linkedin", linkedin],
	["resume", resume],
	["lastfm", lastfm],
	["lug", lug]
];

// Set up the terminal
$(document).ready(function() {
	$('#term').terminal({
		echo: function(arg1) {
			this.echo(arg1)
		},
    ping: function() {
      this.echo("PING www.jamesluck.com (127.0.0.1) 56(84) bytes of data.");
      this.echo("64 bytes from www.jamesluck.com: icmp_seq=1 ttl=59 time=0.001 ms");
      this.echo("\n")
      this.echo("--- www.jamesluck.com ping statistics ---");
      this.echo("1 packets transmitted, 1 received, 0% packet loss, time 0ms");
      this.echo("rtt min/avg/max/mdev = 0.001/0.001/0.001/0.000 ms");
      this.echo("\n")
      this.echo("hi k");
    },
		cd: function(arg1) {
			switch (arg1)
			{
				case "home":
					window.open(home,'_blank');
					break;
				case "github":
					window.open(github,'_blank');
					break;
				case "linkedin":
					window.open(linkedin,'_blank');
					break;
				case "resume":
					window.open(resume,'_blank');
					break;
				case "lastfm":
					window.open(lastfm,'_blank');
					break;
				case "lug":
					window.open(lug,'_blank');
					break;
				default:
					this.echo("I can't find " + arg1);
			}
		},
		cat: function(arg1) {
			this.exec("cd " + arg1);
		},
		help: function() {
			this.echo("\
					<table><tr>\
					<td><span style='color: #526f33'>about</span></td><td>   about me</td>\
					</tr><tr>\
					<td><span style='color: #526f33'>ping</span></td><td>   pong</td>\
					</tr><tr>\
					<td><span style='color: #526f33'>contact</span></td><td>   my contact information</td>\
					</tr><tr>\
					<td><span style='color: #526f33'>ls</span></td><td>   links to other places (are clickable)</td>\
					</tr><tr>\
					<td><span style='color: #526f33'>cd</span></td><td>   open one of my links by name</td>\
					</tr><tr>\
					<td><span style='color: #526f33'>help</span></td><td>   display this help text</td>\
					</tr><tr>\
					<td><span style='color: #526f33'>clear</span></td><td>   clear the terminal</td>\
					</tr></table>",{"raw":"true"});
		},
		ls: function() {
			var linktext = "<p style='color: #526f33'>Links are directories, cd into them to view them. You can also click on the directory names.</p><table>";
			for (var i = 0; i<links.length;i++) {
				linktext = linktext + "<tr><td>drwx-r-xr-x</td><td>2</td><td>delucks</td><td>users</td><td>4096</td><td>May 24 02:21</td><td><a href='"+links[i][1]+"' target='_blank'>"+links[i][0]+"</a></td></tr>";
			}
			linktext = linktext + "</table>";
			this.echo(linktext,{"raw":"true"});
		},
		contact: function() {
			this.echo("\
				You can email me at<br \>\
				<span style='color: #526f33'>me</span> AT \
				<span style='color: #526f33'>jamesluck </span> DOT <span style='color: #526f33'>com</span><br \><br \>\
				If you want to get to me faster, find me on IRC:<br \>\
				username: <span style='color: #526f33'>delucks</span><br \>\
				network: <span style='color: #526f33'>&#160irc.lug.udel.edu</span><br \>\
				channel: <span style='color: #526f33'>&#160#lug</span></span>\
				<br>\
				", {raw: true});
		},
		about: function() {
			this.echo("My name is James Luck, and this is my website. <br>There's a lot more information on here than it seems :)", {raw: true});
		}
	}, {
		prompt: 'visitor@delucks ~ ; ', 
		name:'urxvt', 
		height:'400px',
		width:'600px',
		greetings:greeter
		});
	function greeter() {
		return 'Thanks for stopping by! Type "help" for a list of commands.\nClick my face to toggle the terminal.'
	}

	$('.floating').draggable().resizable();
  $('#headshot').click(function() {
    $('#term').slideToggle("fast");
  });

});
