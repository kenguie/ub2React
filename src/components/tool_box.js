import React, { Component } from 'react';

class ToolBox extends Component {
	render() {
		return (
			<div id="CDEV-toolbox">
				<ul>
					<li className="odd">
						<a title="WhatsOn" className="whatsOn" href="/category/304856/whats-on"><span>What's On</span></a>
					</li>
					<li className="even">
						<a title="Apps" className="apps" href="/story/30190437/apps"><span>Apps</span></a>
					</li>
					<li className="odd">
						<a title="Links" className="links" href="/story/30190426/links"><span>Links</span></a>
					</li>
				</ul>
				<ul>
					<li className="odd">
						<a title="NewsTips" className="tips" href="/category/304955/contact-us"><span>News Tips</span></a>
					</li>
					<li className="even">
						<a title="Contests" className="contests" href="/category/304961/contests"><span>Contests</span></a>
					</li>
					<li className="odd">
						<a title="Closings" className="closings" href="/story/30110420/closings"><span>Closings</span></a>
					</li>
				</ul>
			</div>
		);
	}
}

export default ToolBox;