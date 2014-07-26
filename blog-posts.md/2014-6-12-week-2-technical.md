---
layout: post
title: Week 2 - Technical
categories: devbootcamp technical
---


CSS Positioning
---------------

<style>
	.god {
			position: fixed;
			top: 10px;
			right: 20px;
			-webkit-filter: drop-shadow(0px 5px 25px rgba(215,215,0,1));
	}

	.container {
		position: relative;
		width: 210px;
		height: 100px;
		margin: 20px;
		padding: 10px;
		background-color: lightgray;
	}

	.box {
		position: relative;
		width: 100px;
		height: 100px;
	}

	.blue {
		background-color: #1975FF;
	}

	.blue-border {
		border: 3px dashed #1975FF;
		box-sizing: border-box;
	}

	.red {
		background-color: red;
	}

	.static {
		position: static;
	}

	.absolute {
		position: absolute;
	}

	.fixed {
		position: fixed;
	}

</style>


Today, we're going to tell a story, a story about love, deception, greed, lust and ...unbridled enthusiasm. You see Elaine, Zach was a simple country boy. You might say a cockeyed optimist, who got himself mixed up in the high stakes game of world diplomacy and international intrigue. <strong>"Oh! my God"</strong> you say? Ah! Here we go.

<div class="god"><a href="http://en.wikipedia.org/wiki/Theological_noncognitivism" target="_blank"><img src="images/fsm.png" width="150"/></a></div>


Fixed Positioning
-----------------

	<p><strong>Fixed</strong> is the most straightfoward property of HTML elements. Fixed elements exist above the normal flow of the HTML universe, and their position is <strong>constant in relation to the bounds of the browser window.</strong> In other words, fixed elements are Gods.</p>

	<p>And you may have already noticed God up there, top-right corner, keeping us inline. We can scroll down and scroll up, but God isn't moving. Try it! He's God, he's not moving. No matter what we mere mortals do, God's position is outside of our influence. In CSS, we would define God's position as, <code> .god { position: fixed; top: 10px; right: 20px; }</code>.</p>


Relative Positioning
--------------------

Well God, being the creator, created the **Relative** property. God placed elements with the relative property in the normal HTML universe. He gave them **a home, and the ability to move around**. Relative elements were called humans.

Humans always have a home, but they can move relative to their home in any direction. Well one day, God's blue human, Zach was hungry. He wandered East of his home hunting and gathering. It looked like this:

<div class="container"> <div class="blue box absolute" style="left: 120px;"> </div> <div class="blue-border box"> </div> </div>

Zach's home is represented by the dotted box, and Zach by the blue box. In CSS we would define this as, `.zach { position: relative; left: 120px }`. Zach's position is relative to his home, and his home is reserved for him while he's gone.


Static Positioning
------------------

**Static** is the default property of HTML elements. God gave them **a home, but they can never leave**. Static positioned humans are under house arrest. They are a danger to HTML society, and they must be contained:

<div class="container"> <div class="blue box static" style="left: 120px;"> </div> </div>

In CSS we would define this as, `.house-arrest: { position: static; left: 120px; }`. Even when Zach tried to leave his home, God kept him in place. Zach's position can not change relative to his home, but at least he still has his home.


Absolute Positiong
------------------

One day, God got tired of keeping Zach inline. So he created the **Absolute** property. God returned Zach's **ability to move, but took away his home**. Seeing an opportunity to grab a swank new pad, red human moved in. Zach was now homeless:</p>

<div class="container"> <div class="blue box absolute" style="left: 120px"> </div> <div class="red box absolute"> </div> <div class="blue-border box absolute"> </div> </div>

In CSS we would define this as, `.homeless: { position: absolute; left: 120px }`. Zach's position is relative to where his home would be, but his home is not reserved for him while he's gone.

So be careful with CSS positioning, things get complicated when you started messing with God. Just keep in mind:
	
* Static maintains an elements home space, but does not allow the element movement.
* Relative maintains an elements home space, but allows the element movement.
* Absolute eliminates an elements home space, while allowing the element movement.
* Fixed locks an element to browser window, out of the html flow.
