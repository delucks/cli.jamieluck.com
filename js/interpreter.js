/* interpreter.js
 */

// Websites that we'll use throughout the document
var home = 'https://jamesluck.com';
var github = 'https://github.com/delucks';
var linkedin = 'https://www.linkedin.com/in/jamieluck';
var resume = 'https://jamesluck.com/JamesLuckResume.pdf';
var lastfm = 'https://www.last.fm/user/delucks';
var links = [
	[".", home],
	["github", github],
	["linkedin", linkedin],
	["resume", resume],
	["lastfm", lastfm]
];

var help_output = "<table><tr>" +
"<td><span class='term-green'>ping</span></td><td>pong</td>" +
"</tr><tr>" +
"<td><span class='term-green'>contact</span></td><td>my contact information</td>" +
"</tr><tr>" +
"<td><span class='term-green'>ls</span></td><td>links to other places (are clickable)</td>" +
"</tr><tr>" +
"<td><span class='term-green'>cd</span></td><td>open one of my links by name</td>" +
"</tr><tr>" +
"<td><span class='term-green'>help</span></td><td>display this help text</td>" +
"</tr><tr>" +
"<td><span class='term-green'>clear</span></td><td>clear the terminal</td>" +
"</tr><tr>" +
"<td><span class='term-green'>exit</span></td><td>exit to my graphical website</td>" +
"</tr></table>";

var ping_output = "PING jamesluck.com (127.0.0.1) 56(84) bytes of data.\n" +
"64 bytes from jamesluck.com: icmp_seq=1 ttl=59 time=0.001 ms\n\n" +
"--- jamesluck.com ping statistics ---\n" +
"1 packets transmitted, 1 received, 0% packet loss, time 0ms\n" +
"rtt min/avg/max/mdev = 0.001/0.001/0.001/0.000 ms";

var contact_output = "<pre>echo 'nv(qznvhofxp)xln' | tr \"$(echo {z..a} | tr -d ' ')()\" 'a-z@.' # email</pre>";

// Set up the terminal
$(document).ready(function() {
	$('#term').terminal({
		echo: function(arg1) {
			this.echo(arg1)
		},
    ping: function() {
      this.echo(ping_output)
    },
		cd: function(arg1) {
			switch (arg1)
			{
				case "$HOME":
					window.open(home,'_blank');
					break;
				case ".":
					window.open(home,'_blank');
					break;
				case "~":
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
        case "..":
          this.echo("You're at the top level, silly");
          break;
				default:
					this.echo("I can't find " + arg1);
			}
		},
		cat: function(arg1) {
			this.exec("cd " + arg1);
		},
    exit: function() {
      $('#term').toggle();
    },
		help: function() {
      this.echo(help_output, {raw: true});
		},
		ls: function() {
			var linktext = "<p class='term-green'>Links are directories, cd into them to view them. You can also click on the directory names.</p><table>";
			for (var i = 0; i<links.length;i++) {
				linktext = linktext + "<tr><td>drwx-r-xr-x</td><td>2</td><td>delucks</td><td>users</td><td>4096</td><td>Aug 28 19:51</td><td><a class='term-green' href='"+links[i][1]+"' target='_blank'>"+links[i][0]+"</a></td></tr>";
			}
			linktext = linktext + "</table>";
			this.echo(linktext, {raw: true, exec: false});
		},
		contact: function() {
      this.echo(contact_output, {raw: true});
		},
	}, {
		prompt: 'visitor@jamesluck.com:~$ ', 
    height: '99%', /* cannot do 100% because it obscures the prompt for whatever reason */
    exit: false,
    convertLinks: false,
		greetings: 'Hi! If you want to see a more traditional website, type \'exit\'\nThe command "help" is a good starting place.'
		});
});
